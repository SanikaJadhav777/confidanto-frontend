import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { AppBreadcrumb, DocsLink } from 'src/components'
import './OverviewStyles.css'
import { useRef } from 'react'
import { BsBoxArrowDown } from 'react-icons/bs'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { BsFillPencilFill } from 'react-icons/bs'
import ReactLoading from 'react-loading'
import backg from './Social strategy-pana.png'

const Colors = () => {
  const promptInput = useRef()
  const generateBtn = useRef()
  const resultText = useRef()

  const API_URL = 'https://api.openai.com/v1/chat/completions'
  const API_KEY = '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'

  const [clickedGenerate, setState] = useState(false)
  //const [clickedPrompt, setPromptState] = useState(false);
  const [clickedSubcat, setSubcat] = useState(false)
  const [clickedMonth, setMonth] = useState(false)
  const [clickedBudget, setBudget] = useState(false)
  const [clickedGoal, setGoal] = useState(false)

  const subcatEdit = useRef('')
  const monthEdit = useRef('')
  //console.log()
  /*let prompt
  if (!subcatEdit.current) {
    prompt = 'share marketing plan for clothing brand for the month of april to june'
    console.log('from if')
  } else {
    prompt =
      'share marketing plan for' +
      subcatEdit.current.innerText +
      'brand for the month of' +
      'april to june'
    console.log('from else')
    //console.log(subcatEdit.current.innerText)
  }*/
  /*const subcat_label = subcatEdit.current.innerText
  console.log(subcat_label)
  const prompt =
    'share marketing plan for' + subcat_label + 'brand for the month of' + 'april to june'*/
  //const prompt = 'share marketing plan for clothing brand for the month of april to june'
  //console.log(subcatEdit.current.innerText)
  const reportTemplatePdf = useRef()
  const downloadbtn = useRef()
  const loadingDiv = useRef()
  const parentDiv = useRef()
  const generate = async () => {
    const subcat_label = subcatEdit.current.innerText
    const moths_label = monthEdit.current.innerText
    console.log(moths_label)
    const months = moths_label.split('-')
    console.log(months)
    parentDiv.current.style.background = backg
    loadingDiv.current.style.visibility = 'visible'
    loadingDiv.current.style.display = 'block'
    if (reportTemplatePdf.current.style.visibility == 'visible') {
      reportTemplatePdf.current.style.visibility = 'hidden'
      reportTemplatePdf.current.style.display = 'none'
      downloadbtn.current.style.visibility = 'hidden'
      downloadbtn.current.style.display = 'none'
    }
    console.log(subcat_label)
    const prompt =
      'share marketing plan for' +
      subcat_label +
      'brand for the month of ' +
      months[0] +
      ' to ' +
      months[1]
    //console.log(prompt)
    try {
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        }),
      })

      const data = await response.json()
      console.log(data)
      resultText.current.innerText = data.choices[0].message.content
    } catch (error) {
      console.error('Error:', error)
      resultText.current.innerText = 'Error occurred while generating.'
    } finally {
      parentDiv.current.style.background = '#fff'
      loadingDiv.current.style.visibility = 'hidden'
      loadingDiv.current.style.display = 'none'
      reportTemplatePdf.current.style.visibility = 'visible'
      reportTemplatePdf.current.style.display = 'block'
      downloadbtn.current.style.visibility = 'visible'
      downloadbtn.current.style.display = 'block'
    }
  }

  /*useEffect(() => {
    generate()
  }, [])*/

  function handleDownload() {
    console.log(reportTemplatePdf.current)
    window.html2pdf(reportTemplatePdf.current).save()
  }

  const downloadPDF = () => {
    const input = reportTemplatePdf.current
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4', 'continuous', true)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 30
      pdf.setFontSize(24)
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('overview.pdf')
    })
  }

  /*const [clickedSubcat, setSubcat] = useState(false)
  const [clickedMonth, setMonth] = useState(false)
  const [clickedBudget, setBudget] = useState(false)
  const [clickedGoal, setGoal] = useState(false)

  const subcatEdit = useRef()*/
  const handleSubcatClick = () => {
    setSubcat((clickedSubcat) => !clickedSubcat)
    if (clickedSubcat) {
      subcatEdit.current.contentEditable = true
      subcatEdit.current.style.border = '1px solid #000'
      subcatEdit.current.style.color = '#000'
      subcatEdit.current.style.padding = '0 0.9rem 0 0'
    } else {
      subcatEdit.current.contentEditable = false
      subcatEdit.current.style.border = 'none'
      //subcatEdit.current.style.color = '#fff'
      subcatEdit.current.style.padding = '0 0 0 0'
    }
  }

  //const monthEdit = useRef()
  const handleMonthClick = () => {
    setMonth((clickedMonth) => !clickedMonth)
    if (clickedMonth) {
      monthEdit.current.contentEditable = true
      monthEdit.current.style.border = '1px solid #000'
      monthEdit.current.style.color = '#000'
      monthEdit.current.style.padding = '0 0.9rem 0 0'
    } else {
      monthEdit.current.contentEditable = false
      monthEdit.current.style.border = 'none'
      //monthEdit.current.style.color = '#fff'
      monthEdit.current.style.padding = '0 0 0 0'
    }
  }

  const budgetEdit = useRef()
  const handleBudgetClick = () => {
    setBudget((clickedBudget) => !clickedBudget)
    if (clickedBudget) {
      budgetEdit.current.contentEditable = true
      budgetEdit.current.style.border = '1px solid #000'
      budgetEdit.current.style.color = '#000'
      budgetEdit.current.style.padding = '0 0.9rem 0 0'
    } else {
      budgetEdit.current.contentEditable = false
      budgetEdit.current.style.border = 'none'
      //budgetEdit.current.style.color = '#fff'
      budgetEdit.current.style.padding = '0 0 0 0'
    }
  }

  const goalEdit = useRef()
  const handleGoalClick = () => {
    setGoal((clickedGoal) => !clickedGoal)
    if (clickedGoal) {
      goalEdit.current.contentEditable = true
      goalEdit.current.style.border = '1px solid #000'
      goalEdit.current.style.color = '#000'
      goalEdit.current.style.padding = '0 0.9rem 0 0'
    } else {
      goalEdit.current.contentEditable = false
      goalEdit.current.style.border = 'none'
      //goalEdit.current.style.color = '#fff'
      goalEdit.current.style.padding = '0 0 0 0'
    }
  }
  return (
    <>
      <div className="parent-div" ref={parentDiv}>
        <div className="info">
          <label>Category: </label> <label>E-Commerce </label>
          <label>Subcategory: </label>
          <label className="subcat" ref={subcatEdit}>
            Real Estate
          </label>
          <button onClick={handleSubcatClick}>
            <BsFillPencilFill className="icon" />
          </button>
          <label>Month Selected: </label> <label ref={monthEdit}>April-May </label>
          <button onClick={handleMonthClick}>
            <BsFillPencilFill className="icon" />
          </button>
          <label>Budget: </label> <label ref={budgetEdit}>$800 </label>
          <button onClick={handleBudgetClick}>
            <BsFillPencilFill className="icon" />
          </button>
          <label>Goal: </label> <label ref={goalEdit}>Branding + Conversion </label>
          <button onClick={handleGoalClick}>
            <BsFillPencilFill className="icon" />
          </button>
        </div>
        <button className="generatebtn" onClick={generate}>
          Generate Plan
        </button>
        <div className="loading-div" ref={loadingDiv}>
          <ReactLoading
            className="loader-spin"
            type="spin"
            color="#f76555"
            height={150}
            width={100}
          />
          <label className="loader-label">Getting everything ready...</label>
        </div>
        {/*<div ref={reportTemplatePdf} className="overview-content">
        <p ref={resultText}></p>
      </div>*/}
        <CCard className="mb-4" id="overview-content" ref={reportTemplatePdf}>
          <CCardHeader>
            <h2>Overview</h2>
          </CCardHeader>
          <CCardBody>
            <p ref={resultText}></p>
          </CCardBody>
        </CCard>
        <button ref={downloadbtn} className="downloadbtn" onClick={downloadPDF}>
          Download <BsBoxArrowDown className="icon" />
        </button>
      </div>
    </>
  )
}

export default Colors
