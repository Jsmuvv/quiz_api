// import Container from "react-bootstrap/Container"
import Navigation from './Components/Navigation'
import SignUp from './Components/SignUp'
import { Route,Routes } from 'react-router-dom'
import Home from "./Components/Home"
import LogIn from './Components/LogIn'
import AlertMessage from './Components/AlertMessage'
import { useState } from 'react'
import { CategoryType } from './types'




export default function App() {

  const [message,setMessage] = useState<string|null>(null)
  const [category,setCategory] = useState<CategoryType|null>(null)

  const flashMessage = (newMessage:string|null, newCategory:string|null) => {
    setMessage(newMessage)
    setCategory(newCategory)
  }

  return (
    <>
    <Navigation />
      {message && < AlertMessage message = {message} category = {category} flashMessage={flashMessage}/>}
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/register" element = {<SignUp flashMessage={flashMessage} />}/>
          <Route path = "/login" element = {<LogIn flashMessage={flashMessage} />}/>
        </Routes>
    </>
  )
}
