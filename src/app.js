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
            
        }
    }
);
