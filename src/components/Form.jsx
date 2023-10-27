import { useRef } from "react";
import { InputReadOnly } from "./InputReadOnly";
import { Logo } from "./Logo";
import logo from "../assets/img/twitter_logotest.png"
import { Password } from "./Password";

// Form to add new passwords
export function Form({ codes, setCodes }) {

    // Informations for the attributes of inputs
    // From the main html form (cf. line 63)
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

    // On submit, transfer link, password, login to TargetApplication (UI)
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

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
                <Password value={password} />
            </div>
        ];

        // Update codes when data are submitted
        setCodes([...codes, ...newCodes]);

        // Clean all fields after submit
        form.current.reset();
    }

    return <div className="w-full mx-5 grid place-items-center">

        <form action="#" method="post" className="inline-grid grid-cols-4 gap-x-4" onSubmit={handleSubmit} ref={form}>

            {
                fields.map((field, index) => {
                    const { type, placeholder } = field;
                    return <div className="p-2" key={index}>
                        <label htmlFor={type} className="block">{type.toUpperCase()}</label>
                        <input type="text" className="rounded pl-2 mt-1 placeholder:italic" placeholder={placeholder} name={type} id={type} required />
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