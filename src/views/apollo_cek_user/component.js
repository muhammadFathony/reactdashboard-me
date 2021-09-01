import React, { useEffect, useState} from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CCol,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Table from '../../components/table'
import {cekPengguna} from '../../services/apollo';

const Component = () => {
  useEffect(() => {
  }, []);
  const [dataPresensi, setDataPresensi] = useState([]);
  const [columnTable, setColumnTable] = useState([]);
  const [textNip, setTextNip] = useState('');
  const [textUsername, setTextUsername] = useState('');
  const setColumn = (field) => {
    setColumnTable(Object.keys(field))
  }
  
  const getData = async () => {
    await cekPengguna(textNip, textUsername)
    .then(res => {
      res.data.status.code === 200 && setDataPresensi(res.data.data)
      res.data.status.code !== 200 && setDataPresensi([])
      res.data.status.code === 200 && setColumn(res.data.data[0])
    })
    .catch(error => console.log(error));
  }
  return (
    <>
      <CCard>
        <CCardHeader>
          Cari informasi pengguna
        </CCardHeader>
        <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="1">
                  <CLabel htmlFor="txt_nip">Nip</CLabel>
                </CCol>
                <CCol xs="12" md="3">
                  <CInput type="text" 
                    id="txt_nip" 
                    value={textNip} 
                    onChange={(e) => setTextNip(e.target.value)} 
                    name="txt_nip" 
                    placeholder="Enter nip..." 
                    autoComplete="email" />
                </CCol>
                <CCol md="1">
                  <CLabel htmlFor="txt_username">Username</CLabel>
                </CCol>
                <CCol xs="12" md="3">
                  <CInput type="text" 
                    id="txt_username" 
                    value={textUsername} 
                    onChange={(e) => setTextUsername(e.target.value)} 
                    name="txt_username" 
                    placeholder="Enter username..." 
                    autoComplete="username" />
                </CCol>
                <CCol  style={{paddingTop: "5px"}} >
                  <CButton onClick={getData} size="sm" color="primary"><CIcon name="cil-scrubber" />
                   Submit
                  </CButton>
                </CCol>
              </CFormGroup>
            </CForm>
            {
              dataPresensi.length > 0 ?
              (
                <Table data={dataPresensi} column={columnTable}/>
              ) :
              (
                <Table data={dataPresensi} column={columnTable}/>
              )
            }
        </CCardBody>
      </CCard>
    </>
  )
}

export default Component
