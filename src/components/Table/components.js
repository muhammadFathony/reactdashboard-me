import React from 'react'
import { CDataTable, CBadge } from '@coreui/react'
import usersData from '../../views/users/UsersData';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['name','registered', 'role', 'status'];

const Component = () => {
    return(
        <CDataTable
            items={usersData}
            fields={fields}
            itemsPerPage={5}
            pagination
            scopedSlots = {{
            'status':
                (item)=>(
                <td>
                    <CBadge color={getBadge(item.status)}>
                    {item.status}
                    </CBadge>
                </td>
                )
            }}
        />
    )
}

export default Component