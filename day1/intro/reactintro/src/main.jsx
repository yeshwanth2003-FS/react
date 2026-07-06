import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header/Header.jsx'
import Seaction from './seaction/Seaction.jsx'
import Form from './Form/Form.jsx'
import Footer from './Footer/Footer.jsx'
import Cards from './Cards/Cards.jsx'
import Table from './Tabel/Tabel.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Header/>
   <Seaction/>
   <Cards/>
   <Form></Form>

  <Table></Table>
    <Footer></Footer>
  </StrictMode>,
)
