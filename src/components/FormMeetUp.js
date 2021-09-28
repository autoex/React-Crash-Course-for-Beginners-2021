import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const FormMeetUp = ({addNewMeetUp}) => {
    const onFinish = (values) => {
        addNewMeetUp(values);
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please input your title!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Image"
                name="image"
                rules={[{ required: true, message: 'Please input your image url!' }, {
                    type: 'url',
                    warningOnly: true,
                },
                    {
                        type: 'string',
                        min: 6,
                    },]}
            >
                <Input type='url' />
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input.TextArea />
            </Form.Item>



            <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormMeetUp;