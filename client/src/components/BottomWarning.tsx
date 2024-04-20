import {Link} from "react-router-dom";
export function BottomWarning({label,buttonText,to} : {label : string , buttonText : string , to : string}){
    return(
        <div className="flex flex-row pb-2 justify-center">
            <div>
                {label}
            </div>
            <Link className="cursor-pointer underline pl-1 " to={to} >
                {buttonText}
            </Link>
        </div>
    )
}