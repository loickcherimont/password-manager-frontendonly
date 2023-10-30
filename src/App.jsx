import { Form } from "./components/Form"
import { useState } from "react"
import { InputReadOnly } from "./components/InputReadOnly";
import { Logo } from "./components/Logo";
import logo from "./assets/img/twitter_logotest.png"
import { TargetApplication } from "./components/TargetApplication";
import { Password } from "./components/Password";
import { ToggleForm } from "./components/ToggleForm";

function App() {

  const [codes, setCodes] = useState([
    <TargetApplication>
      <Logo src={logo} />
      <div className="inputs">
        {/* To Do : Create a <link-login-password> component */}
        <div className="mt-3">
          <InputReadOnly value={"www.loremipsum.com"} type={"text"} />
        </div>
        <div className="mt-3">
          <InputReadOnly value={"testlck"} type={"text"} />
        </div>
        <Password value={"testlck"} />
      </div>
    </TargetApplication>
  ]);

  return (
    // Tip: Use "min-h-screen max-h-auto" to fill all available space in the browser 
    <div className="app flex min-h-screen max-h-auto">
      {/* MAIN */}
      <main className="w-full lg:w-3/4 bg-slate-100 min-h-screen max-h-auto">
        {/* Header */}
        <header className="flex justify-between bg-gradient-to-r from-cyan-500 to-teal-300  lg:justify-center lg:items-center border border-black lg:h-24  lg:bg-transparent">
          
          <Form codes={codes} setCodes={setCodes} /> {/* On mobile, form are by default hidden to see ToggleForm and Logo */}
          
          <Logo src={logo} />
          <ToggleForm />
        </header>

        {/* Center */}
        <div className="center">
          <ul>
            {
              codes.map((targetApplication, index) => {
                return <li key={index} className="row mt-2">
                  {targetApplication}
                </li>
              })
            }
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
