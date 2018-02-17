import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../client/public/App.jsx';

//let ssr = {};

function handleRender(req,res)  {
    const html = renderToString(
        <App />
    )
    const preloadedState = null;
    res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html lang = en>
            <head>
                <meta name="viewport" 
                    content="width=device-width, initial-scale=1">
                <meta charset = "UTF-8">
                <link rel="icon" href="data:;base64,iVBORwOKGO=" />
            </head>
            <body>
                <div id="root">${html}</div>
                <script src="/client.bundle.js" type="text/jsx"></script>
            </body>
        </html>
    `
}

/*
                window._PRELOADED_STATE__ = 
                    ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
*/
export { handleRender, renderFullPage };



