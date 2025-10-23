import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import slugify from 'slugify'

const AddProduct = () => {
  let [image,setImage]=useState({})
  let [slug,setSlug]=useState('')

    const onFinish =async values => {
      console.log(values.image,"image");
      
       
   let data = await axios.post('http://localhost:3000/api/v1/product/addproduct', {
      name: values.name,
      des:values.des,
      avatar:image,
      regularprice:values.regularprice,
      sellprice:values.sellprice,
      slug:slug

    }
    ,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }
    )
    
    
   

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
      <Input onChange={(e)=>setSlug(e.target.value)}/>
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


      <Form.Item
      label="Regular Price"
      name="regularprice"
      rules={[{ required: true, message: 'Please input your Regular Price' }]}
    >
      <Input />
    </Form.Item>

      <Form.Item
      label="Sell Price"
      name="sellprice"
      rules={[{ required: true, message: 'Please input your Sell Price' }]}
    >
      <Input />
    </Form.Item>


      <span className='ml-32 mr-10 mb-10'>Slug :</span><input defaultValue={slugify(slug)} disabled type="text" className='w-[66%] border border-[#c2c0c0] py-1 px-3 rounded-md mb-10'/>
  

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddProduct