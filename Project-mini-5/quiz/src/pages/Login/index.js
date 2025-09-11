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
