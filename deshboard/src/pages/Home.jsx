import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Col, Row } from 'antd';
import {  Outlet, useNavigate } from 'react-router-dom'




const items = [
  {
    key: 'sub1',
    label: 'Admin',
    icon: <MailOutlined />,
    children: [
      {
        key: '/home/merchant',
        label: 'Merchant',
      },
      {
        key: '/home/user',
        label: 'User',

      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: '',
    label: 'Product',
    icon: <AppstoreOutlined />,
    children: [

      {
        key: '/home/addproduct',
        label: 'Add Product',

      },
      {
        key: '/home/viewproduct',
        label: 'View Product',

      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub3',
    label: 'Category',
    icon: <AppstoreOutlined />,
    children: [

      {
        key: '/home/addcategory',
        label: 'Add Category',

      },
      {
        key: '/home/viewcategory',
        label: 'View Category',

      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'SubCategory',
    icon: <AppstoreOutlined />,
    children: [

      {
        key: '/home/addsubcategory',
        label: 'Add Subcategory',

      },
      {
        key: '/home/viewsubcategory',
        label: 'View Subcategory',

      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub5',
    label: 'Discount',
    icon: <AppstoreOutlined />,
    children: [

      {
        key: '/home/adddiscount',
        label: 'Add Discount',

      },
      {
        key: '/home/viewdiscount',
        label: 'View Discount',

      },
    ],
  },
  {
    type: 'divider',
  },

];

const Home = () => {

  let navigate=useNavigate()
  


  const onClick = e => {
    console.log( e.key);
    navigate(e.key)
  }
  return (
    <>

      <Row>
        <Col span={4}>
          <h2 className='ml-6 my-4 text-2xl font-semibold'>Dashboard</h2>
          <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          /></Col>
        <Col className='my-5' span={20}>
           <Outlet />
        </Col>
      </Row>





    </>
  )
}

export default Home