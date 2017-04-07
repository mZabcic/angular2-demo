System.register(["@angular/core", "./services/index", "@angular/router", "./local-storage/index"], function (exports_1, context_1) {
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
    var core_1, index_1, router_1, index_2, NavigationComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NavigationComponent = (function () {
                function NavigationComponent(authService, router, localStorageService) {
                    this.authService = authService;
                    this.router = router;
                    this.localStorageService = localStorageService;
                }
                NavigationComponent.prototype.logout = function () {
                    this.authService.logout();
                    this.router.navigate(['welcome']);
                };
                return NavigationComponent;
            }());
            NavigationComponent = __decorate([
                core_1.Component({
                    selector: 'navigation',
                    templateUrl: './app/html/navigation.html'
                }),
                __metadata("design:paramtypes", [index_1.AuthenticationService, router_1.Router, index_2.LocalStorageService])
            ], NavigationComponent);
            exports_1("NavigationComponent", NavigationComponent);
        }
    };
});
