// Not editable input for link, login, hidden password by default
export function InputReadOnly({value, type}) {
    return <input
                value={value}
                type={type}
                disabled
                className="w-full lg:w-96 text-slate-700 bg-slate-100/50 rounded px-3 hover:cursor-text"
            />
}