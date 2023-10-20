import { InputReadOnly } from "./InputReadOnly"
import { Logo } from "./Logo"
import logo from "../assets/img/twitter_logotest.png"

{/* Row with logo and different logins for a specific application */ }
export function Row() {
    return <div className="flex rounded mx-20 my-3 p-3 justify-evenly bg-white shadow-md items-center">
        <Logo src={logo} />
        <ul className="codes w-auto p-3">
            {/* Actual [codes] is a sample */}

            {/* codes={["www.loremipsum.com", "testlck", "test123"]} */}
            <li className="mt-3">
                <InputReadOnly value={"www.loremipsum.com"} type={"text"} />
            </li>
            <li className="mt-3">
                <InputReadOnly value={"testlck"} type={"text"} />
            </li>
            {/* space-x-4 ??? */}
            <li className="mt-3 flex space-x-4">
                <InputReadOnly value={"testlck"} type={"password"} />
                <button type="button" className="border border-slate-100 shadow-sm hover:bg-slate-100/50 transition duration-300 ease-in px-2 rounded">show/hide</button>
            </li>

        </ul>
    </div>
}