System.register(["./navigation.component", "./welcome.component", "./profile.component", "./login.component", "./register.component", "./auth.guard"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (navigation_component_1_1) {
                exportStar_1(navigation_component_1_1);
            },
            function (welcome_component_1_1) {
                exportStar_1(welcome_component_1_1);
            },
            function (profile_component_1_1) {
                exportStar_1(profile_component_1_1);
            },
            function (login_component_1_1) {
                exportStar_1(login_component_1_1);
            },
            function (register_component_1_1) {
                exportStar_1(register_component_1_1);
            },
            function (auth_guard_1_1) {
                exportStar_1(auth_guard_1_1);
            }
        ],
        execute: function () {
        }
    };
});
