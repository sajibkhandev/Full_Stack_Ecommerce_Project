import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'

const AddProduct = () => {
  let [image,setImage]=useState({})

    const onFinish =async values => {
      console.log(values.image,"image");
      
       
   let data = await axios.post('http://localhost:3000/api/v1/product/addproduct', {
      name: values.name,
      des:values.des,
      avatar:image

    }
    ,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
    )
    console.log(data);
    
   

};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};


let handleImage=(e)=>{
  setImage(e.target.files[0]);
}


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
      label="Product Name"
      name="name"
      rules={[{ required: true, message: 'Please input your Product Name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Description"
      name="des"
      rules={[{ required: true, message: 'Please input your Description!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Image"
      name="image"
      rules={[{ required: true, message: 'Please input your Image!' }]}
    >
      <Input onChange={handleImage} type='file' />
    </Form.Item>

  

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddProduct