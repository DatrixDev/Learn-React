/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../services/jobService.js";
import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Tag,
  Form,
  notification,
  Select,
} from "antd";
import { getDetailCompany } from "../../services/companyService";
import { rules } from "../../contants";
import { getTimeCurrent } from "../../helpers/getTime.js";
import { createCV } from "../../services/cvService.js";
import GoBack from "../../components/GoBack";

const { TextArea } = Input;
const { Option } = Select;

function JobDetail() {
  const params = useParams();
  const [job, setJob] = useState();
  const [form] = Form.useForm();
  const [noti, contextHolder] = notification.useNotification();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailJob(params.id);
      const infoCompany = await getDetailCompany(response.idCompany);
      const dataFinal = {
        ...response,
        infoCompany: infoCompany,
      };
      setJob(dataFinal);
    };
    fetchApi();
  }, []);

  const onFinish = async (values) => {
    values.idJob = job.id;
    values.idCompany = job.infoCompany.id;
    values.createAt = getTimeCurrent();
    const response = await createCV(values);
    if (response) {
      noti.success({
        message: "Gửi CV thành công!",
        description: "CV của bạn đã được gửi tới công ty.",
      });
    } else {
      noti.error({
        message: "Gửi CV thất bại!",
        description: "Có lỗi xảy ra, vui lòng thử lại.",
      });
    }
  };

  return (
    <>
      {contextHolder}

      <GoBack />

      {job && (
        <>
          <h1>{job.name}</h1>

          <Button
            href="#formApply"
            type="primary"
            size="large"
            className="mb-20"
          >
            ỨNG TUYỂN NGAY
          </Button>

          <div className="mb-20">
            <span>Tags: </span>
            {(job.tags || []).map((item, index) => (
              <Tag color="blue" key={index}>
                {item}
              </Tag>
            ))}
          </div>

          <div className="mb-20">
            <span>Thành phố: </span>
            {(job.city || []).map((item, index) => (
              <Tag color="orange" key={index}>
                {item}
              </Tag>
            ))}
          </div>

          <div className="mb-20">
            Mức lương: <strong>{job.salary}$</strong>
          </div>

          <div className="mb-20">
            Địa chỉ công ty: <strong>{job.infoCompany.address}</strong>
          </div>

          <div className="mb-20">
            <div className="mb-10">Mô tả công việc:</div>
            <div>{job.description}</div>
          </div>

          <div className="mb-20">
            <div className="mb-10">Giới thiệu công ty:</div>
            <div>{job.infoCompany.description}</div>
          </div>

          <Card title="Ứng tuyển ngay" id="formApply">
            <Form
              name="form_apply"
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Row gutter={20}>
                <Col span={6}>
                  <Form.Item label="Họ tên" name="name" rules={rules}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item label="Số điện thoại" name="phone" rules={rules}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item label="Email" name="email" rules={rules}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item label="Thành phố" name="city" rules={rules}>
                    <Select>
                      {job.city.map((item, index) => (
                        <Option value={item} label={item} key={index}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label="Giới thiệu bản thân"
                    name="description"
                    rules={rules}
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label="Danh sách link project đã làm"
                    name="linkProject"
                    rules={rules}
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      GỬI YÊU CẦU
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </>
      )}
    </>
  );
}

export default JobDetail;
