const html = require("html-template-tag");

module.exports = (content) => html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Cool Tunes</title>
    </head>
    <body>
      
      <div class="container content">
        $${content}
      </div>
      
    </body>
  </html>`;