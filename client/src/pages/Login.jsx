import { Link, useNavigate} from "react-router-dom";
import "../App.css";
import { Form, Button, Input, message} from "antd";
import { userLogin } from "../api/user";
export default function Login() {
  const navigate = useNavigate();
  const handleFinish = async(values)=>{
    try{
      const data = await userLogin(values);
      if(data.success){
        message.success(data.message);
        navigate("/");
      }
      else{
        message.error(data.message);
      }
    }
    catch(err){
      message.err(err.message)
    }
  }
  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Login to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={handleFinish}>
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
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Item>
              <Form.Item className="d-block">
                <Button type="primary" block className="button-primary" htmlType="submit">
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
