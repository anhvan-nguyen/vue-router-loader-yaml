var loader = require('../')
var result = loader(`
            index:
                path: /
                component: ./platform/system/index/index.vue
                name: navan
                meta: 
                  nav: none
                redirect:
                  name: abc
            userList:
                path: /users
                component: ./platform/system/users/user.vue
                lazy:  system
        `);
console.log(result)
       