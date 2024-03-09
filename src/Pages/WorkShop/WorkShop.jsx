


import { useEffect, useState } from 'react';

const Workshop = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch('/all.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 className="p-3 shadow-2xl  mt-5 items-center rounded-3xl bg-base-100 ml-48 mr-48" ><img src="https://i.ibb.co/d4Mn9z4/b34a6837-39ef-4617-86fb-1aec223fcda7.jpg" alt="" /></h1>
      {/* <h1 className="font-mono font-extrabold text-center text-6xl p-3 shadow-2xl text-green-600 mt-5 items-center rounded-3xl bg-base-100" >Workshops at Steep & Steps</h1> */}
   
    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto my-24">
      {jsonData.map((data, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl rounded-2xl">
          <figure className="h-60 overflow-hidden rounded-t-2xl">
            <img
              src={`https://i.ibb.co/gJRc2pL/apac-art-work-6${index}.png`}
              alt=""
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-5  bg-blue-100 gap-5 shadow-2xl ">
            <h2 className="card-title font-bold text-2xl text-blue-800 mb-2">{data.workshop_name}</h2>
            <p className="text-base text-gray-700 mb-4">{data.workshop_title}</p>
            <div className="badge bg-yellow-200 py-1 px-3 rounded-s-2xl rounded-e-xl font-mono ml-20">Entry Fee: ${data.entry_fee}</div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="badge badge-outline text-red font-serif">{data.workshop_date}</div>
                <div className="badge bg-green-600 text-white py-1 px-3 rounded-s-2xl rounded-e-xl font-mono">{data.workshop_time}</div>
                <div className="badge bg-pink-600 text-white py-1 px-3 rounded-s-2xl rounded-e-xl font-mono">{data.workshop_duration}</div>
                
              </div>
            </div>
          </div>
          <button className="btn bg-black text-yellow-500 font-sans">Join Now</button>
        </div>
      ))}
    </div>
 </div>
  );
};

export default Workshop;


