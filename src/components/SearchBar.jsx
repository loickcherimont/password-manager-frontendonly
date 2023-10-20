import { useState } from "react"

export function SearchBar({placeholder, type}) {

    const [input, setInput] = useState("")

    // Update input state change
    // Allow user write the target application name
    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    return <div className="w-full mx-5">
        <input
            type={type}
            placeholder={placeholder}
            value={input}
            onChange={handleChange}
            className="w-full p-3 rounded"
        />
    </div>
}