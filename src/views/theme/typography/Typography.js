import React, { useRef, useState, useEffect } from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'
import './ForecastStyles.css'
import { BsBoxArrowDown } from 'react-icons/bs'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import * as XLSX from 'xlsx'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Typography = () => {
  const location = useLocation()
  const data_back = location.state
  console.log(data_back)
  const reportTemplatePdf = useRef()
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
      pdf.save('forecasting.pdf')
    })
  }

  const [data, setData] = useState([])

  const handleFileUpload = (e) => {
    const reader = new FileReader()
    const file = XLSX.readFile('marksheet.js', { type: 'binary' })
    console.log(file)
    reader.readAsBinaryString(e.target.files[0])
    reader.onload = (e) => {
      const data = e.target.result
      const workbook = XLSX.read(data, { type: 'binary' })
      const file = XLSX.read('marksheet.xlsx', { type: 'binary' })
      console.log(file)
      const sheet1 = file.SheetNames[4]
      console.log(sheet1)
      console.log(workbook)
      const sheetName = workbook.SheetNames[4]
      console.log(sheetName)
      const sheet = workbook.Sheets[sheetName]
      const parsedData = XLSX.utils.sheet_to_json(sheet)
      setData(parsedData)
    }
  }

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./marksheet.xlsx', {
          responseType: 'arraybuffer',
        })
        const data = response.data
        const workbook = XLSX.read(data, { type: 'array' })
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 })

        console.log(jsonData)
        // Now you can use jsonData in your application
      } catch (error) {
        console.error('Error fetching or reading the Excel file:', error)
      }
    }

    fetchData()
  }, [])*/
  const catEdit = useRef('')
  const subcatEdit = useRef('')
  const [userData, setUserData] = useState([])
  const [values, setValues] = useState({
    category: 'Animals & Pets',
    subcategory: 'Pet Food',
  })
  useEffect(() => {
    //console.log(catEdit.current.innerText)
    const getUserdata = async () => {
      //console.log(catEdit.current.innerText)
      //const category = catEdit.current.innerText
      //console.log(category)
      /*const addValues = () => {
        setValues({
          category: catEdit.current.innerText,
          subcategory: subcatEdit.current.innerText,
        })
      }*/
      //setValues({ category: category, subcategory: subcatEdit.current.innerText })
      //addValues()
      console.log(values)
      //const reqData = await fetch('http://localhost:5000/users', values)
      /*while (values.category === '') {
        const addValues = () => {
          setValues({
            category: catEdit.current.innerText,
            subcategory: subcatEdit.current.innerText,
          })
          addValues()
        }
      }*/
      if (values.category !== '') {
        axios
          .post('http://localhost:8081/forecasting', values)
          //const resData = await reqData.json()
          .then((res) => {
            setUserData(res.data)
            console.log(res.data)
            console.log(res)
          })
      }
      //setUserData(resData)
      //console.log(resData)
    }
    getUserdata()
  }, [])
  return (
    <>
      {/*<div className="info">
        <label>Category: </label> <label ref={catEdit}>E-Commerce </label>
        <label>Subcategory: </label>
        <label className="subcat" ref={subcatEdit}>
          Kitchenware
        </label>
      </div>*/}
      <CCard className="mb-4" ref={reportTemplatePdf}>
        <CCardHeader>
          <h2>Forecasting</h2>
        </CCardHeader>
        <CCardBody>
          <div className="info">
            <label>Category: {values.category}</label>
            <label>Subcategory: {values.subcategory}</label>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Months</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>CPC</th>
                <th>CTR</th>
                <th>CVR</th>
                <th>Spend</th>
                <th>Orders</th>
                <th>Revenue</th>
                <th>Cost/Order</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((res, index) => (
                <tr key={index}>
                  <td>{res.month}</td>
                  <td>19680</td>
                  <td>1598</td>
                  <td>{res.cpc}</td>
                  <td>{res.ctr}</td>
                  <td>{res.cvr}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>6.3</td>
                  <td>-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      <button className="downloadbtnf" onClick={downloadPDF}>
        Download <BsBoxArrowDown className="icon" />
      </button>
    </>
  )
}

export default Typography
