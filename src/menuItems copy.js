export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Services',
      url: '/services',
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
          title: 'web development',
          url: 'web-dev',
          submenu: [
            {
              title: 'Frontend',
              url: 'frontend',
            },
            {
              title: 'Backend',
              submenu: [
                {
                  title: 'NodeJS',
                  url: 'node',
                },
                {
                  title: 'PHP',
                  url: 'php',
                },
              ],
            },
          ],
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: 'About',
      url: '/about',
      submenu: [
        {
          title: 'Who we are',
          url: 'who-we-are',
        },
        {
          title: 'Our values',
          url: 'our-values',
        },
      ],
    },
    {
      title: 'Demo',
      url: '/Demo'
    }
  ];
  