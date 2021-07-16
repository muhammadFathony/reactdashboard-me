import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { CDataTable, CBadge, CButton, CCollapse, CCardBody } from '@coreui/react'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const DataPresensiPropTypes = {
    data: PropTypes.array.isRequired
};
const Component = ({ data, column }) => {
    
    const [details, setDetails] = useState([]);
    const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
            newDetails.splice(position, 1)
        } else {
            newDetails = [...details, index]
        }
        setDetails(newDetails)
    }  

    return(
        <CDataTable
            items={data}
            fields={column}
            itemsPerPage={5}
            pagination
            tableFilter
            footer
            itemsPerPageSelect
            hover
            sorter
            scopedSlots = {{
                'status':
                    (item)=>(
                    <td>
                        <CBadge color={getBadge(item.status)}>
                        {item.status}
                        </CBadge>
                    </td>
                    ),
                'action':
                    (item, index)=>{
                        return (
                        <td className="py-2">
                            <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={()=>{toggleDetails(index); console.log(index)}}
                            >
                            {details.includes(index) ? 'Hide' : 'Show'}
                            </CButton>
                        </td>
                        )
                    },
                'details':
                    (item, index)=>{
                    return (
                    <CCollapse show={details.includes(index)}>
                        <CCardBody>
                        <h4>
                            {item.name}
                        </h4>
                        <p className="text-muted">User since: {item.registered}</p>
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
            }}
        />
    )
}

Component.propTypes = DataPresensiPropTypes;
export default Component