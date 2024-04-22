import {  useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import axios from "axios";
export function Updatepg(){
    const [finalUpdate , setFinalUpdate] = useState('Not Started');
    const [id,setId] = useState<number>();
    const[res,setRes] = useState("");

    const handleUpdate = ()=>{
        axios.post("https://roadradar.angarabalaji.workers.dev/api/pole/updatepoledetails",{
            'id' : id ,
            'status' : finalUpdate
        },{
            headers :{
                'authorization':'Bearer '+localStorage.getItem('token')
            },
        })
        .then((response)=>{
            setRes(response.data.result)
        })
    }
    
    return(
        <div className='g-gradient-to-r from-gray-50 to-green-50 h-screen flex flex-col items-center'>
            <Header />
            <div className="flex flex-col h-screen justify-center w-8/12">
                <div className="flex flex-row justify-between">
                    <input placeholder="Id"  type="number" value={id} onChange={(e)=>{setId(isNaN(e.target.valueAsNumber)?0:e.target.valueAsNumber)}} className="border bg-slate-200 m-2 h-12 rounded-lg"></input>
                    <label className="block text-sm font-medium text-black mx-8 ">Select an option</label>
                    <select value={finalUpdate} onChange={(e)=>{setFinalUpdate(e.target.value)}} className="bg-slate-50 h-14 text-gray-600 mr-6 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
                        <option value="Not Started" >Not Started</option>
                        <option value="Work in Progress">Work in Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <Button label={"Update"} onClick={handleUpdate} />
                    <div className="mt-1 font-semibold font-sans text-blue-800">{res}</div>
                </div>
            </div>
        </div>
    )
}