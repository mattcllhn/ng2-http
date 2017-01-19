"use strict";
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: 'UsersComponent',
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map