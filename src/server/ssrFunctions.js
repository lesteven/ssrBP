import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from '../common/App.jsx';
import configureStore, {reducers} from '../common/configureStore.js';
import { StaticRouter as Router, matchPath } from 'react-router';
import routeOptions from '../common/routes.js';


function handleRender(req,res)  {
   // getData(data => {

    // create store
    const store = configureStore();

    // react router setup
    let foundPath = null;

    let { path, component } = routeOptions.routes.find (
        ({ path, exact }) => {
            foundPath = matchPath(req.url, { path, exact, strict: false })
            return foundPath;
        }) || {};


    let context = {};


    // render component to string
    const html = renderToString(
        <Provider store = {store}>
            <Router context = {context} location = {req.url}>
                <App />
            </Router>
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



