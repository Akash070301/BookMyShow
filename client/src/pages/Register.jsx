import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Input, message } from "antd";
import { registerUser } from "../api/user";
export default function Register() {
  const navigate = useNavigate();
  const handleFinish = async (values) => {
    try {
      const data = await registerUser(values);
      if (data.success) {
        message.success(data.message);
        navigate("/login");
      } else {
        message.error(data.message);
      }
    } catch (err) {
      message.error(err.message);
    }
  };
  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={handleFinish}>
              <Form.Item
                label="Name"
                name="name"
                className="d-block"
                rules={[{ required: true, message: "Please enter name" }]}
              >
                <Input id="name" type="text" placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Please enter email" }]}
              >
                <Input id="email" type="email" placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Please enter password" }]}
              >
                <Input
                  id="password"
                  type="text"
                  placeholder="Enter your password"
                />
              </Form.Item>
              <Form.Item className="d-block">
                <Button
                  type="primary"
                  block
                  className="button-primary"
                  htmlType="submit"
                >
                  Register
                </Button>
              </Form.Item>
              <p>
                Already registered ? <Link to="/login">Login here</Link>
              </p>
            </Form>
          </section>
        </main>
      </header>
    </>
  );
}
