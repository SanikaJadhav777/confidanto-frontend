import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'
import { NavLink } from 'react-router-dom'

import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'

import { useState } from 'react'
import { useRef } from 'react'

import { BsFillPencilFill } from 'react-icons/bs'

import './css/HeaderCardStyles.css'

const AppBreadcrumb = () => {
  const [clickedSubcat, setState] = useState(false)
  const [clickedMonth, setMonth] = useState(false)
  const [clickedBudget, setBudget] = useState(false)
  const [clickedGoal, setGoal] = useState(false)

  const subcatEdit = useRef()
  const handleSubcatClick = () => {
    setState((clickedSubcat) => !clickedSubcat)
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

  const monthEdit = useRef()
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
  const data = [
    {
      subcategory_data: subcatEdit.current.innerText,
      budget_data: budgetEdit.current.innerText,
      month_data: monthEdit.current.innerText,
    },
  ]

  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <div className="info">
      <label>Category: </label> <label>E-Commerce </label>
      <label>Subcategory: </label>
      <label className="subcat" ref={subcatEdit}>
        Apparel/Clothing
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
  )
}

export default React.memo(AppBreadcrumb)
