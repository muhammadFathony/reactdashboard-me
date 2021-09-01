import React, { useState, useEffect } from 'react'
import {
  CCol,
  CContainer,
  CRow
} from '@coreui/react'
import CardLogin from '../../../components/card-login'
import { login as signin } from '../../../services/aset'
import { withRouter } from 'react-router-dom'
const Login = (props) => {
  const token = localStorage.getItem('simrs_token');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  useEffect(() => {
    if(token){
      props.history.push('/');
    }
  }, [])
  
  const handleText = (e) => {
      setData({
          ...data,
          [e.target.name]: e.target.value
      });
      console.log(data)
  }
  const login = async () => {
    setLoading(true)
    await signin(data.username, data.password)
    .then(res => {
        res.data.status.code === 200 &&props.history.push('/');
        res.data.status.code === 200 && setLoading(false);
        res.data.status.code === 200 && localStorage.setItem('simrs_token', res.data.token);
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CardLogin data={data} handleText={handleText} login={login} loading={loading} />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default withRouter(Login)
