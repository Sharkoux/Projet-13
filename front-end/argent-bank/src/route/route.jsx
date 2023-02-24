import Layout from '../component/layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../page/home'
import Login from '../page/login'
import User from '../page/user'
import { PrivateRoute } from '../component/privateRoutes'



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
                path: '/profile',
                element: 
                    <PrivateRoute>
                        <User />
                    </PrivateRoute>
                
            }
        ],
    },
])



function Route() {
    return <RouterProvider router={router} />
}

export default Route
