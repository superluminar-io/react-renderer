import koa from 'koa'
import http from 'koa-route'

import { App } from '../app'
import { render } from '../lib/render'

export const Router = new koa()

Router.use(
  http.get('*', ctx => {
    ctx.body = render(App, ctx.request.path)
  })
)
