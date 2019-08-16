# React Renderer

[![MIT License](https://badgen.now.sh/badge/License/MIT/blue)](/LICENSE.md)

> Basic example project for static Server-Side Rendering with React and [styled-components](https://www.styled-components.com) using AWS Lambda, API Gateway, and CloudFront.
>
> [https://d3e4ysj8dvd9bl.cloudfront.net](https://d3e4ysj8dvd9bl.cloudfront.net)

## Features

- Process and render an application with `React SSR` in your CLI
- Start a local development server for `React SSR` on `http://localhost:3000`
- Deploy a serverless `React SSR` application using `AWS Lambda` and `CloudFront`

## Usage

```bash
# Install dependencies with yarn
$ > yarn

# Build code with Babel
$ > yarn build
```

### CLI processing

You can invoke the rendering process using Node.js and your CLI. Configure an environment variable `LOCATION` with the relative HTTP route you want to render.

```bash
$ > LOCATION=/example \
    node ./dist/process.js
```

### HTTP Server

Of course, you can easily wrap the renderer component in a Node.js HTTP server, [koa](https://koajs.com/) for example. Just configure a `PORT` and start the local HTTP server.

```bash
$ > PORT=3000 \
    node ./dist/http.js
```

### Serverless on AWS

With the CLI rendering and the support for a basic HTTP server, [koa](https://koajs.com/) in this example, it's easy to wrap everything with [serverless-http](https://github.com/dougmoscrop/serverless-http) and deploy it to AWS Lambda. Together with CloudFront you have a CDN for caching and everything you need for managing a serverless production **React SSR** website on AWS.

```bash
$ > AWS_PROFILE=website \
    make configure build package deploy
```

Have a look at `./infra.yml` and the files in `./infra/` how AWS Lambda, API Gateway, and CloudFront are configured to handle HTTP requests and trigger the React rendering process.

## What's missing?

### Single Page Application

This basic example project generates static HTML code without any JavaScript and React code for the browser. Of course, you can extend this project and start your next SPA with React SSR on AWS Lambda.

### Webpack

This basic example project does not include Webpack at all. This means, there is no Hot Module Replacement, Asset Pipeline, or JavaScript Optimization. Of course, you can can extend this project and add a more pleasing development experience. You're more than welcome!

### Assets

You can configure CloudFront to pass through all HTTP requests for `/assets/*` to an S3 Bucket.

## License

Feel free to use the code, it's released using the [MIT license](LICENSE.md).

## Contribution

You are welcome to contribute to this project! 😘

To make sure you have a pleasant experience, please read the [code of conduct](CODE_OF_CONDUCT.md). It outlines core values and beliefs and will make working together a happier experience.
