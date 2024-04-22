import { useEffect, useState } from "react"
import axios from "axios";
import { Loader } from "./Loader";
import { SearchBox } from "./SearchBox";
interface Value {
    id: number;
    depth: number;
    status: string;
    breadth: number;
    severity: string;
    pincode: number;
}


export function DataTable(){
    const [values,setValues] = useState<Value[] | null>(null);
    const [filter,setFilter] = useState<String>("");
    const [click,setClick] = useState<Boolean>(false);
    useEffect(()=>{
        setValues(null);
        if(filter==""){
            axios.get("https://roadradar.angarabalaji.workers.dev/api/pole/getpoledetailsall")
                .then((response)=>{
                    setValues(response.data.result);
                })
        }else{
            axios.get("https://roadradar.angarabalaji.workers.dev/api/pole/getpoledetails?filter="+filter)
                .then((response)=>{
                    setValues(response.data.result);
                    console.log(response.data.result);
                })
        }
    },[click]);
    return(
        <div className="">
            <SearchBox setClick={setClick} setFilter={setFilter}/>
            <div className="h-screen mx-8">
                {values===null ? (
                    <Loader />
                ):    
                <table className="min-w-full">
                    <thead className="bg-slate-200 border-b">
                        <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Id
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Depth
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Status
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Breadth
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Severity
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Pincode
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.map(value => (
                            <tr key={value.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {value.id}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {value.depth}m
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {value.status}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {value.breadth}m
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {value.severity}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {value.pincode}
                                </td>
                            </tr>    
                        ))}
                        
                    </tbody>
                </table>
                }
        </div>
        </div>
    )
}