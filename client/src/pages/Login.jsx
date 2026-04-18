import { Link } from "react-router-dom";
import "../App.css";
import { Form, Button, Input } from "antd";
export default function Login() {
  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Login to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical">
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
                  Login
                </Button>
              </Form.Item>
              <p>
                Not registered? Sign up <Link to="/register">Register</Link>
              </p>
            </Form>
          </section>
        </main>
      </header>
    </>
  );
}
