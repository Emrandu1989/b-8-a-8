import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
import useDonationData from "../../Hooks/useDonationData";

const Home = () => {
  const [value, setValue] = useState("");
  const {data, loading} = useDonationData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{
      
       setFilteredData(data)
  },[data])

  console.log(value);
  const handleSearch = () => {
    if(value.trim() != "" ){
            const filteredData = data.filter((item) => item.category.toLowerCase().includes(value.toLowerCase()));
            setFilteredData(filteredData);
    }else{
      setFilteredData(data)
    }
  };
  return (
    <div>
      <Banner value={value} setValue={setValue} handleSearch={handleSearch} />
      <CategoryList loading={loading} filteredData={filteredData} />
    </div>
  );
};

export default Home;
