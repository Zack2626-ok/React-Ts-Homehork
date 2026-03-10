import { Button, Form, Input, Layout, Table } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Modal from "antd/es/modal/Modal";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const onSubmit = (value: string) => {
    console.log(value);
  };

  const colum = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  const data = [
    { key: 1, name: "toan", email: "toan123@gmail.com", role: "user" },
    { key: 2, name: "duy", email: "duy1123@gmail.com", role: "admin" },
    { key: 3, name: "truong", email: "truong123123@gmail.com", role: "user" },
  ];

  const onSubmitUser = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <Layout>
        <Header style={{ color: "white" }}>Header</Header>
        <Sider style={{ color: "white" }}>Sider</Sider>
        <Content>Content</Content>
      </Layout>

      <Form onFinish={onSubmit}>
        <Form.Item name="name">
          <Input placeholder="nhap ten nguoi dung" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Nhập email" }]}
        >
          <Input type={"email"} placeholder="nhap email" />
        </Form.Item>
        <Form.Item name="Password">
          <Input type={"password"} placeholder="nhap mat khau" />
        </Form.Item>

        <Form.Item>
          <Button type={"primary"} htmlType="submit">
            xac nhan
          </Button>
        </Form.Item>
      </Form>

      {/* bai 3 */}
      <Table columns={colum} dataSource={data} />

      {/* bai 4 */}

      <Button onClick={() => setOpen(true)}>Mo nhap User</Button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        <Form onFinish={onSubmitUser}>
          <Form.Item name="name">
            <Input placeholder="nhap ten nguoi dung" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Nhập email" }]}
          >
            <Input type={"email"} placeholder="nhap email" />
          </Form.Item>
          <Form.Item name={"role"}>
            <Input type={"radio"} name="role" value={"user"} />
            <span>User</span>
            <Input type={"radio"} name="role" value={"admin"} />
            <span>Admin</span>
          </Form.Item>

          <Form.Item>
            <Button type={"primary"} htmlType="submit">
              xac nhan
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Dashboard;
