import React from "react";
import ReduxCounter from "../src/components/ReduxCounter";
import { Button, DatePicker, Input } from "antd";

const HomePage: React.FC = () => {
  return (
    <div>
      <Button type="primary">Кнопка</Button>
      <Button>Кнопка</Button>
      <Input placeholder="Супер" />
      <DatePicker />
      <ReduxCounter />
    </div>
  );
};

export default HomePage;
