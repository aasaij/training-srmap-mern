import React from 'react'
import Counter from './features/counter/Counter'
import { Provider } from 'react-redux'
import { store } from './app/store'
const ChildComponent = () => {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default ChildComponent
