import moment from "moment/moment";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";







const Home = () => {
  // const authInfo = useContext(AuthContext);
  // console.log(authInfo);

  const [items, setItems] = useState([]);

  const apiItem = useLoaderData();

  //   const handleSearch = e =>{
  //     e.preventDefault();
  //     const inputValue = e.target.text.value;
  //     const dataResult = apiItem.filter(data => data.category === inputValue)
  //     setItems(dataResult)
  // }

  useEffect(() => {
    setItems(apiItem); 
  }, [apiItem]);

  return (
<div>
  

<div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/8DGnBCn/baner-1.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/0r7nsym/baner-2.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/xSqzwff/baner-1.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>



 
  
  <div>
  <h1 className="flex font-bold  text-gray-800 text-4xl  hover:scale-110 transition-all tracking-widest justify-center"><img src="https://i.ibb.co/mDrnR2M/nam.png" alt="" /></h1>

  <div className="items-center justify-center font-serif bg-black py-2 px-5  text-center text-white font-bold hover:scale-110 transition-all tracking-widest rounded-3xl ">
  <p>{moment().format("dddd, MMMM DD, YYYY")}</p></div>
    
  <div className="flex">
        
        <button className="btn btn-primary ml-5 mr-2 mb-2 mt-2 font-mono text-xl font-bold bg-green-600 p-2 shadow-xl">Breaking News</button>
        <Marquee pauseOnHover={true} speed={100}>
         <Link className="mr-12 text-blue-700 bg-cyan-50" to="/">The STEEP (Social, Technological, Economic, Environmental, and Political) Analysis Workshop is going on.</Link>
         <Link className="mr-12 text-green-600 bg-cyan-50" to="/">We are stablishing a robust support system, whether through mentorship programs, employee assistance initiatives.</Link>
         <Link className="mr-12 text-red-700 bg-cyan-50" to="/">Steps and Steps annual meeting will be held on October 15, 2023.</Link>
         <Link className="mr-12 text-black bg-cyan-50" to="/">The annual Educational Conference aims to foster collaboration and innovation within the education sector, providing educators, administrators, and policymakers with a platform to share insights, best practices, and groundbreaking research in pedagogy and curriculum development.</Link>
        </Marquee>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto my-24 bg-red-100 p-5 rounded-2xl">
  <div className="card w-82 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/5KN15FD/rsz-workshop.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title font-mono text-2xl font-semibold text-blue-800">
    Workshops</h2>
    <p className="text-base font-serif ">Steep and steps organizations conduct innovative workshops designed to foster both individual and collective growth.</p>
    <div className="card-actions justify-between">
      <div className="text-pink-600 font-sans text-xl font-bold">855.00 $</div> 
      <Link to={`/workshop/`} className=" btn bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</Link>
      {/* <div className=" bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</div> */}
    </div>
  </div>
</div>




  <div className="card w-82 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/QnWVtxY/rsz-conference.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title font-mono text-2xl font-semibold text-blue-800">
    Educational Conference</h2>
    <p className="text-base font-serif ">Steep and steps organizations host highly impactful Educational Conferences and Seminars</p>
    <div className="card-actions justify-between">
      <div className="text-pink-600 font-sans text-xl font-bold">255.00 $</div> 
      <Link to={`/educon/`} className=" btn bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</Link>
      {/* <div className=" bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</div> */}
    </div>
  </div>
</div>




<div className="card w-82 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/VqJL6kh/rsz-care1er.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title font-mono text-2xl font-semibold text-blue-800">
    Career</h2>
    <p className="text-base font-serif ">Steep and steps organizations, also known as hierarchical organizations, are characterized by a clear chain of command and numerous levels of management.</p>
    <div className="card-actions justify-between">
      <div className="text-pink-600 font-sans text-xl font-bold">555.00 $</div> 
      <Link to={`/career/`} className=" btn bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</Link>
      {/* <div className=" bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</div> */}
    </div>
  </div>
</div>



  <div className="card w-82 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/4tVsVsD/e.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title font-mono text-2xl font-semibold text-blue-800">
    Our Courses</h2>
    <p className="text-base font-serif ">Steep and Steps is an innovative educational organization offering a diverse range of training courses designed to equip individuals with practical skills and knowledge across various disciplines.</p>
    <div className="card-actions justify-between">
      <div className="text-pink-600 font-sans text-xl font-bold">300.00 $</div> 
      <Link to={`/ourcourses/`} className=" btn bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</Link>
      {/* <div className=" bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</div> */}
    </div>
  </div>
</div>

<div className="card w-82 bg-base-100 shadow-2xl">
  <figure><img src="https://i.ibb.co/3k1vD6k/rsz-trainig.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title font-mono text-2xl font-semibold text-blue-800">
    Training Program</h2>
    <p className="text-base font-serif ">Steep and steps organizations prioritize extensive and immersive educational programs that involve in-depth theoretical knowledge and practical training.</p>
    <div className="card-actions justify-between">
      <div className="text-pink-600 font-sans text-xl font-bold">355.00 $</div> 
      <Link to={`/training/`} className=" btn bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</Link>
      {/* <div className=" bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</div> */}
    </div>
  </div>
</div>




  <div className="card w-82 bg-base-100">
  <figure><img src="https://i.ibb.co/rk94Qqh/rsz-suport.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title font-mono text-2xl font-semibold text-blue-800">
    Support</h2>
    <p className="text-base font-serif ">Steep and steps excels with tailored solutions and a dynamic consultant team, fostering a culture of innovation.</p>
    <div className="card-actions justify-between">
      <div className="text-pink-600 font-sans text-xl font-bold">200.00 $</div> 
      <Link to={`/support/`} className=" btn bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</Link>
      {/* <div className=" bg-green-600 text-white border-spacing-5 py-1 px-5 rounded-s-3xl rounded-e-xl text-base font-semibold font-mono">See More</div> */}
    </div>
  </div>
</div>
</div>
 <div>
 <h1 className="font-mono font-extrabold text-center text-6xl p-3 shadow-2xl text-green-600 mt-5 items-center rounded-3xl bg-base-100 ">Customer <span className="text-blue-600">Review </span></h1>
     <div className="items-center justify-center">
      <video autoPlay muted loop className="video w-1/2 h-1/2 mb-20 ml-96 ">
      <source src="/cl.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      </div>
     <div>
     <h1 className="font-mono font-extrabold text-center text-6xl p-3 shadow-2xl text-indigo-500 mt-5 items-center rounded-3xl bg-base-100 ">Meet <span className="text-pink-500">Our Team</span></h1>
     <div className="items-center justify-center">
      <video autoPlay muted loop className="video w-1/2 h-1/2 mb-10 ml-96 ">
      <source src="/team.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      </div>
     
     </div>
      </div>
     </div>
     
      <div>
        
        <h1 className="font-mono font-extrabold text-center text-6xl p-3 shadow-2xl text-yellow-500 mt-5 items-center rounded-3xl bg-base-100 ">Our <span className="text-red-600">Owner </span></h1>
        </div>
        <div>
        <img className="p-5 bg-green-100 mb-5  items-center hover:scale-110 transition-all tracking-widest justify-center " src="https://i.ibb.co/JsS8YKW/mnp.png" alt="" />
      </div>
      <div><img className="mt-5 mb-5 " src="https://ibb.co/HH3hGBB" alt=""></img></div>
      </div>
    
     
  );
  
};

export default Home;
