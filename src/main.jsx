import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './redux/configStore.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={configStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
