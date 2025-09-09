import { Menu } from "antd"
import { PlayCircleOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
function MenuSider() {
    const items = [
        {
            label: "Menu 1",
            icon: <PlayCircleOutlined />,
            key: "menu-1",
            children: [
                {
                    label: <Link to="/"> Dashboard</Link>,
                    key: "/",
                }, 
                {
                    label: "Menu 1 - 2",
                    key: "menu-1-2",
                },
                {
                    label: "Menu 1 - 3",
                    key: "menu-1-3",
                }
            ]
        },
        {
            label: "Menu 2",
            key: "menu-2",
            children: [
                {
                    label: "Menu 2 - 1",
                    key: "menu-2-1",
                },
                {
                    label: "Menu 2 - 2",
                    key: "menu-2-2",
                },
                {
                    label: "Menu 2 - 3",
                    key: "menu-2-3",
                }
            ]
        },
        {
            label: "Menu 3",
            key: "menu-3"

        },
        {
            label:<Link to="/book-room"> Book Room</Link>,
            key: "/book-room"

        },
         {
            label:<Link to="/create-room"> create Room</Link>,
            key: "/create-room"

        },
         {
            label:<Link to="/list-room"> list Room</Link>,
            key: "/list-room"

        }
    ];
    return (
        <>
            <Menu
                mode="inline"
                items={items}
                defaultSelectedKeys={["/"]}
                defaultOpenKeys={["menu-1"]}

            />
        </>
    )
}
export default MenuSider;