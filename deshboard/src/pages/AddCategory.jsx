import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector } from 'react-redux'
import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';

const AddCategory = () => {
  let userInfo = useSelector(state => state.activeuser.value)
  console.log(userInfo.id);

  const onFinish = async values => {

    let data = await axios.post('http://localhost:3000/api/v1/product/addcategory', {
      name: values.name,
      ownerId: userInfo.id

    }
    )
    if (data.data.success) {
     toast.success("Category has been created wait for admin approval");


    } else if (data.data.error) {
      toast.error("Category Already ableble");


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
        label="Category"
        name="name"
        rules={[{ required: true, message: 'Please input your Category!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
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

    </Form>
  )
}

export default AddCategory