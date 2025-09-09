import { Button, Form, Input, InputNumber, message, Select, Switch } from "antd"
import { createRoom } from "../../services/roomsService";
const { Option } = Select;
function CreateRoom() {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();




    const handleSubmit = async (values) => {
        const reponse = await createRoom(values);
        console.log(reponse);
        if (reponse) {
            form.resetFields();
            messageApi.open({
                type : 'success',
                content : 'Tạo phòng mới thành công',
                duration : 10 ,
            })
        }
        else{
               messageApi.open({
                type : 'error',
                content : 'Tạo mới ko  thành công'
            })

        }
    }
    const rules = [
        {
            required: true,
            message: 'Bắc buộc'
        }
    ]

    return (
        <>
        {contextHolder}
            <h2>Thêm phòng mới</h2>
            <Form layout="vertical" name="create-room" onFinish={handleSubmit} form={form}>
                <Form.Item
                    label="Tên phòng"
                    name="name"
                    rules={rules}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Số lượng giường"
                    name="quantityBed"
                    rules={rules}

                >
                    <InputNumber min={1} />

                </Form.Item>


                <Form.Item
                    label="Số người tối đa"
                    name="quantityPeople"
                    rules={rules}

                >
                    <InputNumber min={1} />
                </Form.Item>



                <Form.Item
                    label="Mô tả"
                    name="description"
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>


                <Form.Item label="Tiện ích" name="utils">
                    <Select style={{ width: "100%" }}>
                        <Option value="Wifi">Wifi</Option>
                        <Option value="Internet">Internet</Option>
                    </Select>
                </Form.Item>


                <Form.Item valuePropName="checked" label="Trạng thái" name="status">
                    <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
                </Form.Item>

                <Form.Item valuePropName="checked" label="Loại phòng" name="typeRoom">
                    <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
                </Form.Item>



                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Tạo mới

                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default CreateRoom;