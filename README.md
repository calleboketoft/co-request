# co-request

Singleton abstacting some angular 2 request related configurations.

```javascript
import * as coRequest from 'co-request'

coRequest.initialize(http, Request, {
  baseUrl: 'http://localhost:3000',
  requestInterceptor: (opts) => {
    opts.headers.Authorization = 'jwt'
    return opts
  }
})

coRequest.request({
  urlExtension: 'myRestThing',
  body: {name: 'Calle'}, // string or object ok '{"name":"Calle"}'
  method: 'POST'
})
```