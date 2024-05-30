import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "./Logo";
import "../styles/Sidebar.css";
import MenuList from "./MenuList";
import ToggleTheme from "./ToggleTheme";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Billing from "../pages/Billing";
import Home from "../pages/Home";
import Serverless from "../pages/Serverless";
import Storage from "../pages/Storage";
import Usage from "../pages/Usage";
import Mysettings from "../pages/Mysettings";


const { Sider, Content } = Layout;

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (path) => {
    navigate(path);
  };

 

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
      >
        <Logo darkTheme={darkTheme} />
        <MenuList
          darkTheme={darkTheme ? "dark" : "light"}
          onMenuClick={handleMenuClick}
        />
        <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Content style={{ padding: "0 24px", minHeight: "100vh" ,background: ""}}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/serverless" element={<Serverless />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/mysettings" element={<Mysettings />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
