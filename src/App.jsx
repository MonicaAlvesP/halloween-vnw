import Details from './components/Details'
import Footer from './components/Footer/index.jsx'
import FormSubmit from './components/Form/index.jsx'
import Header from './components/Header'
import Inspiration from './components/Inspiration/index.jsx'
import { GlobalStyle } from './GlobalStyle.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Details />
      <Inspiration />
      <FormSubmit />
      <Footer />
    </Router>
  )
}

export default App
