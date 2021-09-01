import React from 'react'
import PropTypes from 'prop-types';
import { CDataTable } from '@coreui/react'



const DataPresensiPropTypes = {
    data: PropTypes.array.isRequired
};
const Component = ({ data, column, slot }) => {

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
            scopedSlots = {slot}
            loading={false}
        />
    )
}

Component.propTypes = DataPresensiPropTypes;
export default Component