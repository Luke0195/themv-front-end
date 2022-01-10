import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Form from './pages/Form'
function App () {
  return (
    <React.Fragment>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/form">
              <Route path=":movieId" element={<Form/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
