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
import './LoginStyles.css'
import logo from './confi-logo-new2.png'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ForgotStyles.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = () => {
    axios
      .post('http://localhost:8081/forgot-password', { email })
      .then((res) => {
        if (res.data !== 'Email does not exist') {
          alert('An email has been sent to your account...')
        } else {
          alert(res.data)
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div className="header-logo">
        <img src={logo} alt="confidanto" />
      </div>
      <div className="bg-light min-vh-100 d-flex flex-row">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm className="forgot-class">
                    <h1>Forgot Password</h1>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilEnvelopeClosed} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={handleSubmit}>
                        Submit
                      </CButton>
                    </div>
                    <div className="bottom-links">
                      <label>
                        <Link to="/login">Login</Link>
                      </label>
                      <label>
                        <Link to="/reset_password">Resend link</Link>
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

export default ForgotPassword
