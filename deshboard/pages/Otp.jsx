import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const Otp = () => {
    let navigate=useNavigate()
    let params=useParams()
    // console.log(params.email);
     const onFinish =async values  => {
       let data=await axios.post('http://localhost:3000/api/v1/authentication/otp',{
         otp:values.otp,
         email:params.email
      }
  
  ) 
//   console.log(data.data.success);
  if(data.data.success=='otp matched'){
    navigate("/login")
  }
  else{
    console.log("Otp page a problme");
    
  }
     
   
   };
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
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
      label="Otp"
      name="otp"
      rules={[{ required: true, message: 'Please input your Otp!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item label={null}>
      <Link to='/login'>
       <Button type="primary" htmlType="">
        Back to Login
      </Button>
      
      </Link>
      <Button type="primary" htmlType="submit">
        Send
      </Button>
    </Form.Item>
  </Form>
      
  )
}

export default Otp