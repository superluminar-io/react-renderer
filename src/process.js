import { App } from './app'
import { render } from './lib/render'

if (!process.env.LOCATION) {
  console.log(`
Error: Missing environment variable LOCATION for route processing.

  LOCATION=/example ./dist/process.js`)

  process.exit(1)
} else {
  console.log(render(App, process.env.LOCATION))
}
