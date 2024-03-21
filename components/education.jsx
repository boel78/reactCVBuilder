import React from 'react'
import { useState } from 'react'
import { ArrowUp, ArrowDown} from "@phosphor-icons/react"

export const Education = () => {
    const [show, setShow] = useState(true)
  return (
    <div className ="personalInfo" onClick={() => setShow(!show)}>
    <div className="infoHeader">
          <h2>Education</h2>
          {show ? <ArrowDown size="25"/> : <ArrowUp size="25"/>}
    </div>
      { show ?
        <form>
          <div>
            <p className="inputTitle">Firstname</p>
            <input className="inputInput" />
          </div>
          <div>
            <p className="inputTitle">Lastname</p>
            <input className="inputInput" />
          </div>
          <div>
            <p className="inputTitle">Email</p>
            <input className="inputInput" />
          </div>
          <div>
            <p className="inputTitle">Phone number</p>
            <input className="inputInput" />
          </div>
          <div>
            <p className="inputTitle">Adress</p>
            <input className="inputInput" />
          </div>
        </form>
        :
        <></>
      }
      </div>
  )
}
