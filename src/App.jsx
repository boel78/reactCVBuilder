import { createContext, useState } from 'react'
import './App.css'
import { Result } from '../components/result'
import {Router, Routes, Route} from  "react-router-dom"
import {Content} from "../components/content"
import { Customize } from '../components/customize'

export const Appcontext = createContext()

function App() {
  const [selectedOption, setSelectedOption] = useState("Content")

  return (
    <Appcontext.Provider>
      <div className='selectOptions'>
        {selectedOption === "Content" ? 
        <Content />
        : <Customize/>
        }
      </div>
    <Result />
    </Appcontext.Provider>
  )
}

export default App
