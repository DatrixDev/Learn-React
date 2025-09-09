import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LayoutDefault.scss"
import CartMini from "../../components/CartMini";
function LayoutDefalt() {
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                        <Link to="/">Logo</Link></div>
                    <div className="layout-default__cart">
                        <CartMini/>
                        </div>
                 
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    Copyright @ 2006 by DatrixDev
                </footer>
            </div>

        </>
    )
}
export default LayoutDefalt;