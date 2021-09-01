import React from 'react'
import {
    CCard,
    CCardHeader,
    CCardBody,
    CBadge, 
    CButton, 
    CCollapse,
    CImg
  } from '@coreui/react'
const Component = ({index, item, img, label}) => {
    return(
        <CCollapse show={index}>
            <CCardBody>
                <h4>
                    {item}
                </h4>
                <CImg
                    src={img}
                    fluid
                    className="mb-2"
                />
                <p className="text-muted">{label}</p>
                <CButton size="sm" color="info">
                    User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                    Delete
                </CButton>
            </CCardBody>
        </CCollapse>
    )
}

export default Component