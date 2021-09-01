import { apolloInstance } from '../config'
import Formdata from 'form-data'

const headerApollo = {
    headers:{'X-token':'0+i7PtVybDWFUEAPTpoUcWiAn5fjxcqDrRFFn/K2n78='}
}

export const historiPresensi = async (nip) => {
    const form = new Formdata();
    form.append('nip', nip);
    const response = await apolloInstance.post(`/histori_absensi`, form, headerApollo);
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

export const cekPengguna = async (nip, username) => {
    const response = await apolloInstance.get(`/information_user?nip=${nip}&username=${username}`, headerApollo)
    return response;
}

export const loginApollo = async (username, password) => {
    const form = new Formdata();
    form.append('username', username);
    form.append('password', password);
    const response = await apolloInstance.post(`/login`, form, headerApollo);
    return response
}

