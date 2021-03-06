System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map", "../local-storage/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, index_1, UserService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            UserService = (function () {
                function UserService(http, localStorageService) {
                    this.http = http;
                    this.localStorageService = localStorageService;
                }
                UserService.prototype.getUser = function () {
                    return this.http.get('/api/user', this.jwt()).map(function (response) { return response.json(); });
                };
                UserService.prototype.create = function (user) {
                    return this.http.post('/api/createUser', user, this.jwt()).map(function (response) { return response.json(); });
                };
                // private helper methods
                UserService.prototype.jwt = function () {
                    // create authorization header with jwt token
                    var currentUser = this.localStorageService.get('currentUser');
                    if (currentUser !== null) {
                        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser });
                        return new http_1.RequestOptions({ headers: headers });
                    }
                };
                return UserService;
            }());
            UserService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http, index_1.LocalStorageService])
            ], UserService);
            exports_1("UserService", UserService);
        }
    };
});
