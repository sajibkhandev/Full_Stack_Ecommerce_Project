import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const ChangePassword = () => {
      let params = useParams()
      const onFinish = async values  => {
      let data = await axios.post('http://localhost:3000/api/v1/authentication/changepassword', {
    
      email: "sajibkhan.cit.bd@gmail.com",
      password: "123244"

    }
      

    )
    // if (data.data == "Registration done") {
    //   toast.success("Check Your Email For Verification");


    // }else{
    //   toast.error("Try Againg")
    // }

    console.log(data);

  

   
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