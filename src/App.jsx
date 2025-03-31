import React, { useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<FeedbackForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}
