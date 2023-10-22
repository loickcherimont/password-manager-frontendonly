import { Brand } from "./components/Brand"
import { Row } from "./components/Row"
import { Form } from "./components/Form"

function App() {

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
          <Form/>
        </header>

        {/* Center */}
        <div className="center">
          {/* Row with logo and different logins for a specific application */}
          <Row />
          <Row />
          <Row />
        </div>
      </main>

      

    </div>
  )
}

export default App
