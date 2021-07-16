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
import Table from '../../components/Table'
import { laporanPresensi } from '../../services/apollo';

const Component = () => {
  useEffect(() => {
  }, []);
  const [dataLaporan, setDataLaporan] = useState([]);
  const [columnTable, setColumnTable] = useState([]);
  const [textNip, setTextNip] = useState('');
  const setColumn = (field) => {
    console.log(Object.keys(field))
    setColumnTable(Object.keys(field))
  }
  const getData = async () => {
    const nip = textNip;
    await laporanPresensi(nip)
    .then(res => {
      res.data.code === 200 && setDataLaporan(res.data.data)
      res.data.code !== 200 && setDataLaporan([])
      res.data.code === 200 && setColumn(res.data.data[0])
    })
    .catch(error => console.log(error));
  }
  return (
    <>
      <CCard>
        <CCardHeader>
          Laporan Presensi
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
                <CCol  style={{paddingTop: "5px"}} >
                  <CButton onClick={getData} size="sm" color="primary"><CIcon name="cil-scrubber" />
                   Submit
                  </CButton>
                </CCol>
              </CFormGroup>
            </CForm>
          <Table data={dataLaporan} column={columnTable}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Component
