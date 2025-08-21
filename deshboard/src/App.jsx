import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'



const App = ()  => {
  const onFinish =  values  => {
   let data= axios.post('http://localhost:3000/createuser',{
    username:values.username,
    email:values.username,
    password:values.password

   })
   console.log(data);
   
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
    <div>
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
        Submit
      </Button>
    </Form.Item>
  </Form>
      
    </div>
  )
}

export default App