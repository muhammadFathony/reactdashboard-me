import { asetInstance } from '../config'
import Formdata from 'form-data'

export const login = async (username, password) => {
    const form = new Formdata();
    form.append('username', username);
    form.append('password', password);
    const response = await asetInstance.post(`auth/login`, form);
    return response
}

export const dataBarang = async (token) => {
    const response = await asetInstance.get(`api/barang`, {
        headers:{'X-token': token}
    });
    return response;
}

