import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useSelector } from 'react-redux'
import axios from 'axios';

const AddCategory = () => {
  let userInfo = useSelector(state => state.activeuser.value)
  console.log(userInfo.id);

  const onFinish = async values => {

    let data = await axios.post('http://localhost:3000/api/v1/product/addcategory', {
      name: values.name,
      ownerId: userInfo.id

    }
    )
    console.log(data);

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
    </Form>
  )
}

export default AddCategory