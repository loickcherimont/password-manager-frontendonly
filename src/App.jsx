import { Form } from "./components/Form"
import { useState } from "react"
import { InputReadOnly } from "./components/InputReadOnly";
import { Logo } from "./components/Logo";
import logo from "./assets/img/twitter_logotest.png"
import { TargetApplication } from "./components/TargetApplication";
import { Password } from "./components/Password";
import { ToggleForm } from "./components/ToggleForm";
import { MobileNavigationBtn } from "./components/MobileNavigationBtn";

function App() {

  // Storage for codes
  const [codes, setCodes] = useState([
    <TargetApplication>
      <Logo src={logo} />
      <div className="inputs">
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

  const [userAskForm, setUserAskForm] = useState(false);

  return (
    // Tip: Use "min-h-screen max-h-auto" to fill all available space in the browser 
    <div className="app flex min-h-screen max-h-auto">
      {/* MAIN */}
      <main className="w-full bg-slate-100 min-h-screen max-h-auto">
        {/* Header */}
        <header className="flex justify-between bg-gradient-to-r from-cyan-500 to-teal-300  lg:justify-center lg:items-center lg:h-24">
          <Logo src={logo} />

          <Form codes={codes} setCodes={setCodes} /> {/* On mobile, form are by default hidden to see ToggleForm and Logo */}

          <ToggleForm userAskForm={userAskForm} codes={codes} setCodes={setCodes}/>

          {/* Only for responsive */}
          <MobileNavigationBtn setUserAskForm={setUserAskForm}/>
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
