
import { useEffect, useState } from 'react';

const OurCourses = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch('/all.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 className="p-3 shadow-2xl  mt-5 items-center rounded-3xl bg-base-100 ml-48 mr-48" ><img src="https://i.ibb.co/ThdPb50/lokh.jpg" alt="" /></h1>
      {/* <h1 className="font-mono font-extrabold text-center text-6xl p-3 shadow-2xl text-green-600 mt-5 items-center rounded-3xl bg-base-100" >Workshops at Steep & Steps</h1> */}
   
    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto my-24">
      {jsonData.map((data, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl rounded-2xl">
          <figure className="h-60 overflow-hidden rounded-t-2xl">
            <img
              src={`https://i.ibb.co/8cHkmM0/Online-courses${index}.jpg`}
              alt=""
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-5  bg-green-100 gap-2 shadow-2xl ">
            <h2 className="card-title font-bold text-2xl text-blue-800">{data.course_name}</h2>
            <h2 className="card-title font-bold text-xl text-black mb-1">{data.course_title}</h2>
            <p className="text-base text-gray-700 mb-4">{data.course_details}</p>
            <div className="badge bg-pink-600 text-white py-1 px-5 rounded-s-2xl rounded-e-2xl font-mono ml-10">Instructor: {data.instructor_name}</div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 gap-3 ml-10 mr-5">
                <div className="badge bg-green-600 text-white py-3 px-3 rounded-s-2xl rounded-e-xl font-mono">{data.training_duration}</div>
                <div className="badge bg-yellow-200 py-1 px-3 rounded-s-2xl rounded-e-xl font-mono ml-20">Course Fee:${data.prices}</div>
                
              </div>
            </div>
          </div>
         
          <button className="btn bg-black text-yellow-500 font-sans">Enroll Now</button>
        </div>
      ))}
    </div>
 </div>
  );
};


export default OurCourses;