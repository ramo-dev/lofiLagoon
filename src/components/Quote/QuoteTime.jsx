import {
  HomeFilled,
  MoonFilled,
  RollbackOutlined,
  SunFilled,
} from "@ant-design/icons";
import { Card, Flex, Typography } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Quote = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // cleanup function
  }, []);

  const isDaytime = () => {
    const hours = currentTime.getHours();
    return hours >= 6 && hours < 18; // Assuming daytime is from 6:00 to 18:00
  };

  return (
    <div className="quote" style={{ width: "270px" }}>
      <Link to="/" className="toHome">
        <button className="btn">
          <RollbackOutlined />
        </button>
      </Link>
      <Card className="QuoteCard">
        <Flex vertical justify="space-between" gap=".2rem" align="center">
          <Typography.Title
            level={2}
            style={{
              fontSize: "3.2rem",
              whiteSpace: "nowrap",
              color: "var(--color)",
            }}
          >
            {currentTime.toLocaleDateString()}
          </Typography.Title>
          {isDaytime() ? (
            <SunFilled style={{ fontSize: "9rem", whiteSpace: "nowrap" }} />
          ) : (
            <MoonFilled style={{ fontSize: "9rem", whiteSpace: "nowrap" }} />
          )}
          <Typography.Text
            style={{
              fontSize: "3.2rem",
              whiteSpace: "nowrap",
              color: "var(--color)",
            }}
          >
            {currentTime.toLocaleTimeString()}
          </Typography.Text>
          
        </Flex>
      </Card>
    </div>
  );
};

export default Quote;
