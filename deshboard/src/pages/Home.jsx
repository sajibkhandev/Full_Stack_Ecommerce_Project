import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Col, Row } from 'antd';




const items = [
  {
    key: 'sub1',
    label: 'Admin',
    icon: <MailOutlined />,
    children: [
      {
        key: '/deshboard/merchant',
        label: 'Merchant',
      },
      {
        key: '/deshboard/user',
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
        key: '/deshboard/addproduct',
        label: 'Add Product',

      },
      {
        key: '/deshboard/viewproduct',
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
        key: '/deshboard/addcategory',
        label: 'Add Category',

      },
      {
        key: '/deshboard/viewcategory',
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
        key: '/deshboard/addsubcategory',
        label: 'Add Subcategory',

      },
      {
        key: '/deshboard/viewsubcategory',
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
        key: '/deshboard/adddiscount',
        label: 'Add Discount',

      },
      {
        key: '/deshboard/viewdiscount',
        label: 'View Discount',

      },
    ],
  },
  {
    type: 'divider',
  },

];

const Home = () => {


  const onClick = e => {
    console.log( e.key);
  }
  return (
    <>

      <Row>
        <Col span={8}>
          <h2 className='ml-6 my-4 text-2xl font-semibold'>Dashboard</h2>
          <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          /></Col>
        <Col span={16}>
           category
        </Col>
      </Row>





    </>
  )
}

export default Home