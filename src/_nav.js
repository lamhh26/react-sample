export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-tachometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'fa fa-tint',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'fa fa-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'fa fa-puzzle-piece',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'fa fa-puzzle-piece',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'fa fa-mouse-pointer',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'fa fa-mouse-pointer',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'fa fa-mouse-pointer',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'fa fa-mouse-pointer',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'fa fa-mouse-pointer',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'fa fa-pie-chart',
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'fa fa-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'fa fa-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'fa fa-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'fa fa-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'fa fa-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'fa fa-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'fa fa-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'fa fa-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'fa fa-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'fa fa-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'fa fa-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'fa fa-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'fa fa-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'fa fa-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'fa fa-star',
        },
      ],
    },
  ],
};
