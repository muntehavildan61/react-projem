import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from "antd";
import { Link } from 'react-router-dom';


function Bar() {
  return(    
  <Layout.Header style={{position: 'fixed',zIndex: 1,width: '100%',}}>
  <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key={1}><Link to='/'>Ana Sayfa</Link></Menu.Item>
      <Menu.Item key={2}><Link to='/customerList'>Müşteriler</Link></Menu.Item>
      <Menu.Item key={3}><Link to='/add'>Ekle</Link></Menu.Item>


    </Menu>
</Layout.Header>)
}

export default Bar