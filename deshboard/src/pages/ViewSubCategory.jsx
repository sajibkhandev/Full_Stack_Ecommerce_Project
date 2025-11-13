import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios'

const ViewSubCategory = () => {
    let [subcategory,setSubCategory]=useState([])


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

        async function subcategoryData() {
            let data = await axios.get("http://localhost:8000/api/v1/product/viewsubcategory")
            let arr = []
            data.data.map(item => {
                arr.push(
                    {
                        key: item._id,
                        name: item.name,
                    }
                )

                
            })
            setSubCategory(arr)
        }

        subcategoryData()

    }, [])






    return (
        <>
            <div className='mr-10'>
                <h1 className='text-center text-4xl font-bold pb-4'>All Sub Categories</h1>
                <Table columns={columns} dataSource={subcategory} />
            </div>
        </>
    )
}

export default ViewSubCategory