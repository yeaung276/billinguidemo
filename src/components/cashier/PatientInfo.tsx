import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import React, { useState } from 'react';
import NewPatientForm from './NewPatientForm';

function PatientInfo(){
    const [showNewPatientForm, setShowNewPatientForm] = useState(false)
    return(
        <div style={{margin: '1rem'}}>
            <h1>Patient Info</h1>
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
                            <Select 
                                bordered={false} 
                                className="patient-input" 
                                showSearch
                                filterOption={(input, option) =>
                                    option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                dropdownRender={menu => (
                                    <React.Fragment>
                                        {menu}
                                        <Button type='primary' block onClick={()=>setShowNewPatientForm(true)}>Add New Patient</Button>
                                    </React.Fragment>
                                  )}
                            >
                                    <Select.Option value={1}>Jack</Select.Option>
                                    <Select.Option value={2}>Lucy</Select.Option>
                                    <Select.Option value={3}>Tom</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>

                     <Col span={12}>
                        <Form.Item
                            label="Patient Reg"
                            name="reg"
                            rules={[{ required: true, message: "Please input patient's reg no" }]}
                        >
                            <Input bordered={false} className="patient-input" placeholder="[dev note] this field will be removed if master patient index was not used"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={18}>
                    <Col span={12}>
                        <Form.Item
                            label="Phone"
                            name="phone"
                        >
                            <Input disabled bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Address"
                            name="address"
                        >
                            <Input disabled bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Modal title="Basic Modal" visible={showNewPatientForm} onCancel={()=>setShowNewPatientForm(false)} footer="">
                <NewPatientForm/>
            </Modal>
        </div>
    )
}

export default PatientInfo;