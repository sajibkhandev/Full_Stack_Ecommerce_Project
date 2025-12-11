import React from 'react'
import { Button, Checkbox, Form, Input,Select } from 'antd';

const AddDiscount = () => {
  const onFinish = values => {
  console.log('Success:', values);
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
      label="Discount Name:"
      name="discountname"
      rules={[{ required: true, message: 'Please input your Discount Name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Discount Amount"
      name="discountpercentage"
      rules={[{ required: true, message: 'Please input your Discount Percentage!' }]}
    >
      <Input />
    </Form.Item>


    <label className='ml-16 ' htmlFor="">Discount type: 
      <Select
      defaultValue="fixed"
      style={{ width: 440 ,marginBottom:20}}
      // onChange={handleChange}
      options={[
        { value: 'Fixed', label: 'fixed' },
        { value: 'Percentage', label: 'percentage' },
        { value: 'Delivery Charge', label: 'deliverycharge' },
       
       
      ]}
    />
    </label>

    <Form.Item
      label="Discount Rang"
      name="discountrang"
      rules={[{ required: true, message: 'Please input your Discount Rang!' }]}
    >
      <Input />
    </Form.Item>

    

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddDiscount