import { Layout } from "antd";
import React from "react";
import Bikes from "./Bikes";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Cole's Bike Shop Inventory</h1>
        <Beers />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>Cole Cochran ©2023.</Footer>
  </Layout>
);
