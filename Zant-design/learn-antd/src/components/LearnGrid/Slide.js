import { Carousel } from "antd";
import "./LearnGrid.css"

function Slide() {
    return (
        <>

            <Carousel autoplay dots={true} effect="fade">
                <div className="slider-item">1</div>
                <div className="slider-item">2</div>
                <div className="slider-item">3</div>
                <div className="slider-item">4</div>
            </Carousel></>
    )
}
export default Slide;