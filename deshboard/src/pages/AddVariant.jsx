import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import axios from 'axios'


const AddVariant = () => {
  let [image, setImage] = useState({})
  let [product, setProduct] = useState([])
  let [producid, setProductId] = useState('')


  const onFinish = async values => {
    console.log(values.image, "image");


    let data = await axios.post('http://localhost:3000/api/v1/product/addvariant', {
      name: values.name,
      avatar: image,
      regularprice: values.regularprice,
      sellprice: values.sellprice,
      productid:producid

    }
      ,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    )




  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  let handleImage = (e) => {
    setImage(e.target.files[0]);
  }

  let onChange = (e) => {

    setProductId(e);
    

  }

  useEffect(() => {
    async function product() {
      let data = await axios.get("http://localhost:3000/api/v1/product/viewproduct")

      let arr = []


      data.data.map(item => {
        arr.push(
          {
            value: item._id,
            label: item.name
          }
        )

      })
      setProduct(arr)


    }
    product()

  })






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
        label="Variant Name"
        name="name"
        rules={[{ required: true, message: 'Please input your Variant Name!' }]}
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


      <p className='ml-28 mb-10 inline-block'>Product Name : </p>
      <Select
        showSearch
        placeholder="Select a Product"
        optionFilterProp="label"
        onChange={onChange}
        options={product}
      />





      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddVariant