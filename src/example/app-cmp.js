var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var coRequest = require('../co-request/co-request');
var AppCmp = (function () {
    function AppCmp(http) {
        coRequest.initialize(http, http_1.Request, {
            baseUrl: 'http://localhost:3000',
            requestInterceptor: function (opts) {
                opts.headers.Authorization = 'jwt';
                return opts;
            }
        });
        coRequest.request({
            urlExtension: '/myRestThing',
            body: { name: 'Calle' },
            method: 'POST'
        }).subscribe(function (res) {
            console.log(res);
        });
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <h1>Angular 2</h1>\n    <p>A failing request to \"myRestThing\" should have been made if this example works</p>\n  ",
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
//# sourceMappingURL=app-cmp.js.map