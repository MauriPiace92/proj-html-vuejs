var app= new Vue(
    {
        el:'#root',
        data:{
            // header
            menu: [{
                name: 'Home',
                link: '#',
                "class": 'fas fa-chevron-down'
              }, {
                name: 'Pages',
                link: '#',
                "class": 'fas fa-chevron-down'
              }, {
                name: 'Courses',
                link: '#',
                "class": 'fas fa-chevron-down'
              }, {
                name: 'Features',
                link: '#',
                "class": 'fas fa-chevron-down'
              }, {
                name: 'Blog',
                link: '#',
                "class": 'fas fa-chevron-down'
              }, {
                name: 'shop',
                link: '#',
                "class": 'fas fa-chevron-down'
            }],
            
            // footer
            explore:[{
                name: 'Start here',
                link: '#',
              }, {
                name: 'Blog',
                link: '#',
              }, {
                name: 'About us',
                link: '#',
                
            }],

            empty: [{
                name: 'Success story',
                link: '#',
              }, {
                name: 'Courses',
                link: '#',
              }, {
                name: 'Contact us',
                link: '#',
            }],

            information: [{
                name: 'Membership',
                link: '#',
              }, {
                name: 'Purchase guide',
                link: '#',
              }, {
                name: 'Privacy Policy',
                link: '#',
              }, {
                name: 'Terms of services',
                link: '#',
            }],
        }
    }
);
