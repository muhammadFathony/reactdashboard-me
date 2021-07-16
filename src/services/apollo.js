import { apolloInstance } from '../config'
import Formdata from 'form-data'

export const historiPresensi = async (nip) => {
    const form = new Formdata();
    form.append('nip', nip);
    const response = await apolloInstance.post(`/histori_absensi`, form, 
    {
        headers:{'X-token':'0+i7PtVybDWFUEAPTpoUcWiAn5fjxcqDrRFFn/K2n78='}
    });
    return response;
}

export const laporanPresensi = async (nip) => {
    const response = await apolloInstance.get(`/get_absen_by_bulannip`,{
        headers: {
            'X-nip':nip,
            'X-bln': '202107'
        }
    });
    return response;
}

