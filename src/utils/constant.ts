export const TOKEN_KEY = 'token';

export type ModulAndMenu = {
  id: number;
  nameModul: string;
  menu: Menu[];
};

export type Menu = {
  id: number;
  name: string;
};

type Modul = {
  id: number;
  name: string;
  code?: string;
  prefix?: string;
  order?: number;
  status?: boolean;
  link: string;
};

type Role = {
  id: number;
  name: string;
  code: string;
  status: boolean;
};

export const dummyUser = [
  {
    id: 1,
    name: 'Admin',
    username: 'admin',
    role: 'Admin',
    status: true,
  },
];

export const dummyRole: Role[] = [
  {
    id: 1,
    name: 'Admin',
    code: 'ADM',
    status: true,
  },
  {
    id: 2,
    name: 'User',
    code: 'USR',
    status: false,
  },
  {
    id: 3,
    name: 'Super Admin',
    code: 'SADM',
    status: true,
  },
];

export const dummyModul: Modul[] = [
  {
    id: 1,
    name: 'Modul 1',
    link: '/modul1',
    code: 'MDL1',
    prefix: 'MDL1',
    order: 1,
    status: true,
  },
  {
    id: 2,
    name: 'Modul 2',
    link: '/modul2',
    code: 'MDL2',
    prefix: 'MDL2',
    order: 2,
    status: true,
  },
  {
    id: 3,
    name: 'Modul 3',
    link: '/modul3',
    code: 'MDL3',
    prefix: 'MDL3',
    order: 3,
    status: false,
  },
];

export const dummyModulAndMenu: ModulAndMenu[] = [
  {
    id: 1,

    nameModul: 'Modul 1',
    menu: [
      {
        id: 1,
        name: 'Menu 1',
      },
      {
        id: 2,
        name: 'Menu 2',
      },
    ],
  },
  {
    id: 2,
    nameModul: 'Modul 2',
    menu: [
      {
        id: 3,
        name: 'Menu 3',
      },
      {
        id: 4,
        name: 'Menu 4',
      },
    ],
  },
  {
    id: 3,
    nameModul: 'Modul 3',
    menu: [
      {
        id: 5,
        name: 'Menu 5',
      },
    ],
  },
  {
    id: 4,
    nameModul: 'Modul 4',
    menu: [
      {
        id: 6,
        name: 'Menu 6',
      },
      {
        id: 7,
        name: 'Menu 7',
      },
      {
        id: 8,
        name: 'Menu 8',
      },
    ],
  },
];

export const availableAccessAction = ['view', 'add', 'edit', 'delete', 'print', 'export', 'import', 'approve'];
