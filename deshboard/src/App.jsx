import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import Otp from './pages/Otp';
import ForgetPassword from './pages/ForgetPassword';
import ChangePassword from './pages/ChangePassword';
import Home from './pages/Home';
import AddCategory from './pages/AddCategory';
import AddSubCategory from './pages/AddSubCategory';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/otp/:email/:otpcode" element={<Otp />}></Route>
      <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
      <Route path="/changepassword/:email" element={<ChangePassword />}></Route>
      <Route path="/home" element={<Home />}>
          <Route path="addcategory" element={<AddCategory />}></Route>
          <Route path="addsubcategory" element={<AddSubCategory />}></Route>

      </Route>
     
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App