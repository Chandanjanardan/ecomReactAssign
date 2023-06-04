import React from 'react'
import { Routes,Route } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>Thank you contacting me</h1>
        <Routes>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Contact