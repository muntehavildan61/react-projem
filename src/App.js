import React from "react";
import { Layout } from "antd";
import 'antd/dist/antd.css'
import Header from "./Header";
import Content from "./Content";
import Bar from "./Bar";

function App() {
  return (
  <>
    <Layout style={{ height:'max-content' }}>
        <Layout className="site-layout">
          <Header/>
          <Content/>
          <Bar/>
        </Layout>
    </Layout>
  </>
  );
}

export default App;
