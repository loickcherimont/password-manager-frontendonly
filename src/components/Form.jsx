import { useRef } from "react";

// Form to add new passwords
export function Form() {

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