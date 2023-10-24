import { useRef } from "react";
import { InputReadOnly } from "./InputReadOnly";
import { Logo } from "./Logo";
import logo from "../assets/img/twitter_logotest.png"

// Form to add new passwords
export function Form({ codes, setCodes }) {

    // Informations for the attributes of inputs
    const fields = [
        {
            type: "link",
            placeholder: "www.gmail.com"
        },
        {
            type: "login",
            placeholder: "johndoe123"
        },
        {
            type: "password",
            placeholder: "Your password"
        },
    ];

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        // To Do : Transfer these informations to Rows
        const link = formData.get("link");
        const login = formData.get("login");
        const password = formData.get("password");

        const newCodes = [
            <div className="rounded mx-20 my-3 p-3 justify-evenly bg-white shadow-md items-center">
                <Logo src={logo} />

                <div className="mt-3">
                    <InputReadOnly value={link} type={"text"} />
                </div>
                <div className="mt-3">
                    <InputReadOnly value={login} type={"text"} />
                </div>
                <div className="mt-3 flex space-x-4">
                    <InputReadOnly value={password} type={"password"} />
                    <button type="button" className="border border-slate-100 shadow-sm hover:bg-slate-100/50 transition duration-300 ease-in px-2 rounded">show/hide</button>
                </div>
            </div>
        ];

        // Update codes when data are submitted
        setCodes([...codes, ...newCodes]);
    }

    return <div className="w-full mx-5 grid place-items-center">

        {/* To Do : Verify which method is more adaptative for a password application between GET/POST */}
        <form action="#" method="get" className="inline-grid grid-cols-4 gap-x-4" onSubmit={handleSubmit} ref={form}>

            {
                fields.map((field, index) => {
                    return <div className="p-2" key={index}>
                        <label htmlFor={field.type} className="block">Link</label>
                        <input type="text" className="rounded pl-2 mt-1 placeholder:italic" placeholder={field.placeholder} name={field.type} id={field.type} required />
                    </div>
                })
            }
            {/* Button to add new password */}
            <div className="p-2 grid place-items-center">
                <input type="submit" className="rounded bg-cyan-500 text-white hover:cursor-pointer hover:bg-cyan-700 transition ease-out duration-300 px-4 py-2" value={"Add new password"} />
            </div>
        </form>
    </div>
}