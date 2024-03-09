import { useEffect, useState } from 'react';

const Career = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch('/all.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 className="font-mono font-extrabold text-center text-6xl p-3 shadow-2xl text-yellow-950 mt-5 items-center rounded-3xl bg-base-100" >IT Jobs at Steep & Steps</h1>
   
    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto my-24">
      {jsonData.map((data, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl rounded-2xl">
          <figure className="h-60 overflow-hidden rounded-t-2xl">
            <img
              src={`https://i.ibb.co/W2HVppn/job${index}.png`}
              alt=""
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-5  bg-slate-200 gap-5 shadow-2xl ">
            <h2 className="card-title font-bold text-2xl text-blue-800 mb-2">{data.job_type}</h2>
            <p className="text-base text-gray-700 mb-4">{data.job_qualification}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="badge badge-outline text-red font-serif">Deadline: {data.job_deadline}</div>
                <div className="badge bg-green-600 text-white py-1 px-3 rounded-s-2xl rounded-e-xl font-mono">Salary: $ {data.salary}</div>
              </div>
            </div>
          </div>
          <input type="file" className="file-input file-input-primary  "/>
          <button className="btn text-yellow-700 font-mono bg-black">Apply Now & attatched CV with cover letter</button>
        </div>
      ))}
    </div>
 </div>
  );
};

export default Career;
