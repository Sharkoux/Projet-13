import Layout from '../component/layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../page/home'
import Login from '../page/login'
import User from '../page/user'
import { PrivateRoute } from '../component/privateRoutes'
import Signup from '../page/signup'


// Generate path for route function

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            
            {
                path: '/login',
                element: <Login />,

            },
            {
                path: '/signup',
                element: <Signup />,

            },
            {
                path: '/profile',
                element: 
                    <PrivateRoute>
                        <User />
                    </PrivateRoute>
                
            }
        ],
    },
])



/**
* Create route for render the appropriate UI
* @return { ReactElement }
*/

function Route() {
    return <RouterProvider router={router} />
}

export default Route
