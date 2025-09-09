import { Badge, Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notify.css";

function Notify() {
  const items = [
    {
      label: (
        <div className="notify__item">
          <div className="notify__item-icon">
            <BellOutlined />
          </div>
          <div className="notify__item-content">
            <div className="notify__item-title">Item 1</div>
            <div className="notify__item-time">8 phút trước</div>
          </div>
        </div>
      ),
      key: "custom-0", // thêm key để tránh warning
    },
    { label: "Item 1", key: "0" },
    { label: "Item 2", key: "1" },
    { label: "Item 3", key: "2" },
    { label: "Item 4", key: "3" },
    { label: "Item 5", key: "4" },
    { label: "Item 6", key: "5" },
    { label: "Item 7", key: "6" },
    { label: "Item 8", key: "7" },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      popupRender={(menu) => (
        <div className="notify__dropdown">
          {/* Header */}
          <div className="notify__header">
            <div className="notify__header-title">
              <BellOutlined /> Notification
            </div>
            <Button type="link" size="small">
              View All
            </Button>
          </div>

          {/* Body */}
          <div className="notify__body">{menu}</div>
        </div>
      )}
    >
      <Badge dot={true}>
        <Button type="text" icon={<BellOutlined />} />
      </Badge>
    </Dropdown>
  );
}

export default Notify;
