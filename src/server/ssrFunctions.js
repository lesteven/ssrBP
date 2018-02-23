import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from '../common/App.jsx';
import configureStore, {reducers} from '../common/configureStore.js';


function handleRender(req,res)  {
   // getData(data => {

    // create store
    const store = configureStore();

    // render component to string
    const html = renderToString(
        <Provider store = {store}>
            <App />
        </Provider>
    )
    
    // get redux state
    const finalState = store.getState();

    // send to client
    res.send(renderFullPage(html, finalState));
    //})
}

// create html and inject redux data into it
function renderFullPage(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html lang = "en">
            <head>
                <meta name="viewport" 
                    content="width=device-width, initial-scale=1">
                <meta charset = "UTF-8">
                <link rel="icon" href="data:;base64,iVBORwOKGO=" />
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                window.__PRELOADED_STATE__ = 
                    ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/client.bundle.js" ></script>
            </body>
        </html>
    `
}



export { handleRender, renderFullPage };



