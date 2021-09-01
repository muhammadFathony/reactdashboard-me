const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Apollo',
    route: '/buttons',
    icon: 'cil-mobile',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Histori Presensi',
        to: '/presensi',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Laporan Presensi',
        to: '/laporan_presensi',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cek Pengguna',
        to: '/cek_pengguna',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Sinkron',
    route: '/buttons',
    icon: 'cil-notes',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Histori Presensi',
        to: '/presensi',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Aset',
    route: '/buttons',
    icon: 'cil-tags',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Aset Barang',
        to: '/barang',
      }
    ],
  },
  
]

export default _nav
