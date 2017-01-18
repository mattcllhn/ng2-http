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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.message = 'This is the sample message.';
    } //constructor
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get users
        this.http.get('https://reqres.in/api/users?page=2')
            .subscribe(function (data) {
            console.log(data.json());
            _this.users = data.json().data;
        });
    }; //ngoninit
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n\n  "],
        template: "\n    <div class=\"jumbotron text-center\">\n      <h1>The App Lives!</h1>\n      <p>{{ message }}</p>\n    </div>\n    <div *ngIf = \"users\">\n      <div *ngFor = \"let user of users\" >\n        <h2>{{user.first_name}} {{user.last_name}}</h2>\n        \n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map