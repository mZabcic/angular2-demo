System.register(["@angular/core", "./local-storage.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, local_storage_service_1, LocalStorageModule, LocalStorageModule_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            }
        ],
        execute: function () {
            LocalStorageModule = LocalStorageModule_1 = (function () {
                function LocalStorageModule() {
                }
                LocalStorageModule.withConfig = function (userConfig) {
                    if (userConfig === void 0) { userConfig = {}; }
                    return {
                        ngModule: LocalStorageModule_1,
                        providers: [
                            { provide: 'LOCAL_STORAGE_SERVICE_CONFIG', useValue: userConfig }
                        ]
                    };
                };
                return LocalStorageModule;
            }());
            LocalStorageModule = LocalStorageModule_1 = __decorate([
                core_1.NgModule({
                    providers: [
                        local_storage_service_1.LocalStorageService
                    ]
                })
            ], LocalStorageModule);
            exports_1("LocalStorageModule", LocalStorageModule);
        }
    };
});
