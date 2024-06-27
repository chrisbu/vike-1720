// https://vike.dev/onBeforeRender
import * as path from "node:path";

export default onBeforeRender

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { getStore } from './store'
import LayoutDefault from "../layouts/LayoutDefault";

/**
 * @param {{ Page: any; }} pageContext
 */
async function onBeforeRender(pageContext) {
    console.info("onBeforeRender");

    const store = getStore();

    const { Page } = pageContext
    const pageHtml = renderToString(
        <Provider store={store}>
            <LayoutDefault>
                <Page />
            </LayoutDefault>
        </Provider>
    )

    // Grab the initial state from our Redux store
    const PRELOADED_STATE = store.getState()

    return {
        pageContext: {
            PRELOADED_STATE,
            pageHtml
        }
    }
}