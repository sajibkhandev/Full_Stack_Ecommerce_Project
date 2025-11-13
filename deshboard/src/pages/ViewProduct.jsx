import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios'

const ViewProduct = () => {
      let [prduct,setProduct]=useState([])
    const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
     render: (_, record) => (
        <img className='w-[30px]' src={`http://localhost:8000${_}`} alt="" />
     
   
     
    ),
  },
  {
    title: 'Regular Price',
    dataIndex: 'regularprice',
    key: 'regularprice',
  },
  {
    title: 'Sell Price',
    key: 'sellprice',
    dataIndex: 'sellprice',
  
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];




 useEffect(() => {

        async function categoryData() {
            let data = await axios.get("http://localhost:8000/api/v1/product/viewproduct")
            let arr = []
            data.data.map(item => {
                arr.push(
                    {
                        key: item._id,
                        name: item.name,
                        image:item.image,
                        regularprice:item.regularprice,
                        sellprice:item.sellprice

                    }
                )

                
            })
            setProduct(arr)
        }

        categoryData()

    }, [])



  return (
   <Table columns={columns} dataSource={prduct} />
  )
}

export default ViewProduct