import { useRef } from "react";
import logo from "../assets/img/twitter_logotest.png";
import { Logo } from "./Logo";
import { TargetApplication } from "./TargetApplication";
import { InputReadOnly } from "./InputReadOnly";
import { Password } from "./Password";
import { capitalize } from "../scripts/utils";


export function MobileForm({ setUserAskForm, codes, setCodes }) {

    // Variables
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

    // Handlers
    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData(form.current);

        const link = formData.get("link");
        const login = formData.get("login");
        const password = formData.get("password");

        const newCodes = [
            <TargetApplication>
                <Logo src={logo} />
                <div className="inputs">
                    <div className="mt-3">
                        <InputReadOnly value={link} type={"text"} />
                    </div>
                    <div className="mt-3">
                        <InputReadOnly value={login} type={"text"} />
                    </div>
                    <Password value={password} />
                </div>
            </TargetApplication>
        ];

        // Update codes when data are submitted
        setCodes([...codes, ...newCodes]);

        // Clean all fields after submit
        form.current.reset();
    }


    return <form action="#" method="post" className="grid" onSubmit={handleSubmit} ref={form}>


        <div className="flex justify-center m-2">
            <Logo src={logo} />
        </div>

        {
            fields.map((field, index) => {
                const { type, placeholder } = field;
                return <div className="p-2" key={index}>
                    <label htmlFor={type} className="block">{capitalize(type)}</label>
                    <input type="text" className="rounded p-2 mt-1 placeholder:italic w-full bg-slate-200" placeholder={placeholder} name={type} id={type} required />
                </div>
            })
        }
        {/* Button to add new password */}
        <div className="p-2 flex flex-col space-y-4">
            <input type="submit" className="rounded bg-cyan-600 text-white hover:cursor-pointer hover:bg-cyan-500 transition ease-out duration-300 px-4 py-2" value={"Add new password"} />
            <input type="button" className="rounded bg-red-600 text-white hover:cursor-pointer hover:bg-red-500 transition ease-out duration-300 px-4 py-2" value={"Exit"} onClick={() => setUserAskForm(false)} />
        </div>
    </form>
}