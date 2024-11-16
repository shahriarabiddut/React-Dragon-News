import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) =>{
                    return fetch('/demo-data/news.json');
                },
            },
        ]
    },{
        path:'/news/:id',
        element: <h1>News Layout</h1>
    },{
        path:'/auth',
        element: <AuthLayout/>
        ,
        children:[
            {
                path:'/auth/login',
                element: <Login/>
            },{
                path:'/auth/register',
                element: <Register/>
            },
        ]
    },
    {
        path:'*',
        element: <h1>Error Layout</h1>
    },
])

export default router;