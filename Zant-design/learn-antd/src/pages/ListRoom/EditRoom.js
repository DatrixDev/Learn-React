import { Button, Form, Input, InputNumber, Modal, Select, Spin, Switch, notification } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { updateRoom } from "../../services/roomsService"; // chỉnh lại path cho đúng

const { Option } = Select;

function EditRoom(props) {
    const [showModal, setShowModal] = useState(false);
    const [form] = Form.useForm();
    const [notiApi, contextHolder] = notification.useNotification();
    const { record, onReload } = props;
    const [spinning, setSpinning] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
        form.resetFields();
    };

    const handleSubmit = async (values) => {
        setSpinning(true);
        const response = await updateRoom(record.id, values);
        setTimeout(() => {
            if (response) {
                setShowModal(false);
                notiApi.success({
                    message: "Cập nhật thành công",
                    description: `Bạn đã cập nhật thành công phòng ${record.name}`
                });
                setShowModal(false);
                onReload();
            } else {
                notiApi.error({
                    message: "Cập nhật thất bại",
                    description: `Bạn đã cập nhật thất bại ${record.name}`
                });
            }

        }, 3000)
        setSpinning(false);

    };

    const rules = [
        {
            required: true,
            message: "Bắt buộc",
        },
    ];

    return (
        <>
            {contextHolder}

            <Button
                size="small"
                type="primary"
                icon={<EditOutlined />}
                onClick={handleShowModal}
                title="Chỉnh sửa phòng"
            />

            <Modal
                title="Chỉnh sửa phòng"
                open={showModal}
                onCancel={handleCancel}
                footer={null}

            >
                <Spin spinning={spinning} tip="Đang cập nhật">
                    <Form
                        layout="vertical"
                        name="edit-room"
                        onFinish={handleSubmit}
                        form={form}
                        initialValues={record}
                    >
                        <Form.Item label="Tên phòng" name="name" rules={rules}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Số lượng giường" name="quantityBed" rules={rules}>
                            <InputNumber min={1} style={{ width: "100%" }} />
                        </Form.Item>

                        <Form.Item label="Số người tối đa" name="quantityPeople" rules={rules}>
                            <InputNumber min={1} style={{ width: "100%" }} />
                        </Form.Item>

                        <Form.Item label="Mô tả" name="description">
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

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>


            </Modal>
        </>
    );
}

export default EditRoom;
