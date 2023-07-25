export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Services',
      url: '/collection',
      submenu: [
        {
          title: 'Collections',
          url: '/collection',
        },
        {
          title: 'Expenses',
          url: '/expenses',
        },
        {
          title: 'Workorder',
          url: '/workorder',
        },
        {
          title: 'Balance',
          url: '/balance',
        },
        {
          title: 'BankActivity',
          url: '/bankActivity',
        }        
      ],
    },    
    {
      title: 'Reports',
      url: '/reports',
      submenu: [
        {
          title: 'Reports',
          url: '/reports',
        },
        {
          title: 'Charts',
          url: '/charts',
        },
        {
          title: 'BankReports',
          url: '/bankReports',
        }       
      ],
    },
    {
      title: 'Login',  
      url: '/login',    
      submenu: [
         {
          title: 'Login',
          url: '/login',
        },
        {
          title: 'Register',
          url: '/register',
        }
      ],
    },
    {
      title: 'About',
      url: '/about',
      submenu: [
        {
          title: 'Download',
          url: '/download',
        },
        {
          title: 'Profile',
          url: '/profile',
        },
      ],
    },
    {
      title: 'Blog',
      url: '/blog',    
    }
  ];
  