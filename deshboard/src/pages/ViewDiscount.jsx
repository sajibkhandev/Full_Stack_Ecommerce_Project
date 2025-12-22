import React, { useEffect, useState } from 'react'
import { Flex, Space, Table, Tag } from 'antd';
import axios from 'axios'


const ViewDiscount = () => {
  let [discount,setDiscount]=useState([])

  useEffect(()=>{
  async function discount(){
    let data = await axios.get("http://localhost:8000/api/v1/product/viewdiscount")
    let arr=[]
    data.data.map(item=>{
      arr.push( {
    discountname: item.discountname,
    discountamount: item.discountamount,
    discounttype: item.discounttype,
    discountrang: item.discountrang,
  })
  setDiscount(arr)

    })
    
   }
   discount()

  },[])
  const columns = [
  {
    title: 'Discount Name',
    dataIndex: 'discountname',
    key: 'discountname',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Discount Amount',
    dataIndex: 'discountamount',
    key: 'discountamount',
  },
  {
    title: 'Dicount Type',
    dataIndex: 'discounttype',
    key: 'discounttype',
  },
  {
    title: 'Dicount Rang',
    dataIndex: 'discountrang',
    key: 'discountrang',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
      
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

  return (
    <Table columns={columns} dataSource={discount} />
  )
}

export default ViewDiscount