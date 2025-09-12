import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";
import { useEffect, useState } from "react";
import { getDetailJob } from "../../services/jobService";
import { Tag } from "antd";

function JobDetail() {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailJob(params.id);
      if (response) {
        setData(response);
      }
    };
    fetchApi();
  }, []);

  console.log(data);

  return (
    <>
      <GoBack />
      {data && (
        <>
          <h1>Tên job: {data.name}</h1>
          <div className="mb-20">
            <span>Trạng thái: </span>
            {data.status ? (
              <Tag color="green">Đang bật</Tag>
            ) : (
              <Tag color="red">Đang tắt</Tag>
            )}
          </div>

          <div className="mb-20">
            <span>Mức lương: </span>
            <strong>{data.salary} $</strong>
          </div>

          <div className="mb-20">
            <span>Tags: </span>
            {(data.tags || []).map((item, index) => (
              <Tag key={index} color="blue" className="mb-5">
                {item}
              </Tag>
            ))}
          </div>

          <div className="mb-20">
            <span>Mô tả: </span>
            <p>{data.description}</p>
          </div>

          <div className="mb-20">
            <small>Ngày tạo: {data.createAt}</small>
            <br />
            <small>Cập nhật: {data.updateAt}</small>
          </div>
        </>
      )}
    </>
  );
}

export default JobDetail;
