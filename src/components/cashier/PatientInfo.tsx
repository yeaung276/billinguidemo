import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import React, { useState } from 'react';
import NewPatientForm from './NewPatientForm';

const dummypatient = [
    {
        id: 1,
        name: 'Jack',
        phone: '0987654321',
        address: 'Insein'
    },
    {
        id: 2,
        name: 'Lucy',
        phone: '091234567890',
        address: 'Mingaladon'
    }
]

function PatientInfo(){
    const [showNewPatientForm, setShowNewPatientForm] = useState(false)

    const [form] = Form.useForm()

    const handleSelect = (val:any, option:any) => {
        const pat = dummypatient.filter(x=>x.id===val)[0]
        form.setFieldsValue({
            phone: pat.phone,
            address: pat.address
        })
    }
    return(
        <div style={{margin: '1rem'}}>
            <h1>Patient Info</h1>
            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                autoComplete="off"
                form={form}
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
                                onSelect={handleSelect}
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
                                {dummypatient.map(x=><Select.Option key={x.id} value={x.id}>{x.name}</Select.Option>)}

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
                            <Input style={{color: 'black'}} disabled bordered={false} className="patient-input"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Address"
                            name="address"
                        >
                            <Input style={{color: 'black'}} disabled bordered={false} className="patient-input"/>
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