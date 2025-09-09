import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteRoom } from "../../services/roomsService";

function DeleteRoom(props) {
    const { record,onReload } = props;

  
    const handleDelete = async () => {
        const response = await deleteRoom (record.id);
        if(response) {
            onReload();
            alert("Xóa thành công");
        }
        else{
            alert("Xóa ko thành công");
        }
    }

    return (
       <Popconfirm
      title="Sure to delete?"
      okText="Yes"
      cancelText="No"
      onConfirm={handleDelete} // gọi hàm xoá khi confirm
    >
    <Button
      danger
      size="small"
      icon={<DeleteOutlined />}
    />
    </Popconfirm>
    );
}

export default DeleteRoom;
