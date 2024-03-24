

import { useState } from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import DonationCard from '../../components/DonationCared/DonationCard';

const Donation = () => {
      const {localData} = useLocalStorage();
      console.log(localData);
      const [showAll, setShowAll] = useState(false);
      const handleShowAll = () =>{
           setShowAll(!showAll);
      }
      if(localData.length == 0){
        return <p className='text-center font-bold text-3xl mt-5'>No Data Found</p>
      }
    return (
       <>
          <div >
            {
               localData.slice(0, showAll ?  localData.length : 4 ).map((data) => (
                 <DonationCard 
                 key={data.id}
                 data={data}
                 />
               ) )
            }
        </div>
          {
            localData.length > 4 ? <div className='my-5'>
            <button onClick={handleShowAll} className='btn btn-outline'>
       {!showAll ? "ShowAll" : "Show Less"}</button>
        </div> : null 
          }
       </>
    );
};

export default Donation;