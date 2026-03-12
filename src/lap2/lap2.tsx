import { Table } from "antd";

const lap2 = () => {
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
    <div>
      <Table columns={column} dataSource={data} />
    </div>
  );
};

export default lap2;
