import { Header } from "../components/Header";
import { SearchBox } from "../components/SearchBox";

export function Search(){
    return (
        <div className='bg-gradient-to-r from-gray-50 to-green-50 h-screen flex flex-col '> 
            <Header />
            <SearchBox />
        </div>
    )
}