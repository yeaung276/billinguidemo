import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

function NewPatientForm(){
    return (
        <React.Fragment>
            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Row gutter={18}>
                    <Col span={12}>
                        <Form.Item
                            label="Patient Name"
                            name="patient_id"
                            rules={[{ required: true, message: "Please input patient's name" }]}
                        >
                           <Input bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>

                     <Col span={12}>
                        <Form.Item
                            label="Patient Reg"
                            name="reg"
                            rules={[{ required: true, message: "Please input patient's reg no" }]}
                        >
                            <Input bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={18}>
                    <Col span={12}>
                        <Form.Item
                            label="Phone"
                            name="phone"
                        >
                            <Input bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Address"
                            name="address"
                        >
                            <Input bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" block>Add</Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}

export default NewPatientForm;