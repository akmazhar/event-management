import { Marquee } from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {


    return (


        <div className="flex">
        <button className="btn btn-secondary">Breaking News</button>
        <Marquee pauseOnHover={true} speed={100}>
         <Link className="mr-12 text-blue-700 " to="/">The STEEP (Social, Technological, Economic, Environmental, and Political) Analysis Workshop is going on.</Link>
         <Link className="mr-12 text-green-600" to="/">We are stablishing a robust support system, whether through mentorship programs, employee assistance initiatives.</Link>
         <Link className="mr-12 text-red-700 " to="/">Steps and Steps annual meeting will be held on October 15, 2023.</Link>
         <Link className="mr-12 text-yellow-600" to="/">The annual Educational Conference aims to foster collaboration and innovation within the education sector, providing educators, administrators, and policymakers with a platform to share insights, best practices, and groundbreaking research in pedagogy and curriculum development.</Link>
        </Marquee>
        </div>

    );
};

export default BreakingNews;