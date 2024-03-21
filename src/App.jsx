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
      <div className='helaSidan'>
        <div className='selectOptions'>
          <div>
            <div className='selectOptionBtn'>
              <p>Content</p>
            </div>
            <div className='selectOptionBtn'>
              <p>Customize</p>
            </div>
          </div>
        </div>
        {selectedOption === "Content" ? 
          <Content />
          : <Customize className="customize"/>
          }
      <Result />
      </div>
    </Appcontext.Provider>
  )
}

export default App
