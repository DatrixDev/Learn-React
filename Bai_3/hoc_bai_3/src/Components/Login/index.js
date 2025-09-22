function Login() {
    const isLogin = true;
    return (
        <>
            {isLogin ? (
                <>
                    <div>
                        Thông tin người dùng, nút Logout
                    </div>
                </>
            ) : (
                <>
                    <div>Nút đăng nhập, nút đăng kí </div>
                </>
            )}

{/* 
            {isLogin ? (
                <>
                    <div>Avata</div>

                </>
            ) : (
                <>
                </>
            )} */}

            {isLogin &&  <div>Avata</div>}

        </>
    )
}
export default Login;