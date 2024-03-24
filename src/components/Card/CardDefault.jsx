import { Link } from "react-router-dom";


const CardDefault = ({item}) => {
          // console.log(item)
          const {category, id, img, title} = item;
    return (
        <div>
             <Link to={`/donation-details/${id}`}>
             <div className="card cursor-pointer  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">{category}</button>
    </div>
  </div>
</div>
             </Link>

        </div>
    );
};

export default CardDefault;