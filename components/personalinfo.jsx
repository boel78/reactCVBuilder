import { useState } from "react";

export const Personalinfo = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="personalInfo">
      <h2 onClick={() => setShow(!show)}>Personal info</h2>
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
            <p className="inputTitle">Job Title</p>
            <input className="inputInput" />
          </div>
        </form>
        :
        <></>
      }
    </div>
  );
};
