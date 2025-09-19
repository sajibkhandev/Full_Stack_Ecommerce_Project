import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


const ForgetPassword = () => {
  const onFinish = async values => {
    // console.log(values.email);
    let data = await axios.post('http://localhost:3000/api/v1/authentication/forgetpassword', {
      email: values.email,
    }

    )
    if (data.data.success == "Reset Email sent") {
      toast.success("Check Your email for change pass");


    } else {
      toast.error("User is not exist");

    }

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
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Send Email
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ForgetPassword