import { Link } from "react-router-dom";
import { Form, Button, Input } from "antd";
export default function Register() {
  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical">
              <Form.Item
                label="Name"
                htmlFor="name"
                className="d-block"
                rules={[{ required: true, message: "Please enter name" }]}
              >
                <Input id="name" type="text" placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                htmlFor="email"
                className="d-block"
                rules={[{ required: true, message: "Please enter email" }]}
              >
                <Input id="email" type="email" placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Password"
                htmlFor="password"
                className="d-block"
                rules={[{ required: true, message: "Please enter password" }]}
              >
                <Input
                  id="password"
                  type="text"
                  placeholder="Enter your password"
                />
              </Form.Item>
              <Form.Item className="d-block" htmlType="submit">
                <Button type="primary" block className="button-primary">
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
