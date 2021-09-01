import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CSpinner
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const Component = ({ handleText, data, login, loading }) => {
    return(
        <CCardGroup>
            <CCard className="p-4">
            <CCardBody>
                <CForm>
                <h1>Sign in</h1>
                <p className="text-muted">Sign In to your account</p>
                <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                    <CInputGroupText>
                        <CIcon name="cil-user" />
                    </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" id="username" name="username" value={data.username} onChange={handleText} placeholder="Username" autoComplete="username" />
                </CInputGroup>
                <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                    <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="password" name="password" value={data.password} onChange={handleText} placeholder="Password" autoComplete="current-password" />
                </CInputGroup>
                <CRow>
                    <CCol xs="6">
                    <CButton onClick={login} color="success" className="px-4">
                        {loading ? <CSpinner color="white" size="sm" /> : "Sign in" }
                    </CButton>
                    </CCol>
                    <CCol xs="6" className="text-right">
                    <CButton color="link" className="px-0">Forgot password?</CButton>
                    </CCol>
                </CRow>
                </CForm>
            </CCardBody>
            </CCard>
            <CCard className="text-white bg-success py-5 d-md-down-none" style={{ width: '44%' }}>
            <CCardBody className="text-center">
                <div>
                <h2>Sign up</h2>
                <p>Management Information Technology RSUD Tugurejo Semarang Provinsi Jawa Tengah. Welcome to Green Hospital & Smart Hospital</p>
                <Link to="/register">
                    <CButton color="success" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                </Link>
                </div>
            </CCardBody>
            </CCard>
        </CCardGroup>
    )
}

export default withRouter(Component);