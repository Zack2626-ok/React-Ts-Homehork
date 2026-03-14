import { Button, Form, Input, InputNumber } from "antd";

const AddPro = () => {
  const onFinish = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 450 }}>
        <Form.Item label="Tên sản phẩm" name={"namePro"}>
          <Input />
        </Form.Item>

        <Form.Item label="Giá" name={"price"}>
          <InputNumber />
        </Form.Item>

        <Form.Item label="Số lượng" name={"quantly"}>
          <InputNumber />
        </Form.Item>

        <Form.Item label="Mô tả" name={"desc"}>
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name={"desc"}>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPro;
