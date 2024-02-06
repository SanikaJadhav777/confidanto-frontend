import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import './LoginStyles.css'
import googleLogo from './google-logo.png'
import logo from './confi-logo-new2.png'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ForgotStyles.css'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [cnfirm_password, setConfirmPassword] = useState('')
  const { email, token } = useParams()

  const navigate = useNavigate()
  const handleSubmit = () => {
    axios
      .post(`http://localhost:8081/reset-password/${email}/${token}`, { password })
      .then((res) => {
        //console.log(res.data)
        if (res.data === 'Password Updated Successfully...!') {
          alert(res.data)
          navigate('/login')
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
                  <CForm className="reset-class">
                    <h1>Reset Password</h1>
                    <p id="login_para">Reset your password</p>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="New Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Confirm Password"
                        autoComplete="current-password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={handleSubmit}>
                        Submit
                      </CButton>
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

export default ResetPassword
