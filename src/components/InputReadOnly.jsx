// Not editable input for link, login, hidden password by default
export function InputReadOnly({value, type}) {
    return <input
                value={value}
                type={type}
                disabled
            />
}