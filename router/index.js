var loader = require('../')
var result = loader(`
            index:
                path: /
                component: ./platform/system/index/index.vue
                meta: 
                    nav: none
            userList:
                path: /users
                component: ./platform/system/users/user.vue
                lazy:  system
        `);
console.log(result)
       