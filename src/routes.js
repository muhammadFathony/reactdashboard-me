import React from 'react';

const Apollo_histori = React.lazy(() => import('./views/apollo_histori'));
const Apollo_laporan = React.lazy(() => import('./views/apollo_laporan'));
const Apollo_cek_pengguna = React.lazy(() => import('./views/apollo_cek_user')); 
const Aset_data_barang = React.lazy(() => import('./views/aset/data-barang'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Apollo_histori},
  { path: '/presensi', exact: true, name: 'Presensi', component: Apollo_histori},
  { path: '/laporan_presensi', exact: true, name: 'Laporan Presensi', component: Apollo_laporan},
  { path: '/cek_pengguna', exact: true, name: 'Cek pengguna', component: Apollo_cek_pengguna},
  { path: '/barang', exact: true, name: 'Aset Barang', component: Aset_data_barang}
];

export default routes;
