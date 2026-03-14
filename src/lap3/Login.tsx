import { Button, Form, Input } from "antd";

const LoginForm = () => {
  const onFinish = (values: string) => {
    console.log("Form data:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "vui long nhap email" },
          { type: "email", message: "email ko hop le" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "vui long nhap mat khau" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
