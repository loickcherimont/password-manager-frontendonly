import { useState } from "react";
import { InputReadOnly } from "./InputReadOnly";

// Input by default on password type
// With a button that processing the password visibility
export function Password({value}) {
    
    // Tell about password visibility
    const [isVisible, setIsVisible] = useState(false);
    
    const handleClick = () => setIsVisible(!isVisible);
    
    return <div className="mt-3 flex space-x-4">
        <InputReadOnly value={value} type={isVisible ? "text" : "password"} />
        <button type="button" className="border border-slate-100 shadow-sm hover:bg-slate-100/50 transition duration-300 ease-in px-2 rounded" onClick={handleClick}>show/hide</button>
    </div>
}