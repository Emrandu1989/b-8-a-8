import  { useEffect, useState } from 'react';

const useDonationData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
       const fetchData = async () => {
        setLoading(true)
          const res = await fetch('/public/category.json')
          const data = await res.json();
          setData(data)
          setLoading(false)
       }
       fetchData();
    },[])
    return {data, loading}
};

export default useDonationData;