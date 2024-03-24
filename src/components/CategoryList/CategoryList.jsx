import React from "react";
import useDonationData from "../../Hooks/useDonationData";
import CardDefault from "../Card/CardDefault";
import CustomSpinner from "../CustomSpinner/CustomSpinner";

const CategoryList = ({ filteredData, loading }) => {
  // console.log(data)
  if (loading) {
    return <CustomSpinner/>
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {filteredData.map((item) => (
          <CardDefault key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
