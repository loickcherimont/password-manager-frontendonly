import { InputReadOnly } from "./InputReadOnly"

{/* Row with logo and different logins for a specific application */}
export function Row({ logo, codes }) {
    console.log(codes)
    return <div className="flex border border-black rounded m-3">
        <div className="bg-yellow-400">{logo}</div>
        <ul className="codes bg-orange-400 w-full">
            {
                
                codes.map((input, index) => {
                    return <li key={index} className="mt-2">
                        <InputReadOnly value={input} type={"text"}/>
                    </li>
                })
            }
        </ul>
    </div>
}