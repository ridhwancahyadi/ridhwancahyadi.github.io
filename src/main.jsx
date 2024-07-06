import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navbar } from './components/section/navbar.jsx'
import Footer from './components/section/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar></Navbar>
    <App />
    <Footer></Footer>
  </React.StrictMode>,
)
