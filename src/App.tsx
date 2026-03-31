// import { Button, Input, Layout, Form, Modal } from "antd";
// import { Content, Footer, Header } from "antd/es/layout/layout";
// import { useState } from "react";

import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Lap2 from "./lap2/lap2";
import LoginForm from "./lap3/Login";
import Register from "./lap3/Register";
import AddPro from "./lap3/AddPro";
import StoryForm from "./lap4/lap4";
import StoryList from "./lap5/lap5";
import Header from "./layout/Header";
function App() {
  // const onFinish = (value: number | string) => {
  //   console.log("hello");
  //   console.log(value);
  // };
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lap2" element={<Lap2 />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddPro />} />
        <Route path="/lap4" element={<StoryForm />} />
        <Route path="/lap5" element={<StoryList />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
