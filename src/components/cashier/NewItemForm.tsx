import { Button, Col, Form, Input, Row, Select } from 'antd';
import React from 'react';

function NewItemForm(){
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
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Please input item's name" }]}
                        >
                           <Input bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>

                     <Col span={12}>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[{ required: true, message: "Please input price" }]}
                        >
                            <Input bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={18}>
                    <Col span={12}>
                        <Form.Item
                            label="UOM"
                            name="uom_id"
                        >
                            <Select bordered={false} className="patient-input">
                                <Select.Option value={1}>Pcs</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Category"
                            name="category_id"
                        >
                            <Select bordered={false} className="patient-input">
                                <Select.Option value={1}>Pharmacy</Select.Option>
                            </Select>
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

export default NewItemForm;