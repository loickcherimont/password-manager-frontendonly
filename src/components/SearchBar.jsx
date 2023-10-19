import { useState } from "react"

export function SearchBar({placeholder, type}) {

    const [input, setInput] = useState("")

    // Update input state change
    // Allow user write the target application name
    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    return <div className="border border-yellow-500 w-full mx-5">
        <input
            type={type}
            placeholder={placeholder}
            value={input}
            onChange={handleChange}
            className="w-full p-3 border border-red-500 rounded"
        />
    </div>
}