import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider, initialState } from './Store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreProvider error={initialState.error} loading={initialState.loading} rooms={initialState.rooms} user={initialState.user}>
      <App />
    </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
