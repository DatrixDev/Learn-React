import { Badge, Card, Col, Row } from "antd";

function RoomGrid(props) {
  const { rooms } = props;
  return (
    <Row gutter={[16, 16]}>
      {rooms.map((item) => (
        <Col span={12} key={item.id}>
          <Badge.Ribbon
            text={item.typeRoom ? "VIP" : "Thường"}
            color={item.typeRoom ? "purple" : "gray"}
          >
            <Card title={`Phòng ${item.name || item.id}`}>
              <p>Số giường: <strong>{item.quantityBed}</strong></p>
              <p>Số người: <strong>{item.quantityPeople}</strong></p>
              <p>Tiện ích: <strong>{item.utils}</strong></p>
              <p>
                {item.status ? (
                  <Badge status="success" text="Còn phòng" />
                ) : (
                  <Badge status="error" text="Hết phòng" />
                )}
              </p>
            </Card>
          </Badge.Ribbon>
        </Col>
      ))}
    </Row>
  );
}
export default RoomGrid;
