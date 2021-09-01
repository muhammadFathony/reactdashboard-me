import React, { useEffect, useState} from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CBadge, 
  CButton, 
} from '@coreui/react'
import { withRouter } from 'react-router-dom'
import Table from '../../../components/table'
import {dataBarang} from '../../../services/aset';
import FormQrCode from '../../../components/form-qrcode';

const Component = (props) => {
  const token = localStorage.getItem('simrs_token');
  useEffect(() => {
    if(!token){
        props.history.push('/login');
        return;
    }
    getData();
  }, []);
  const [data, setData] = useState([]);
  const [columnTable, setColumnTable] = useState([]);
  const [details, setDetails] = useState([]);
  const setColumn = (field) => {
    const col = Object.keys(field);
    col.push('action');
    setColumnTable(col)
  }
    const getBadge = status => {
        switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
        }
    }
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

    const slotDat = 
    {
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
            const sourcImg = `${process.env.REACT_APP_BASE_URL}aset-tugurejo/api/barang/generateQr?kode_barang=${item.KODE_ASET}.${item.REGISTER}`
            return (
              <FormQrCode index={details.includes(index)} item={item.KODE_ASET} img={sourcImg} label={`Kode Barang: ${item.REGISTER}`} />
            )
        }
    }
    
  
  const getData = async () => {
    await dataBarang(token)
    .then(res => {
      res.data.status.code === 200 && setData(res.data.data)
      res.data.status.code !== 200 && setData([])
      res.data.status.code === 200 && setColumn(res.data.data[0])
    })
    .catch(error => {
        console.log(error)
    });
  }
  return (
    <>
      <CCard>
        <CCardHeader>
          Data Histori Presensi
        </CCardHeader>
        <CCardBody>
            {
              data.length > 0 ?
              (
                <Table data={data} column={columnTable} slot={slotDat}/>
              ) :
              (
                <Table data={data} column={columnTable} slot={slotDat}/>
              )
            }
        </CCardBody>
      </CCard>
    </>
  )
}

export default withRouter(Component)
