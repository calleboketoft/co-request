import { Component } from 'angular2/core'
import { Http, Request, HTTP_PROVIDERS } from 'angular2/http'
import * as coRequest from '../co-request/co-request'
@Component({
  selector: 'app',
  template: `
    <h1>Angular 2</h1>
    <p>A failing request to "myRestThing" should have been made if this example works</p>
  `,
  providers: [HTTP_PROVIDERS]
})
export class AppCmp {
  constructor (http: Http) {
    coRequest.initialize(http, Request, {
      baseUrl: 'http://localhost:3000',
      requestInterceptor: (opts) => {
        opts.headers.Authorization = 'jwt'
        return opts
      }
    })

    coRequest.request({
      urlExtension: '/myRestThing',
      body: {name: 'Calle'}, // string or object ok '{"name":"Calle"}'
      method: 'POST'
    }).subscribe((res) => {
      console.log(res)
    })
  }
}