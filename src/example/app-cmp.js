var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
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
        angular2_1.Component({
            selector: 'app',
            template: '<h1>Angular 2</h1>',
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
//# sourceMappingURL=app-cmp.js.map