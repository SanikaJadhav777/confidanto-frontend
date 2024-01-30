import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormCheck,
  CFormText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCalendar, cilDollar, cilList, cilLocationPin, cilMoney, cilPeople } from '@coreui/icons'
import logo from '../login/confi-logo-new2.png'
import './RegisterStyles.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Additional = () => {
  const categories = [
    'Animals & Pets',
    'Advocacy',
    'Arts & Entertainment',
    'Attorneys & Legal Services',
    'Automotive',
    'Beauty & Personal Care',
    'Business Services',
    'Dating & Personals',
    'Dentists & Dental Services',
    'Education & Instruction',
    'Finance & Insurance',
    'Home & Home Improvement',
    'Furniture',
    'Health & Fitness',
    'Health & Medical',
    'Home Goods',
    'E-Commerce',
    'Real Estate',
  ]

  const [category, setCategory] = useState()
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
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
  //let options = null

  if (category === 'Animals & Pets') {
    type = animals_pets
  } else if (category === 'Advocacy') {
    type = advocacy
  } else if (category === 'Arts & Entertainment') {
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

  console.log(type)

  let optionList
  //let optionList = type.map(service => ({ value: service, label: service }));
  if (type) {
    //options = type.map((el) => <option key={el}>{el}</option>)
    optionList = type.map((service) => ({ value: service, label: service }))
    console.log(optionList)
  }

  const [startDate, setStartDate] = useState()
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
  }

  const [endDate, setEndDate] = useState()
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
  }

  const [expBudget, setExpBudget] = useState()
  const handleExpectedBudget = (e) => {
    setExpBudget(e.target.value)
  }

  const [avgBudget, setAvgBudget] = useState()
  const handleAverageBudget = (e) => {
    setAvgBudget(e.target.value)
  }

  let [goal, setGoal] = useState([])
  /*const handleCheckboxChange = (event) => {
    const { value, checked } = event.target
    if (checked) {
      setGoal((prevSelectedItems) => [...prevSelectedItems, value])
    } else {
      setGoal((prevSelectedItems) => prevSelectedItems.filter((item) => item !== value))
    }
  }

  const [allchecked, setAllChecked] = React.useState([])*/
  function handleChange(event) {
    const { value, checked } = event.target
    if (checked) {
      setGoal((pre) => [...pre, value])
    } else {
      setGoal((pre) => {
        return [...pre.filter((skill) => skill !== value)]
      })
    }
  }
  console.log(goal)

  const location = useLocation()
  const data = location.state
  console.log(data)
  const email = data.email
  console.log(email)
  const navigate = useNavigate()
  console.log(subcategory)
  let subcategories = []
  if (subcategory) {
    for (let i = 0; i < subcategory.length; i++) {
      subcategories.push(subcategory[i].value)
    }
  }
  subcategories = subcategories.join()
  goal = goal.join()
  console.log(subcategories)
  function handleSubmit(event) {
    console.log('Hii')
    event.preventDefault()
    axios
      .post('http://localhost:8081/additional_details', {
        email,
        category,
        subcategories,
        expBudget,
        avgBudget,
        startDate,
        endDate,
        goal,
      })
      .then((res) => {
        //nav("https://www.confidanto.com/user-dashboard/")
        if (res.data) {
          alert("Congratulations ! You've Registered Successfully")
          navigate('/login')
        } else {
          alert('Failed to Register')
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div className="header-logo">
        <img src={logo} alt="confidanto" />
      </div>
      <div className="bg-light min-vh-100 d-flex flex-row register">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Additional Details</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLocationPin} />
                      </CInputGroupText>
                      <CFormSelect onChange={handleCategoryChange}>
                        <option>Select a Category</option>
                        {categories.map((category) => (
                          <option key={category}>{category}</option>
                        ))}
                      </CFormSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilList} />
                      </CInputGroupText>
                      <Select
                        className="multi-select"
                        options={optionList}
                        value={subcategory}
                        onChange={handleSubCategoryChange}
                        isMulti={true}
                        id="multi-select"
                        placeholder="-- Select a Subcatgory --"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilDollar} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Expected Budget"
                        autoComplete="expected-budget"
                        onChange={handleExpectedBudget}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilMoney} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Average Budget"
                        autoComplete="average-budget"
                        onChange={handleAverageBudget}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4 col-md-12 date">
                      <CInputGroupText className="col-xs-6">
                        <CIcon icon={cilCalendar} />
                      </CInputGroupText>
                      <CFormInput
                        type="date"
                        placeholder="Average Budget"
                        autoComplete="average-budget"
                        onChange={handleStartDateChange}
                      />
                      <CInputGroupText className="col-xs-6 col-xs-offset-2" id="endDate">
                        <CIcon icon={cilCalendar} />
                      </CInputGroupText>
                      <CFormInput
                        type="date"
                        placeholder="Average Budget"
                        autoComplete="average-budget"
                        onChange={handleEndDateChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilPeople} />
                      </CInputGroupText>
                      <CFormText className="form-text additional">Goal</CFormText>
                    </CInputGroup>
                    {/*<CInputGroup className="mb-3">
                      <CFormCheck
                        name="flexRadioDefault"
                        id="branding"
                        label="Branding"
                        value="Branding"
                        checked=
                        onChange={handleChange}
                      />
                      <CFormCheck
                        name="flexRadioDefault"
                        id="conversion"
                        label="Conversion"
                        value="Conversion"
                        onChange={handleChange}
                      />
                      <CFormCheck
                        name="flexRadioDefault"
                        id="bplusc"
                        label="Branding + Conversion"
                        value="Branding + Conversion"
                        onChange={handleChange}
                      />
                    </CInputGroup>*/}
                    <CInputGroup className="mb-3">
                      <div className="goal-div">
                        <input type="checkbox" value="Branding" onChange={handleChange} />
                        Branding
                        <input type="checkbox" value="Conversion" onChange={handleChange} />
                        Conversion
                        <input
                          type="checkbox"
                          value="Branding + Conversion"
                          onChange={handleChange}
                        />
                        Branding + Conversion
                      </div>
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={handleSubmit}>
                        Sign Up
                      </CButton>
                      <label>
                        Already have an account? <Link to="/login">Log In</Link>
                      </label>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default Additional
