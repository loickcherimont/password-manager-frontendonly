import { Aside } from "./components/Aside"
import { Form } from "./components/Form"
import { useState } from "react"
import { InputReadOnly } from "./components/InputReadOnly";
import { Logo } from "./components/Logo";
import logo from "./assets/img/twitter_logotest.png"
import { TargetApplication } from "./components/TargetApplication";
import { Password } from "./components/Password";

function App() {

  const [codes, setCodes] = useState([
    <TargetApplication>
      <Logo src={logo} />

      {/* To Do : Create a <link-login-password> component */}
      <div className="mt-3">
        <InputReadOnly value={"www.loremipsum.com"} type={"text"} />
      </div>
      <div className="mt-3">
        <InputReadOnly value={"testlck"} type={"text"} />
      </div>
      <Password value={"testlck"}/>
    </TargetApplication>
  ]);

  return (
    // Tip: Use "min-h-screen max-h-auto" to fill all available space in the browser 
    <div className="app flex min-h-screen max-h-auto">
      <Aside title={"My Accesses 🔐"}/>
      {/* MAIN */}
      <main className="w-3/4 bg-slate-100 min-h-screen max-h-auto">
        {/* Header */}
        <header className="h-24 flex justify-center items-center">
          <Form codes={codes} setCodes={setCodes} />
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
