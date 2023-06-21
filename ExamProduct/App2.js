import React from 'react'

import { Provider } from 'react-redux'

import store  from './src/data/Store'

import App from './App'


const App2 = ()=>{
    <Provider store={store}>
        <App />
    </Provider>
}

export default App2;