System.register(["@angular/core", "@angular/forms", "./services/index", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, forms_1, index_1, router_1, RegisterComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            RegisterComponent = (function () {
                function RegisterComponent(userService, router, authService) {
                    this.userService = userService;
                    this.router = router;
                    this.authService = authService;
                    this.model = {};
                    this.throwError = false;
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.user = new forms_1.FormGroup({
                        name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(4)]),
                        email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
                        password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
                    });
                };
                RegisterComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.throwError = false;
                    this.userService.create(this.model)
                        .subscribe(function (data) {
                        if (data.success) {
                            _this.router.navigate(['welcome']);
                        }
                        else {
                            _this.throwError = true;
                        }
                    }, function (error) {
                        _this.throwError = true;
                    });
                };
                return RegisterComponent;
            }());
            RegisterComponent = __decorate([
                core_1.Component({
                    selector: 'log-in',
                    templateUrl: './app/html/register.html'
                }),
                __metadata("design:paramtypes", [index_1.UserService, router_1.Router, index_1.AuthenticationService])
            ], RegisterComponent);
            exports_1("RegisterComponent", RegisterComponent);
        }
    };
});
