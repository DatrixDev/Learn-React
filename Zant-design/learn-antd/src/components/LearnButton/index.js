import { Button } from 'antd'
import { useState } from 'react';
import { ArrowUpOutlined } from "@ant-design/icons"
function LearnButton() {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            const result = {
                code: 200,
                data: []
            }
            if (result && result.code === 200) {
                setLoading(false);
            }
        }, 3000)
    }
    return (
        <>
            <Button icon={<ArrowUpOutlined rotate={45} spin={true} />} type='primary' loading={loading} onClick={handleClick} danger={loading} href='https://dummyjson/products'>Nội Dung</Button>

        </>
    )
}
export default LearnButton;