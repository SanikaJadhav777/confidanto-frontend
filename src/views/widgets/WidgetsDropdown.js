import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions, cilPencil } from '@coreui/icons'
import { useState } from 'react'
import { useRef } from 'react'
import Select from 'react-select'
import './WidgetStyles.css'
import moment from 'moment'
import { is } from 'core-js/core/object'

const WidgetsDropdown = () => {
  /*console.log(props.data)
  //console.log(props.data.username)
  const userName = props.data.user_info[0].username
  const category_backend = props.data.user_info[0].category
  const subcategory_backend = props.data.user_info[0].sucategory.split(',')
  const startDate_backend = props.data.user_info[0].start_date
  const endDate_backend = props.data.user_info[0].end_date
  const expected_budget = props.data.user_info[0].exp_budget
  const [isNull, setIsNull] = useState()
  if (props.data == null) {
    setIsNull(true)
  } else {
    setIsNull(false)
  }
  console.log(subcategory_backend)
  let subacategory_text
  if (subcategory_backend.length > 1) {
    subacategory_text = subcategory_backend[0] + ' +' + (subcategory_backend.length - 1)
  } else {
    subacategory_text = subcategory_backend[0]
  }*/
  const [clickedSubcat, setState] = useState(false)
  const [clickedMonth, setMonth] = useState(false)
  const [clickedBudget, setBudget] = useState(false)
  const [clickedGoal, setGoal] = useState(false)

  /*const subcatEdit = useRef()
  const handleSubcatClick = () => {
    setState((clickedSubcat) => !clickedSubcat)
    if (clickedSubcat) {
      subcatEdit.current.contentEditable = true
      subcatEdit.current.style.border = '1px solid #000'
      subcatEdit.current.style.padding = '0 0.9rem 0 0'
    } else {
      subcatEdit.current.contentEditable = false
      subcatEdit.current.style.border = 'none'
      //subcatEdit.current.style.color = '#fff'
      subcatEdit.current.style.padding = '0 0 0 0'
    }
  }*/
  const [startDate, setStart] = useState(moment().format('DD-MM-YYYY'))
  const [endDate, setEnd] = useState(moment().format('DD-MM-YYYY'))
  const onChangeStartDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD')
    setStart(newDate)
    console.log(newDate) //value picked from date picker
  }

  const onChangeEndDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD')
    setEnd(newDate)
    console.log(newDate) //value picked from date picker
  }
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  /*const tempStart = startDate_backend.split('-')
  //console.log(tempStart)
  const tempStartInd = Number(tempStart[1])
  //console.log(tempStartInd)
  const startMonth_backend = monthNames[tempStartInd - 1]
  const tempEnd = endDate_backend.split('-')
  const tempEndInd = Number(tempEnd[1])
  const endMonth_backend = monthNames[tempEndInd - 1]*/
  const monthSel = useRef()
  const monthEdit = useRef()
  const handleMonthClick = () => {
    setMonth((clickedMonth) => !clickedMonth)
    console.log(startDate)
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const temp = startDate.split('-')
    const StartInd = Number(temp[1])
    console.log(StartInd)
    const startMonth = monthNames[StartInd - 1]
    console.log(startMonth)
    const temp1 = endDate.split('-')
    const EndInd = Number(temp1[1])
    const endMonth = monthNames[EndInd - 1]
    console.log(endMonth)

    if (clickedMonth) {
      /*monthEdit.current.contentEditable = true
      monthEdit.current.style.border = '1px solid #000'
      monthEdit.current.style.padding = '0 0.9rem 0 0'*/
      monthEdit.current.style.visibility = 'hidden'
      monthEdit.current.style.display = 'none'
      monthSel.current.style.visibility = 'visible'
      monthSel.current.style.display = 'block'
    } else {
      /*monthEdit.current.contentEditable = false
      monthEdit.current.style.border = 'none'
      //monthEdit.current.style.color = '#fff'
      monthEdit.current.style.padding = '0 0 0 0'*/
      monthEdit.current.style.visibility = 'visible'
      monthEdit.current.style.display = 'block'
      monthEdit.current.innerText = startMonth + ' - ' + endMonth
      monthSel.current.style.visibility = 'hidden'
      monthSel.current.style.display = 'none'
    }
  }

  const budgetEdit = useRef()
  const handleBudgetClick = () => {
    setBudget((clickedBudget) => !clickedBudget)
    if (clickedBudget) {
      budgetEdit.current.contentEditable = true
      budgetEdit.current.style.border = '1px solid #000'
      budgetEdit.current.style.padding = '0 0.9rem 0 0'
      budgetEdit.current.style.background = '#fff'
      budgetEdit.current.style.color = '#000'
    } else {
      budgetEdit.current.contentEditable = false
      budgetEdit.current.style.border = 'none'
      budgetEdit.current.style.color = '#fff'
      budgetEdit.current.style.padding = '0 0 0 0'
      budgetEdit.current.style.background = '#e55353'
    }
  }

  const goalEdit = useRef()
  const handleGoalClick = () => {
    setGoal((clickedGoal) => !clickedGoal)
    if (clickedGoal) {
      goalEdit.current.contentEditable = true
      goalEdit.current.style.border = '1px solid #000'
      goalEdit.current.style.padding = '0 0.9rem 0 0'
    } else {
      goalEdit.current.contentEditable = false
      goalEdit.current.style.border = 'none'
      //goalEdit.current.style.color = '#fff'
      goalEdit.current.style.padding = '0 0 0 0'
    }
  }

  const animals_pets = ['Pet Shop', 'Pet Grooming', 'Pet Food']
  const advocacy = [
    'Case advocacy',
    'Peer advocacy',
    'Paid independent advocacy',
    'Citizen advocacy',
    'Statutory advocacy',
  ]
  const art_ent = [
    'Amusement parks',
    'Music',
    'Performance art',
    'Publicist',
    'Sports',
    'Artist manager',
    'Media',
    'Bounce house',
    'Casino',
    'Comedy Club',
    'Costume designer',
    'Dance studio',
    'Dinner Theatre',
    'D j',
    'Museums',
    'Promoter',
    'Ad film production',
    'Agents and agencies',
    'Animation',
    'Art Gallery',
    'Attractions',
    'Entertainment venues',
  ]
  const autom = [
    'Auto restoration',
    'Car dealership',
    'Car rental services',
    'Car wash',
    'Auto Accessories store',
    'Bus services',
    'Car detailing',
    'Spare parts',
    'Auto body repair shops',
    'Auto instructor',
    'Automobile Magazine',
    'Oil change',
    'Charging station',
    'Towing',
    'Auto locksmith business',
    'Automobile insurance',
    'Battery store',
    'Car service',
    'Hauling business',
    'Limo business',
  ]
  const attorneys = [
    'Contract lawyer',
    'Immigration lawyer',
    'Intellectual property lawyer',
    'Tax lawyer',
    'Family law',
    'Personal injury lawyer',
    'Prosecutor',
    'Bankruptcy Lawyer',
    'Entertainment lawyer',
    'Real estate lawyer',
    'Technology lawyer',
  ]
  const beauty = [
    'Skin care',
    'Decorative cosmetics',
    'Hair care',
    'Beauty products',
    'Oral Care',
    'Beauty product business',
    'Makeup artist',
    'Nail salon',
    'Perfumes',
    'Start a beauty school',
    'Start a spa business',
  ]
  const business = [
    'Management Consultant',
    'Financial Analyst',
    'Finance',
    'Sales',
    'Marketing',
    'Sales Management',
    'Accounting',
    'Event management',
    'Accountant',
    'Software Engineer',
    'Management Analyst',
    'Real Estate',
    'Construction',
    'Actuary',
    'Financial adviser',
    'Business Analyst',
    'Business consultant',
    'Auditor',
    'Office administration',
    'Chief Executive Officer',
  ]
  const dating = ['Online dating App', 'Online Dating website', 'Wedding Planners']

  const dentists = [
    'Endodontic procedures',
    'Pediatric dental services',
    'Periodontal treatments',
    'Diagnostic and preventative dental services',
    'Prosthodontic services',
    'Oral and maxillofacial surgery',
  ]
  const edu = [
    'Tutoring',
    'Online private/ charter school',
    'Online courses',
    ,
    'Lesson plans/material',
    'Homeschooling',
    'Teaching languages',
    'Test prep coaching',
    'Mindfulness or stress management',
  ]
  const finance = [
    'Commercial auto insurance',
    'Commercial property insurance',
    'General liability insurance',
    'Data breach insurance',
    "Workers' compensation insurance",
    'Business income insurance',
    'Commercial umbrella insurance',
    'Liability insurance',
    'Business interruption insurance',
    "Business owner's policy",
  ]

  const home_improve = [
    'Basement remodeling',
    'Lawn care',
    'Plumbing',
    'Electrical',
    'Furniture assembly',
    'Apartment cleaning',
    'Carpentry',
    'Deck building',
    'Flooring',
    'Handyman services',
    'Home security business',
    'House painter',
    'Carpeting',
    'Fence installation and repair',
    'Wallpapering',
    'Home maintenance and repair services',
    'Home automation Technician',
    'Tiling',
  ]
  const furniture = [
    'Furniture stores',
    'Interior design services',
    'Furniture repair shops',
    'Furniture Manufacturing',
    'Furniture distribution',
    'Specializing in specific types of furniture',
    'Reupholstery shop',
  ]

  const health = [
    'Yoga',
    'Bootcamp Fitness',
    'Nutrition',
    'Personal training',
    'Branded fitness apparel',
    'Meditation',
    'Pilates',
    'CrossFit',
    'Dance studio',
    'Boutique gym',
    'Fitness equipment',
    'Fitness vlogger',
    'Mobile fitness studio',
    'Outdoor classes',
    'Personalized wellness',
    'Physical therapist',
    'Powerlifting gym',
    'Zumba',
    'Bike tour',
    'Fitness affiliate',
    'Fitness Director',
    'Fitness franchise',
    'Gymnastics classes business',
  ]

  const health_medical = [
    'Methadone clinic',
    'Healthcare facilities',
    'Medical billing service',
    'Medical records management',
    'Transcribing services',
    'Mobile Medical screening',
    'Nutrition consultation',
    'Pharmaceutical',
    'Childbirth services',
    'Health tech',
    'Healthcare blogging',
    'Medical equipment',
    'Nursing staffing agency',
    'Mental wellness',
    'Nursing home',
    'Adult Daycare',
    'Biomedical waste Management',
    'Blood Bank',
    'D/R/U/G/S',
    'Health consulting',
    'Physical therapy clinic',
    'Start manufacturing medical equipment',
    'Diabetes Clinic',
    'Drug testing',
  ]

  const home_goods = [
    'Outdoor',
    'Gifts',
    'Bedding',
    'Bath',
    'Home',
    'Accents',
    'Storage',
    'Dining',
    'Wall Decor',
    'Mirrors',
    'Kitchen',
    'Essentials',
    'Seasonal',
    'Decor',
  ]
  const ecomm = [
    'Apparels',
    'Jewelry',
    'Handbags',
    'Electronics',
    'Books',
    'Furniture',
    'Groceries',
    'Beauty products',
    'Fashion',
    'Mobile phones',
    'Movie tickets',
    'Toys and games',
    'Auto and Parts',
    'Baby products',
    'Fitness equipment',
    'Health supplements',
    'Kitchenware',
  ]
  const real_estate = ['Auditor', 'Renting a property', 'Selling A Property']

  let type = null
  let options = null
  const category = 'E-Commerce'

  const cat = useRef('')
  //const category = category_sel.current.innerText
  console.log(cat)
  if (cat.current.innerText === 'Animals & Pets') {
    type = animals_pets
  } else if (cat.current.innerText === 'Advocacy') {
    type = advocacy
  } else if (cat.current.innerText === 'Arts & Entertainment') {
    type = art_ent
  } else if (category === 'Automotive') {
    type = autom
  } else if (category === 'Attorneys & Legal Services') {
    type = attorneys
  } else if (category === 'Beauty & Personal Care') {
    type = beauty
  } else if (category === 'Business Services') {
    type = business
  } else if (category === 'Dating & Personals') {
    type = dating
  } else if (category === 'Dentists & Dental Services') {
    type = dentists
  } else if (category === 'Education & Instruction') {
    type = edu
  } else if (category === 'Finance & Insurance') {
    type = finance
  } else if (category === 'Home & Home Improvement') {
    type = home_improve
  } else if (category === 'Furniture') {
    type = furniture
  } else if (category === 'Health & Fitness') {
    type = health
  } else if (category === 'Health & Medical') {
    type = health_medical
  } else if (category === 'Home Goods') {
    type = home_goods
  } else if (category === 'E-Commerce') {
    type = ecomm
  } else if (category === 'Real Estate') {
    type = real_estate
  }
  const [subcategory, setSubCategory] = useState()
  const handleSubCategoryChange = (data) => {
    setSubCategory(data)
  }

  //console.log(subcategory)
  const subcatEdit = useRef()
  const subcatDrop = useRef()
  const handleSubcatClick = () => {
    setState((clickedSubcat) => !clickedSubcat)
    let text_subcat = subcatEdit.current.innerText
    if (clickedSubcat) {
      subcatEdit.current.style.visibility = 'hidden'
      subcatEdit.current.style.display = 'none'
      subcatDrop.current.style.visibility = 'visible'
      subcatDrop.current.style.display = 'block'
    } else {
      subcatDrop.current.style.visibility = 'hidden'
      subcatDrop.current.style.display = 'none'
      subcatEdit.current.style.visibility = 'visible'
      subcatEdit.current.style.display = 'block'
      if (subcategory) {
        if (subcategory.length != 0)
          subcatEdit.current.innerText = subcategory[0].value + ' +' + (subcategory.length - 1)
      } else subcatEdit.current.innerText = text_subcat
    }
  }

  console.log(type)

  let optionList
  //let optionList = type.map(service => ({ value: service, label: service }));
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>)
    optionList = type.map((service) => ({ value: service, label: service }))
    console.log(optionList)
  }
  return (
    <>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="primary"
            value={
              <div className="edit-div">
                <h2 ref={cat}>E-Commerce</h2>
              </div>
            }
            title="Category"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="info"
            value={
              <div className="edit-div">
                <h2 ref={subcatEdit}>Clothing</h2>
                <div className="multi" ref={subcatDrop}>
                  <Select
                    options={optionList}
                    value={subcategory}
                    onChange={handleSubCategoryChange}
                    isMulti={true}
                    id="multi-select"
                    placeholder="-- Select a Subcatgory --"
                  />
                </div>
                <span className="fs-6 fw-normal">
                  <CIcon icon={cilPencil} onClick={handleSubcatClick} className="edit-icon" />
                </span>
              </div>
            }
            title="Subcategory"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="warning"
            value={
              <div className="edit-div">
                <h2 ref={monthEdit}>April - June</h2>
                <div className="date_pick" ref={monthSel}>
                  <input
                    type="date"
                    id="start"
                    className="form-control"
                    value={startDate}
                    onChange={onChangeStartDate}
                  />
                  <input
                    type="date"
                    id="end"
                    className="form-control"
                    value={endDate}
                    onChange={onChangeEndDate}
                  />
                </div>
                <span className="fs-6 fw-normal">
                  <CIcon icon={cilPencil} onClick={handleMonthClick} className="edit-icon" />
                </span>
              </div>
            }
            title="Date Range"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsA
            className="mb-4"
            color="danger"
            value={
              <div className="edit-div">
                <h2 ref={budgetEdit}>$800</h2>
                <span className="fs-6 fw-normal">
                  <CIcon icon={cilPencil} onClick={handleBudgetClick} className="edit-icon" />
                </span>
              </div>
            }
            title="Budget"
          />
        </CCol>
      </CRow>
    </>
  )
}

export default WidgetsDropdown
