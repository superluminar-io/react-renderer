export const wrap = ({ styles, markup, helmet }) => `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />

    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}

    <meta name="viewport" content="width=device-width,initial-scale=1" />
    ${styles}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="main">${markup}</div>
  </body>
</html>
`
