import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'

const Component = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Data Daftar Peserta Vaksinasi
        </CCardHeader>
        <CCardBody>
          <table className="table">
            <thead>
            <tr>
              <th>Heading</th>
              <th>Example</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>
              </td>
              <td><span className="h1">h1. Bootstrap heading</span></td>
            </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Component
