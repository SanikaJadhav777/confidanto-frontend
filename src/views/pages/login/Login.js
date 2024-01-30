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

const Login = () => {
  const [userName, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  //const nav = useNavigate
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    const errors = validate()
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      alert('Done')
    }
    axios
      .post('http://localhost:8081/login', { userName, password })
      .then((res) => {
        //nav("https://www.confidanto.com/user-dashboard/")
        if (res.data) {
          console.log(res.data)
          //console.log(res.result)
          //alert(res.data)
          ///nav('/dashboard')
          //window.location.href = 'https://www.confidanto.com/user-dashboard/'
          const user_info = res.data
          navigate('*', { state: { user_info } })
        } else {
          alert(res.data)
        }
      })
      .catch((err) => console.log(err))
  }

  const validate = () => {
    const error = {}
    if (!userName) {
      error.userName = 'User Name is Required'
    } else if (/\S+@\S+\.\S/.test(userName)) {
      error.userName = 'Email not matched'
    } else {
      error.userName = ''
    }

    if (!password) {
      error.password = 'Password is Required'
    } else if (password.length > 12) {
      error.password = 'Too many characters'
    } else {
      error.password = ''
    }

    return error
  }
  return (
    <>
      <div className="header-logo">
        <img src={logo} alt="confidanto" />
      </div>
      <div className="bg-light min-vh-100 d-flex flex-row">
        <CContainer>
          <h1 className="login-heading">Log In</h1>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4 loginp">
                  <CCardBody>
                    <CForm>
                      <p className="text-medium-emphasis" id="login_para">
                        Sign In to your account
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          onChange={(e) => setUser(e.target.value)}
                        />
                      </CInputGroup>
                      {errors.userName && <div className="error">{errors.userName}</div>}
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </CInputGroup>
                      {errors.password && <div className="error">{errors.password}</div>}
                      <CRow>
                        <CCol xs={6}>
                          <CButton color="primary" className="px-4" onClick={handleSubmit}>
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <Link to="/register" id="forgot">
                            Forgot Password
                          </Link>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <div className="button-google">
                        <img src={googleLogo} alt="google" />
                        <button>Continue with Google</button>
                      </div>
                      <div className="button-login">
                        <button>Continue with Email</button>
                      </div>
                      <label className="signup-route">
                        Don&lsquo;t have an account? <Link to="/register"> Sign Up</Link>
                      </label>
                    </CForm>
                  </CCardBody>
                </CCard>
                {/*<CCard
                className="text-white bg-primary py-5"
                style={{ width: '44%', background: '#fff' }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>*/}
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default Login
