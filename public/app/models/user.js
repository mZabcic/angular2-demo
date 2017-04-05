System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters: [],
        execute: function () {
            User = (function () {
                function User(name, email, password) {
                    this.email = email;
                    this.name = name;
                    this.password = password;
                }
                return User;
            }());
            exports_1("User", User);
        }
    };
});
