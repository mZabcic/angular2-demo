System.register(["@angular/router", "./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, index_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: 'welcome', component: index_1.WelcomeComponent },
                { path: 'to-do', component: index_1.ToDoListComponent },
                { path: 'login', component: index_1.LogInComponent }
                // otherwise redirect to home
                ,
                { path: '**', redirectTo: 'welcome' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
