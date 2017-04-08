System.register(["@angular/core", "./services/index"], function (exports_1, context_1) {
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
    var core_1, index_1, ProfileComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            ProfileComponent = (function () {
                function ProfileComponent(userService) {
                    var _this = this;
                    this.userService = userService;
                    this.show = false;
                    this.userService.getUser().subscribe(function (result) {
                        _this.profile = result;
                    });
                }
                ProfileComponent.prototype.ngDoCheck = function () {
                    if (this.profile !== undefined) {
                        this.show = true;
                    }
                };
                return ProfileComponent;
            }());
            ProfileComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    template: "\n    <div *ngIf=\"show\" class=\"container\">\n    <p> Ime: {{profile.user.name}} </p>\n    <p> Email: {{profile.user.email}} </p>\n    <p> Account kreiran: {{profile.user.created_at}} </p>\n    </div>\n    "
                }),
                __metadata("design:paramtypes", [index_1.UserService])
            ], ProfileComponent);
            exports_1("ProfileComponent", ProfileComponent);
        }
    };
});
