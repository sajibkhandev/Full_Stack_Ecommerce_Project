import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';



const Registration = () => {
  let navigate = useNavigate()
  const onFinish = async values => {
    let data = await axios.post('http://localhost:8000/api/v1/authentication/registration', {
      username: values.username,
      email: values.email,
      password: values.password

    }
      ,
      {
        headers: {
          Authorization: "dfsdfsdfsdfsd"
        }

      }


    )
    if (data.data == "Registration done") {
      toast.success("Check Your Email For Verification");


    }else{
      toast.error("Try Againg")
    }

    console.log(data);


  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
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
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      
      <br />
      <br />
      <div className='ml-[200px] text-red-500'>
        If you have a Account? <Link to='/login'><Button type="primary" htmlType="submit"> Login</Button></Link>

      </div>
      

    </div>
  )
}

export default Registration