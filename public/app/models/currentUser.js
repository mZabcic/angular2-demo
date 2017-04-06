System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginUser;
    return {
        setters: [],
        execute: function () {
            LoginUser = (function () {
                function LoginUser(email, password) {
                    this.email = email;
                    this.password = password;
                }
                return LoginUser;
            }());
            exports_1("LoginUser", LoginUser);
        }
    };
});
