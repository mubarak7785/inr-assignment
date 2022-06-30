import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TicketContextProvider } from './components/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TicketContextProvider>

<App />
</TicketContextProvider>
  </React.StrictMode>
)
