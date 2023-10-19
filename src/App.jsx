import { Brand } from "./components/Brand"
import { Row } from "./components/Row"
import { SearchBar } from "./components/SearchBar"

function App() {

  return (
    <div className="app flex">
      {/* ASIDE */}
      <aside className="border border-black bg-red-400 h-screen w-1/4">
        <Brand name={"My Accesses"} />
      </aside>
      {/* MAIN */}
      <main className="w-3/4 bg-green-400 h-screen ">
        {/* Header */}
        <header className="border border-black h-24 flex justify-center items-center">
          <SearchBar
            placeholder={"Search for your application"}
            type={"text"}
            value={""}
          />
        </header>

        {/* Center */}
        <div className="center">
          {/* Row with logo and different logins for a specific application */}
          {/* Actual [codes] is a sample */}
          <Row logo={"LOGO_TEST"} codes={["www.loremipsum.com", "testlck", "test123"]}/>
        </div>
      </main>

    </div>
  )
}

export default App
