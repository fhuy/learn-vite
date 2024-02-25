/*
 * 题1
 * 请写出程序中console.log的输出内容
 */
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

const Test = () => {
  const [count, setCount] = useState(0);

  console.log("a");

  useEffect(() => {
    console.log("b");

    const i = setInterval(() => {
      // setCount(count + 1);
      console.log("interval-count", count);
      setCount((count) => count + 1);

      if (count < 3) {
        console.log("count", count);
      }
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  console.log("c");

  return <span>{`${count}`}</span>;
};

export default Test;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log("d");

// root.render(<Test />);
