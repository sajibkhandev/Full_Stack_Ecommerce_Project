import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate=useNavigate()
    const onFinish = async values  => {

       let data = await axios.post('http://localhost:3000/api/v1/authentication/login', {
      email: values.email,
      password: values.password

    }
    )
  
    if(data.data.error=="Creadintial User") {
      toast.error("Creadintial User");
      

    }else if(!data.data.emailVerification){
       toast.error("Please Verify Your Account");

    }else if(data.data.role=="user"){
      toast.error("Only Admin and Merchant Can login the account")
    }
    else{
      navigate('/home')
      
    }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
   <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
       <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your Email!' }]}
    >
      <Input />

    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

   

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
  <Link to='/forgetpassword'><Button className='ml-[150px]'>Forget Password</Button></Link>
   </>
  )
}

export default Login