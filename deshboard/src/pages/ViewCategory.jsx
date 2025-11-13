import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios'

const ViewCategory = () => {
    let [category,setCategory]=useState([])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
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
            let data = await axios.get("http://localhost:8000/api/v1/product/viewcategory")
            let arr = []
            data.data.map(item => {
                arr.push(
                    {
                        key: item._id,
                        name: item.name,
                    }
                )

                
            })
            setCategory(arr)
        }

        categoryData()

    }, [])






    return (
        <>
            <div className='mr-10'>
                <h1 className='text-center text-4xl font-bold pb-4'>All Categories</h1>
                <Table columns={columns} dataSource={category} />
            </div>
        </>
    )
}

export default ViewCategory