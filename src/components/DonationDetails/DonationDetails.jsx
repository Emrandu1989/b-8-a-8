import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../utils/localStorage";
import CustomSpinner from "../CustomSpinner/CustomSpinner";


const DonationDetails = () => {
    const [singleData, setSingleData ]= useState({})
    const {data, loading} = useDonationData();
    const {id} = useParams();
    console.log(id, singleData);
   
    const handleDonate = () =>{
         console.log('clicked')
         saveToLocalStorage(singleData)
    }
  
    
    useEffect(()=>{
          if(data){
            const singleData = data.find(item=> item.id == id)
            setSingleData(singleData)
          }
    },[data, id])
      const {img, title, category} = singleData || {}
   
      if(loading){
        return <CustomSpinner/>
       }
      return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure className="relative"><img src={img} alt="Movie"/>
    <button
     onClick={handleDonate}
    className="absolute bg-green-600 w-36 h-12 bottom-5 left-5 rounded text-white font-bold text-2xl">Donate500</button>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="uppercase font-bold text-2xl text-gray-800">{category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DonationDetails;