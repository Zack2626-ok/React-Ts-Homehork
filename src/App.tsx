import { Button, Input, Layout, Form, Modal, Table } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";

import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
function App() {
  const onFinish = (value: number | string) => {
    console.log("hello");
    console.log(value);
  };
  const [open, setOpen] = useState(false);

  const column = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
    },
  ];

  const data = [
    {
      key: 1,
      id: 1,
      name: "van huy",
      age: 20,
      major: "IT",
    },
    {
      key: 2,
      id: 2,
      name: "Linh",
      age: 21,
      major: "Business",
    },
    {
      key: 3,
      id: 3,
      name: "Hà",
      age: 24,
      major: "Design",
    },
  ];
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

        <Button type="primary">Click me</Button>
        <Button type="default">Click me</Button>
        <Button type="dashed">Click me</Button>
        <Button type="link">Click me</Button>
        <Button type="text">Click me</Button>
        <Layout style={{ marginTop: 30 }}>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>Content</Content>
          <Footer style={{ color: "white", background: "blue" }}>Footer</Footer>
        </Layout>

        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Nhập name" }]}
          >
            <Input placeholder="username" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal
          open={open}
          onCancel={() => setOpen(false)}
          onOk={() => setOpen(false)}
        >
          Nội dung modal
        </Modal>
      </div>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Toaster />

      <h2 className="text-4xl font-bold mb-4">lap 2</h2>

      <Table columns={column} dataSource={data} />
    </>
  );
}

export default App;
