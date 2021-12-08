import { Col, Input, Row } from 'antd';
import React, { ReactElement } from 'react'

type Props = {
    buttons?: ReactElement,
    title: string
}
function HeaderBar({buttons,title}:Props){
    return(
        <Row gutter={20}>
            <Col span={5}>
                <p style={{fontSize: '1.2rem',fontWeight: 'bold'}}>{title}</p>
            </Col>
            <Col span={14}>
                <Input placeholder="Search" />
            </Col>
            <Col span={5}>
                {buttons}
            </Col>
        </Row>
    )
}

export default HeaderBar;