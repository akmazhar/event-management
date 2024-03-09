import { useEffect, useState } from "react";

import CorporateItem from "./CorporateItem";
import { getData } from "../../localStorage/localStorage";
import { useLoaderData } from "react-router-dom";

const Corporate = () => {
    const [storageData , setStorageData] = useState([])
    const [show, setShow] = useState(false) 

   const corporateData = useLoaderData()
  
    useEffect(()=>{
        const localId = getData();
        console.log(localId);
        if(corporateData.length > 0) {
            const filterData = corporateData.filter(oneData=> localId.includes(oneData.id))
            setStorageData(filterData)
        } 
    },[corporateData])
    

    
    return (
        <div className="max-w-screen-xl mx-auto my-32 "> 
            <div className="grid md:grid-cols-2 gap-4">
                {
                    show ? storageData.map(data=><CorporateItem key={data.id} data={data}></CorporateItem>)
                    :
                    storageData.slice(0, 4).map(data=><CorporateItem key={data.id} data={data}></CorporateItem>)
                }
            </div>


            <div className={`flex justify-center mt-12 py-1 ${show ? 'hidden' : '' }`
            }>
            
            {
              storageData.length > 4 && <button onClick={()=> setShow(!show)} className="bg-green-500 hover:bg-green-700 px-6 py-3 text-white rounded-md">
              {
                show ? '' : 'See All'
              }
              </button>
            }
            </div>
            <div>


      </div>
        </div>
    );
};

export default Corporate;