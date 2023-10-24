import { Brand } from "./components/Brand"
import { Form } from "./components/Form"
import { useState } from "react"
import { InputReadOnly } from "./components/InputReadOnly";
import { Logo } from "./components/Logo";
import logo from "./assets/img/twitter_logotest.png"
import { TargetApplication } from "./components/TargetApplication";

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
      <div className="mt-3 flex space-x-4">
        <InputReadOnly value={"testlck"} type={"password"} />
        <button type="button" className="border border-slate-100 shadow-sm hover:bg-slate-100/50 transition duration-300 ease-in px-2 rounded">show/hide</button>
      </div>
    </TargetApplication>
  ]);

  return (
    // Tip: Use h-auto to fill all available space in the browser 
    <div className="app flex h-auto">
      {/* ASIDE */}
      <aside className="bg-teal-500 h-auto w-1/4">
        <Brand name={"My Accesses 🔐"} />
      </aside>
      {/* MAIN */}
      <main className="w-3/4 bg-slate-100 h-full">
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
