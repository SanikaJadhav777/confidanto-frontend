import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeClosed } from '@coreui/icons'
import logo from '../login/confi-logo-new2.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import verified from './verified-unscreen.gif'
import './ConfirmStyles.css'

const ConfirmAccount = () => {
  const { email, token } = useParams()
  //const password = 'Sanik@29'
  const handleSubmit = () => {
    axios
      .post(`http://localhost:8081/confirm-account/${email}/${token}`)
      .then((res) => {
        console.log(res.data)
        if (res.data === 'Account Verified...!') {
          alert('Your Account has been verified...')
        } else {
          alert(res.data)
        }
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    handleSubmit()
  })
  return (
    <>
      <div className="header-logo">
        <img src={logo} alt="confidanto" />
      </div>
      <div className="bg-light min-vh-100 d-flex flex-row confirm-account">
        <CContainer>
          <CRow className="justify-content-center">
            <img className="verify-logo" src={verified} alt="Account Verified Image" />
            <h2>Congratulations ! Your account has been verified...</h2>
            <label>
              Click here to
              <Link to="/login"> Login</Link>
            </label>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default ConfirmAccount
