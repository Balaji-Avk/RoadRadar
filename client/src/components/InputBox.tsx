export function InputBox({label,placeholder,onChange } : {label : string , placeholder : string , onChange ?: any}){
    return(
        <div>
            <div className="font-medium text-sm py-2 text-left">
                {label}
            </div>
            <input placeholder={placeholder} onChange={onChange}className="w-full border rounded border-slate-200 px-2 py-1"></input>
        </div>
    )
}