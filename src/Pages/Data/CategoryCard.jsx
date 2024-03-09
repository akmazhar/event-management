
import { Link } from 'react-router-dom';


const CategoryCard = ({item}) => {
const { id, picture, title, card_bg_color, text_color, description, price } = item || {}

  return (

 <Link to={`/details/${id}`}>


<div className="card w-96 bg-base-100 shadow-2xl">
  <figure><img src={picture} alt="" /></figure>
  <div className="card-body" style={{backgroundColor: card_bg_color}}>
    <h2 className="card-title font-mono text-2xl font-semibold text-blue-800">
     {title}
    </h2>
    <p className="text-base font-serif ">{description}</p>
    <div className="card-actions justify-between">
      <div className="text-pink-600 font-sans text-xl font-bold" style={{color: text_color}}>{price} $</div> 
      <div className=" bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</div>
    </div>
  </div>
</div>

</Link>




//  <div className='rounded-md' style={{backgroundColor: card_bg_color}}>
// <div>
//   <img className='rounded-md w-full' src={picture} alt="" />
// </div>
// <div className='p-4'>
// <div className='w-20 flex justify-center'>

// <h2 className='rounded text-base font-medium' style={{backgroundColor: card_bg_color, color: text_color}}> {} </h2>

// </div>
// <h3 className='font-semibold mt-2 text-xl' style={{color: text_color}}>{title}</h3>
// </div>
// <div>
// <p className="text-base font-serif text-[#0B0B0BB2]">{description}</p>
// </div>
// <div>
// <p className="text-base font-mono bg-red-600 text-white ">{price}</p>
// </div>
// <button className='bg-black text-white rounded '>See more</button>


  );
};

export default CategoryCard;