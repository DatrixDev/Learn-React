import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import { Point } from "@antv/g2/lib/mark/point";
import { Slider } from "@antv/g2/lib/component/slider";

function BasicLine() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/chart")
            .then(res => res.json())
            .then(data => {
                setDataChart(data || []);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);


    const config = {
        data: dataChart,
        xField: "date",
        yField: "quantity",
        smooth: true,
        Point : true,
        Slider  : {
            start : 0,
            end : 1
        }
    };


    return (
        <>
            <h2>Ví dụ</h2>
            <Line {...config} />
        </>
    );
}

export default BasicLine;
