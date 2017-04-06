System.register(["./local-storage.module", "./local-storage.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (local_storage_module_1_1) {
                exports_1({
                    "LocalStorageModule": local_storage_module_1_1["LocalStorageModule"]
                });
            },
            function (local_storage_service_1_1) {
                exports_1({
                    "LocalStorageService": local_storage_service_1_1["LocalStorageService"]
                });
            }
        ],
        execute: function () {
        }
    };
});
