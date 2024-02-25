import { Form, Input, Row } from "antd";

// const layout = {
//   labelCol:{{span:3}},
//   wrapperCol:{{span:6}}
// }

function User() {
  return (
    <>
      <Form
        layout="horizontal"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
        // labelCol={{ span: 24 }}
        // wrapperCol={{ span: 16 }}
      >
        {/* <Row> */}
        <Form.Item
          name="input1"
          label="试单类型"
          labelCol={{ span: 12 }}
          // wrapperCol={{ span: 24 }}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          name="input2"
          label="试单类型2"
          labelCol={{ span: 16 }}
          // wrapperCol={{ span: 12 }}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          name="input3"
          label="试单类型3"
          labelCol={{ span: 16 }}
          // wrapperCol={{ span: 16 }}
        >
          <Input style={{ width: "200px" }} />
        </Form.Item>
        <Form.Item
          name="input4"
          label="试单类型4"
          labelCol={{ span: 16 }}
          // wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>
        {/* </Row> */}
        {/* <Row> */}
        <Form.Item
          name="input5"
          label="试单类型5"
          // labelCol={{ span: 12 }}
          // wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="input6"
          label="试单类型6"
          // labelCol={{ span: 12 }}
          // wrapperCol={{ span: 16 }}
        >
          <Input />
        </Form.Item>
        {/* </Row> */}
      </Form>
    </>
  );
}

export default User;
