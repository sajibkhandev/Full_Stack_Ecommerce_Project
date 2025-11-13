import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const Otp = () => {
  let navigate = useNavigate()
  let params = useParams()
  console.log(params.otpcode);
  console.log(params.email);

  useEffect(() => {
    async function otpDatasend() {
      let data = await axios.post('http://localhost:8000/api/v1/authentication/otp', {
        otp: params.otpcode,
        email: params.email
      }

      )
      //   console.log(data.data.success);
      if (data.data.success == 'otp matched') {
        navigate("/login")
      }
      else {
        console.log("Otp page a problme");

      }

    }

    otpDatasend()


  }, [])



  const onFinish = async values => {
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <h1>Please Wait for Verifing......</h1>

  )
}

export default Otp