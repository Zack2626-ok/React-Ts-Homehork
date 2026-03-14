import { Button, Form, Input, InputNumber } from "antd";

const Register = () => {
  const onFinish = (values: string) => {
    console.log("Form data:", values);
  };
  return (
    <div>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
        <Form.Item label="name" name={"name"}>
          <Input />
        </Form.Item>
        <Form.Item
          label="email"
          name={"email"}
          rules={[
            { required: true, message: "vui long nhap email" },
            { type: "email", message: "email ko hop le" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="number" name={"number"}>
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="password"
          name={"password"}
          rules={[{ min: 6, message: "toi thieu 6 ki tu" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="confirmPassword"
          name={"confirmPassword"}
          rules={[
            { min: 6, message: "toi thieu 6 ki tu" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || value === getFieldValue("password")) {
                  return Promise.resolve();
                }
                return Promise.reject("Mật khẩu không khớp");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng kí
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
