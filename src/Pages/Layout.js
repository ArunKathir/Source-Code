import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import profilavatar from "../assets/images/Face-Arun.jpg";
import { Avatar, Badge, Space } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Footercopy from '../components/layout/Footer';
import { Outlet, Link, NavLink } from "react-router-dom";
import { AiFillAlert,AiTwotoneBell } from "react-icons/ai";
// import { BackTop } from 'antd';
import React from 'react';

const { Header, Content, Sider } = Layout;
const items1 = [
    {
          
        icon:React.createElement(AiTwotoneBell, { style: { fontSize: '24px', color:'orange', margin:'10 0 0 0' } }),
  
      }
    ,{
      key: 'MY HRMS',
      label: 'Admin',
      className:"my-hrms-style flex justify-start text-white"
    },
    {
      key: 'TP',
      label: 'TP',
      className: 'tp-menu-item bg-blue-200 text-black',
    },
    {
        icon: React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
          React.createElement(UserOutlined, { style: { fontSize: '24px', marginRight: '5px' } }),
          React.createElement("span", { style: { fontSize: '12px' } }, 5)
        )
    },{
        icon: React.createElement(LaptopOutlined),
    }
      ,
  ].map((item) => {
    if (item.className) {
      return { ...item, label: <div className={item.className}>{item.label}</div> };
    }
    return item;
  });
const items2 = [
    {
      key: 'sub1',
      icon: React.createElement(UserOutlined),
      label: <NavLink to='/'>Profile</NavLink>,
      children: [
        {
          key: 1,
          label: <NavLink to='/statics'>Statics</NavLink>,
        },
        {
          key: 2,
          label: <NavLink to='/tablecont'>Contact</NavLink>,
        },
      ],
    },
    {
      key: 'sub2',
      icon: React.createElement(LaptopOutlined),
      label: <NavLink to='/about'>MeatingSchudel</NavLink>,
      children: [
        {
          key: 3,
          label: 'option3',
        },
        {
          key: 4,
          label: 'option4',
        },
      ],
    },
    {
      key: 'sub3',
      icon: React.createElement(NotificationOutlined),
      label: <NavLink to='/sucess'>Sucess</NavLink>,
      children: [
        {
          key: 5,
          label: 'option5',
        },
        {
          key: 6,
          label: 'option6',
        },
      ],
    },
  ];    
//   const Avatarwithvalue = () => (
//     <Space size="middle">
//       <Badge size="default" count={5}>
//       <Avatar shape="square" size="large" src="" />

//       </Badge>
//     </Space>
//   );
const MyComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    
    <Layout>
      <Header className="header z-10 w-full sticky top-0">
        <div className='flex justify-end w-full'>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1}  className='flex justify-start '/>
        </div>
      </Header>
      <Content
        style={{
          padding: '0 15px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <div className='flex justify-center align-middle'>
          {/* <Breadcrumb.Item><Avatarwithvalue></Avatarwithvalue></Breadcrumb.Item> */}
            <div className='flex justify-center align-middle my-2'>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </div>
          </div>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            //   position: "sticky",
            //   top: 0
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>

          <Content
            style={{
              padding: '0 24px',
              minHeight: '100vh',
            }}
          >
            <Outlet></Outlet>
            {/* <BackTop style={{ right: 50, bottom: 50 }} /> */}
          </Content>
        </Layout>
      </Content>
      <Footercopy></Footercopy>
      {/* <Outlet></Outlet> */}
      <a href="#" onclick="() => { window.scrollTo({top: 0, behavior: 'smooth'}); return false; }" className='fixed bottom-5 right-5 z-10 bg-red-200 p-1'>Back to top</a>

    </Layout>
  );
};
export default MyComponent;