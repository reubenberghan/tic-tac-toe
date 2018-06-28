import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './components'
import { configureStore } from './state'
import registerServiceWorker from './registerServiceWorker'

const { checkForWinEpic, epicMiddleware, store } = configureStore()

epicMiddleware.run(checkForWinEpic)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
