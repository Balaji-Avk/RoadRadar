import { DataTable } from "../components/DataTable";
import { Header } from "../components/Header";



export function Search(){
    return (
    
    <div className='bg-gradient-to-r from-gray-50 to-green-50 overflow-auto h-screen flex flex-col min-w-full'> 
        <Header />
        <DataTable />
    </div>
    )
}