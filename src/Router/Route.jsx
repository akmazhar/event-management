
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../MainLayout/MainLayout';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import Home from './../Pages/Home/Home';
import Career from './../Pages/Career/Career';
import Register from './../Pages/Register/Register';
import Login from './../Pages/Login/Login';
import TrainIng from '../Pages/TrainIng/TrainIng';
import EduCon from '../Pages/EduCon/EduCon';
import Support from '../Pages/Support/Support';
import Workshop from '../Pages/workshop/workshop';
import OurCourses from '../Pages/OurCourses/OurCourses';
import PrivetRoute from '../components/Header/Logo/PrivateRoute/PrivetRoute';
import BreakingNews from '../Pages/Home/BreakingNews';







const myCreatedRoute =  createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
            path : "/",
            element : <Home></Home>,
            },
            // {
            // path : "/about",
            // element : <AboutUs></AboutUs>,
            // loader : ()=> fetch('/edu.json')
            // },
            {
            path : "/training",
            element : <PrivetRoute><TrainIng></TrainIng></PrivetRoute>,
            loader : ()=> fetch('/all.json')
           },
         
           {
            path : "/career",
            element : <PrivetRoute><Career></Career></PrivetRoute>,
            loader : ()=> fetch('/all.json')
            },
            
           {
            path : "/educon",
            element : <PrivetRoute><EduCon></EduCon></PrivetRoute>,
            loader : ()=> fetch('/all.json')
           },
           {
            path : "/support",
            element : <Support></Support>,
            loader : ()=> fetch('/all.json')
            },
            {
                path : "/workshop",
                element : <PrivetRoute><Workshop></Workshop></PrivetRoute>,
                loader : ()=> fetch('/all.json')
            },
            {
                path : "/ourcourses",
                element : <OurCourses></OurCourses>,
                loader : ()=> fetch('/all.json')
            },
            {
            path: "/register",
            element: <Register></Register>
            },

            {
            path: "/login",
            element: <Login></Login>
            },
            {
            path: "/breakingnews",
            element: <BreakingNews></BreakingNews>
            },
    

            // {
            //     path : "/details/:id",
            //     element : <Details></Details>,
            //     loader : ()=> fetch('/edu.json')
            // }
        ]
    }
])

export default myCreatedRoute;
