// https://vike.dev/onRenderHtml
export default onRenderHtml

import { escapeInject, dangerouslySkipEscape } from 'vike/server'

/**
 * @param {{ pageHtml: any; }} pageContext
 */
async function onRenderHtml(pageContext) {
    const { pageHtml } = pageContext
    return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}