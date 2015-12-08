// Singleton request module
/**
 * import * as coRequest from 'co-request'
 *
 * coRequest.initialize(http, Request, {
 *   baseUrl: 'http://localhost:3000',
 *   requestInterceptor: (opts) => {
 *     opts.headers.Authorization: 'jwt'
 *     return opts
 *   }
 * })
 *
 * coRequest.request({
 *   urlExt: 'myRestThing',
 *   body: {name: 'Calle'}, // string or object ok '{"name":"Calle"}'
 *   method: 'POST'
 * })
 */

let http
let Request
let config = {
  BASE_URL: '',
  HEADER_ACCEPT: 'application/json',
  HEADER_CONTENT_TYPE: 'application/json;charset=UTF-8',
  REQUEST_INTERCEPTOR: requestOptions => requestOptions
}

function initialize (httpIn, RequestIn, options) {
  http = httpIn
  Request = RequestIn
  if (options.baseUrl) {
    config.BASE_URL = options.baseUrl
  }
  if (options.requestInterceptor) {
    config.REQUEST_INTERCEPTOR = options.requestInterceptor
  }
}

function request (options) {
  checkInit()
  options.headers = options.headers || {}
  options.headers['Accept'] = config.HEADER_ACCEPT
  options.headers['Content-Type'] = config.HEADER_CONTENT_TYPE
  if (options.urlExtension) {
    options.url = config.BASE_URL + options.urlExtension
  }
  if (typeof options.body === 'object') {
    options.body = JSON.stringify(options.body)
  }
  if (!options.skipRequestInterceptor) {
    options = config.REQUEST_INTERCEPTOR(options)
  }
  var request = new Request(options)
  return http.request(request)
}

function checkInit () {
  if (!http || !Request) {
    throw 'CoRequest has not been initialized yet'
  }
}

export {
  initialize,
  request
}
