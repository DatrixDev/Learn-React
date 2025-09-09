import { Badge, Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

function RoomTable(props) {
    const { rooms, onReload } = props;
    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Số giường',
            dataIndex: 'quantityBed',
            key: 'quantityBed'
        },
        {
            title: 'Số người',
            dataIndex: 'quantityPeople',
            key: 'quantityPeople'
        },
        {
            title: 'Loại phòng',
            dataIndex: 'typeRoom',
            key: 'typeRoom',
            render: (_, record) => {
                return <>
                    {record.typeRoom ? (<>
                        <Tooltip title="Phòng siêu vip">
                            <Tag color="purple">VIP</Tag>
                        </Tooltip>
                    </>) : (<Badge color="green" text="THƯỜNG "></Badge>)}
                </>

            }
        },

        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                return <>
                    {record.status ? (<Badge color="green" text="Còn Phòng "></Badge>) : (<Badge color="red" text="Hết phòng"></Badge>)}
                </>

            }
        },

        {
            title: "Hành động",
            key: "actions",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "8px" }}>
                    <DeleteRoom record={record} onReload={onReload} />
                    <EditRoom record={record} onReload={onReload} />
                </div>
            ),
        }

    ]
    return (
        <>
            <Table dataSource={rooms} columns={columns} rowKey="id"></Table>
        </>
    )
}
export default RoomTable;