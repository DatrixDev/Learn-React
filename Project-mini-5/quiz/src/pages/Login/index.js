// import { Button, Form, Input } from "antd";
import {useNavigate } from "react-router-dom"
import { login } from "../../services/usersService";
import { setCookie  } from "../../helpers/cookie";
import { useDispatch } from "react-redux"
import { checkLogin } from "../../actions/login";

function Login() {
    // const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const response =await login(email,password);
        if(response.length > 0){
           setCookie("id",response[0].id,1);
           setCookie("fullName",response[0].fullName,1);
           setCookie("email",response[0].email,1);
           setCookie("token",response[0].token,1);
           dispatch(checkLogin(true));

            navigate("/");
        }
        else{
            alert("sai tài khoản mật khẩu")
        }
    };

    return (
        // <Form
        //     layout="vertical"
        //     name="login"
        //     form={form}
        //     onFinish={handleSubmit}
        // >
        //     <Form.Item
        //         name="email"
        //         rules={[
        //             { required: true, message: "Vui lòng nhập email!" },
        //             { type: "email", message: "Email không hợp lệ!" },
        //         ]}
        //     >
        //         <Input placeholder="Nhập email" />
        //     </Form.Item>

        //     <Form.Item 
        //         label="Mật khẩu"
        //         name="password"
        //         rules={[
        //             { required: true, message: "Vui lòng nhập mật khẩu!" },
        //             { min: 6, message: "Mật khẩu phải ít nhất 6 ký tự!" },
        //         ]}
        //     >
        //         <Input.Password placeholder="Nhập mật khẩu" />
        //     </Form.Item>

        //     <Form.Item>
        //         <Button type="primary" htmlType="submit" block>
        //             Login
        //         </Button>
        //     </Form.Item>
        // </Form>
        <>
            <form onSubmit={handleSubmit}>
                <h2>login</h2>
                <div>
                    <input type="email" placeholder="Nhập email"></input>
                </div>
                <div>
                    <input type="password" placeholder="Nhập mật khẩu"></input>
                </div>
                <button type="submit">
                    Login
                </button>
            </form>
        </>
    );
}

export default Login;
