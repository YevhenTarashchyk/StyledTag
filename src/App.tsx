import React from "react";
import CustomTag from "./components/CustomTag";
import "antd/dist/antd.css";

export default function App() {
  return (
    <CustomTag variant="Bordered" color="red">
      Styled Tag
    </CustomTag>
  );
}
