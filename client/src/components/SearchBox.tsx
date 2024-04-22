export function SearchBox({setClick,setFilter}:{setClick:any,setFilter:any}){
    return(
        <div className="flex flex-row justify-center ">
            <div className="my-8 w-96 relative ">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute m-4 mt-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <input placeholder="Search by pincode, city, id.... " className="bg-slate-100 w-full h-16 px-16 py-8 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-2 " onChange={(e)=>setFilter(e.target.value)}/>
                <button className="absolute end-4 my-5 " onClick={()=>setClick((click: boolean)=>!click)}>Search</button>
            </div>
        </div>
    )
}