import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const ChangePassword = () => {
      let navigate=useNavigate()
      let params = useParams()
      const onFinish = async values  => {
      let data = await axios.post('http://localhost:8000/api/v1/authentication/changepassword', {
    
      email: params.email,
      password: values.password

    }
      

    )
    if (data.data.success=="Password Chnaged") {
      navigate('/login')

    }else{
      toast.error("Try Againg")
    }

  

  

   
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
              label="New Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Change
              </Button>
            </Form.Item>
          </Form>
    </div>
  )
}

export default ChangePassword