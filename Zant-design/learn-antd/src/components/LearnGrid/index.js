import { Carousel, Col, Collapse,Image, QRCode, Rate, Row, Tabs } from "antd";
import "./LearnGrid.css"
import CartItem from "../CartItem";
import logo from "../../images/logo.png"
import Side from "./Slide";
const { Panel } = Collapse;

function LearnGrid() {
    const list = [
        {
            id: 1,
            title: "Logo 1 là j ? ",
            description: "Logo 1 là..."
        },
        {
            id: 2,
            title: "Logo 2 là j ? ",
            description: "Logo 2 là..."
        },
        {
            id: 3,
            title: "Logo 3 là j ? ",
            description: "Logo 3 là..."
        }
    ]
    const items = [{
        key : 1,
        label : "tab1",
        children :<Side/>
    },
{
        key : 2,
        label : "tab2",
        children : "Nội dung tab 2"
    },
{
        key : 3,
        label : "tab3",
        children : "Nội dung tab 3"
    }]
    return (
        <>
            {/* <Row gutter={[10,20]} >
                <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
                    <div className="box">Cột 1</div>
                </Col>
                <Col xxl={4} xl={4} lg={3} md={6} sm={12} xs={24}>
                    <div className="box">Cột 2</div>
                </Col>
                <Col xxl={8} xl={8} lg={3} md={6} sm={12} xs={24}>
                    <div className="box">Cột 3</div>
                </Col>
                <Col xxl={10} xl={10} lg={3} md={6} sm={12} xs={24}>
                    <div className="box">Cột 4</div>
                </Col>
            </Row> */}
            <Row gutter={[20, 20]}>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title="Box 1" />
                </Col>

                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title="Box 2" />
                </Col>

                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title="Box 3" />
                </Col>

                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title="Box 4" />
                </Col>
            </Row>


            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CartItem title="Box 5" style={{ height: "400px" }} />
                </Col>

                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title="Box 6" style={{ height: "400px" }} />
                </Col>
            </Row>





            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title="Box 7" style={{ height: "400px" }} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CartItem title="Box 8" style={{ height: "400px" }} />
                </Col>


            </Row>

            <Carousel autoplay dots={true} effect="fade">
                <div className="slider-item">1</div>
                <div className="slider-item">2</div>
                <div className="slider-item">3</div>
                <div className="slider-item">4</div>
            </Carousel>


            <Collapse defaultActiveKey="1" accordion={true} >
                {list.map(item => (
                <Panel header={item.title} key={item.id} >
                    <p>{item.description}</p>
                </Panel>
                ))}
            
            </Collapse>

            <Image width={200} src={logo}></Image>
            <Tabs items={items}/>

            <QRCode
            errorLevel="H"
            value="https://ant.design/"
            icon="https://cdn.daca.vn/media/logo/favicon.ico"
                >
            </QRCode>

            <Rate allowHalf character="A" tooltips={["y","F","k","l","d"]}></Rate>



        </>
    )
}
export default LearnGrid;