import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import Table from '../../components/Table'

const Component = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Data Daftar Peserta Vaksinasi
        </CCardHeader>
        <CCardBody>
          <Table />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Component
