import React, { useState } from 'react'
import axios from 'axios';
import { Button, Checkbox, Form, Input, Select } from 'antd';

const AddDiscount = () => {
  let [discounttype, setDiscounttype] = useState("")
  const onFinish = async values => {



    let data = await axios.post('http://localhost:8000/api/v1/product/adddiscount', {
      discountname: values.discountname,
      discountamount: values.discountpercentage,
      discounttype: discounttype,
      discountrang: values.discountrang

    }
    )
    console.log(data);
    
    // if (data.data.success) {
    //   toast.success("Category has been created wait for admin approval");


    // } else if (data.data.error) {
    //   toast.error("Category Already ableble");


    // }


  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  let handleChange = (e) => {
    setDiscounttype(e);


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
          style={{ width: 440, marginBottom: 20 }}
          onChange={handleChange}
          options={[
            { value: 'fixed', label: 'Fixed' },
            { value: 'percentage', label: 'Percentage' },
            { value: 'deliverycharge', label: 'Deliverycharge' },


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