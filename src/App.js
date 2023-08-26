import React from "react";
import { Layout, Space } from "antd";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Detail } from "./pages/Detail/Detail";
const { Header, Footer, Content } = Layout;
const headerStyle = {
  color: "#aaa",
  height: "auto",
  backgroundColor: "#1c1e22",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "25px 0",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#aaa",
  backgroundColor: "#272b30",
  paddingBottom: "60px",
};
const footerStyle = {
  textAlign: "center",
  color: "#aaa",
  backgroundColor: "#1c1e22",
};
const layoutStyle = {
  minHeight: "100vh",
};

const App = () => {
  return (
    <BrowserRouter>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Link to={"/"} style={{ lineHeight: "normal" }}>
              <img
                src="https://www.freetogame.com/assets/images/freetogame-logo.png"
                alt="Logo"
              />
            </Link>
          </Header>
          <Content style={contentStyle}>
            <Routes>
              <Route index element={<Main />} />
              <Route path="/:id" element={<Detail />} />
            </Routes>
          </Content>
          <Footer style={footerStyle}>©AvitoTech Frontend 2023</Footer>
        </Layout>
      </Space>
    </BrowserRouter>
  );
};
export default App;
