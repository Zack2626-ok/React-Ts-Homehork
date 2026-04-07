import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, Select } from "antd";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const nav = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["stories", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data]);
  const { mutate } = useMutation({
    mutationKey: ["stories"],
    mutationFn: async (data) => {
      await axios.put(`http://localhost:3000/stories/${id}`, data);
    },
    onSuccess: () => {
      toast.success("them thanh cong");
      nav("/list");
    },
    onError: () => {
      toast.error("them that bai");
    },
  });

  const dataCategory = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/category`);
      return res.data;
    },
  });

  const onSubmit = (value: any) => {
    mutate(value);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <Form
        form={form}
        layout="vertical"
        className="space-y-6"
        onFinish={onSubmit}
      >
        {/* Text input */}
        <Form.Item label="Tên sách" name="title">
          <Input placeholder="Nhập tên sách" />
        </Form.Item>
        <Form.Item label="Thời gian" name="duration">
          <InputNumber placeholder="VD: 10" />
        </Form.Item>
        <Form.Item label="ảnh" name="thumbnail">
          <Input placeholder="Nhập ảnh" />
        </Form.Item>

        {/* Select */}
        <Form.Item label="Danh mục" name="category">
          <Select
            placeholder="Chọn danh mục"
            options={Array.isArray(dataCategory.data) ? dataCategory.data : []}
          />
        </Form.Item>

        {/* Submit button */}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditPage;
