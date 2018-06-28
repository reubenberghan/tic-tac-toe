import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import { rootReducer as reducer } from '..'
import { checkForWinEpic } from '../epics'

export default function configureStore () {
  const epicMiddleware = createEpicMiddleware()
  const baseMiddleware = applyMiddleware(epicMiddleware)
  const middleware = composeWithDevTools(baseMiddleware)
  return {
    store: createStore(reducer, middleware),
    epicMiddleware,
    checkForWinEpic
  }
}
