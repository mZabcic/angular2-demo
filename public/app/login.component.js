System.register(["@angular/core", "./services/index", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, index_1, router_1, LogInComponent;
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
            }
        ],
        execute: function () {
            LogInComponent = (function () {
                function LogInComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.model = {};
                    this.error = false;
                }
                LogInComponent.prototype.login = function () {
                    var _this = this;
                    this.error = false;
                    this.authService.login(this.model.email, this.model.password)
                        .subscribe(function (result) {
                        if (result === true) {
                            _this.router.navigate(['welcome']);
                            console.log('True');
                        }
                        else {
                            _this.error = true;
                        }
                    });
                };
                return LogInComponent;
            }());
            LogInComponent = __decorate([
                core_1.Component({
                    selector: 'log-in',
                    templateUrl: './app/html/login.html'
                }),
                __metadata("design:paramtypes", [index_1.AuthenticationService, router_1.Router])
            ], LogInComponent);
            exports_1("LogInComponent", LogInComponent);
        }
    };
});
