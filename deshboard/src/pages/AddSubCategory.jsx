import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import axios from 'axios'
import { useSelector } from 'react-redux';
 import { ToastContainer, toast } from 'react-toastify';

const AddSubCategory = () => {
  let [category, setCategory] = useState([])
  let [categoryId, setCategoryId] = useState('')
   let userInfo = useSelector(state => state.activeuser.value)
  const onFinish = async values => {

    let data = await axios.post('http://localhost:3000/api/v1/product/addsubcategory', {
      name: values.name,
      ownerId: userInfo.id,
      categoryId:categoryId


    }
    )
    if (data.data.success) {
         toast.success("Sub Category has been created wait for admin approval");
    
    
        } else if (data.data.error) {
          toast.error("Sub Category Already ableble");
    
    
        }

  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  const onChange = value => {
    console.log(`selected ${value}`);
    setCategoryId(value)
  };
  const onSearch = value => {
    console.log('search:', value);
  };



  useEffect(() => {
    async function myData() {
      let data = await axios.get("http://localhost:3000/api/v1/product/viewcategory")
      let arr = []
      data.data.map(item => {
        arr.push(
          {
            value: item._id,
            label: item.name,
          },
        )

        setCategory(arr)



      })


    }
    myData()

  }, [])











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
        label="Sub Category"
        name="name"
        rules={[{ required: true, message: 'Please input your Category!' }]}
      >
        <Input />
      </Form.Item>
      <label className='ml-24' htmlFor='category'> Category
        <Select
          className='pl-5'
          showSearch
          id="category"
          placeholder="Select a person"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={category}
        />
      </label>

      <Form.Item label={null}>
        <Button type="primary" className='mt-10' htmlType="submit">
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

export default AddSubCategory