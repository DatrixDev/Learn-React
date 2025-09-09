import { Button, Checkbox, Col, Input, Radio, Row, Select, Space } from "antd"
import { DatePicker } from "antd";
import { useState } from "react";
import { bookRoom } from "../../services/bookRoomService";
const { RangePicker } = DatePicker;
function BookRoom() {
    const [data, setData] = useState({
        time: "14 giờ"
    });
    const optionsTime = [

    ];
    for (let i = 7; i <= 24; i++) {
        optionsTime.push({
            value: i > 9 ? `${i} giờ` : `0${i} giờ`,
            lable: i > 9 ? `${i} giờ` : `0${i} giờ`
        })

    }

    const handleChangeInput = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        };
        setData(object);
    }


    const handleChangeCheckbox = (e) => {
        const object = {
            ...data,
            service: e
        };
        setData(object);
    }
    const handleChangeDate = (dates, dateStrings) => {
        const object = {
            ...data,
            date: dateStrings
        };
        setData(object);

    }
    const handleChangeSelect = (e) => {
        const object = {
            ...data,
            time: e
        };
        setData(object);

    }

    const handleSubmit = async () => {
        const response = await bookRoom(data);
        if (response) {
            alert("Đặt phòng thành công");
        }
        else {
            alert("Chưa đặt được phòng");
        }

    }

    return (
        <>
            <h2>Đặt phòng</h2>
            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <p>Họ tên</p>
                    <Input name='fullName' placeholder="Ví dụ: Le Van" onChange={handleChangeInput} /></Col>

                <Col span={12}>
                    <p>Số điện thoại</p>
                    <Input name='phone' placeholder="Ví dụ: 0123456789" onChange={handleChangeInput} /></Col>


                <Col span={12}>
                    <p>Email</p>
                    <Input name='email' placeholder="Ví dụ: LevamA@gmail.com" onChange={handleChangeInput} /></Col>

                <Col span={12}>
                    <p>Dịch vụ thêm</p>
                    <Checkbox.Group onChange={handleChangeCheckbox}>
                        <Space direction="vertical">
                            <Checkbox value="Thuê xe máy">A</Checkbox>
                            <Checkbox value="Thuê ô tô">A</Checkbox>
                            <Checkbox value="Thuê giường">A</Checkbox>
                            <Checkbox value="Thuê xe đạp">A</Checkbox>

                        </Space>
                    </Checkbox.Group>
                </Col>


                <Col span={12}>
                    <p>Quà tặng</p>
                    <Radio.Group name="gift" onChange={handleChangeInput}>
                        <Space direction="vertical">
                            <Radio value="Xe máy">A</Radio>
                            <Radio value="Ô tô">A</Radio>
                            <Radio value="Giường">A</Radio>
                            <Radio value="Xe đạp">A</Radio>

                        </Space>
                    </Radio.Group>
                </Col>


                <Col span={12}>

                    <p>Chọn ngày</p>
                    <RangePicker placehoder={["Ngày nhận", "Ngày trả"]} format="DD-MM-YYYY" onChange={handleChangeDate} />

                </Col>





                <Col span={12}>
                    <p>Giờ nhận phòng</p>
                    <Select defaultValue={data.time} style={{
                        width: "100%"
                    }} options={optionsTime} onChange={handleChangeSelect}></Select>

                </Col>


                <Col span={24}>
                    <p>Email</p>
                    <Button type='primary' onClick={handleSubmit}> Đặt phòng</Button></Col>

            </Row>
        </>
    )
}
export default BookRoom;