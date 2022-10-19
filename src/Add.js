import { Button, Form, Input, Modal, PageHeader } from 'antd'
import React from 'react'
import { network } from './Network'

function Add() {

    const onFinish = (values) => {
        network.add('customers', values)
            .then((res) => {
                Modal.success({
                    content: 'Müşteri başarılı bir şekilde eklendi.'
                });
            })
    }

    return (
        <>
            <PageHeader
                className='site-page-header'
                title="Müşteri Ekle" />
            <Form onFinish={onFinish} layout='vertical' size='large'>
                <Form.Item
                    label='Id'
                    name='id'
                    rules={[{ required: true, message: 'Id zorunludur.' }]}
                >
                    <Input placeholder="Id bilgisi giriniz..." style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    label='Şirket Adı'
                    name='companyName'
                    rules={[{ required: true, message: 'Şirket ismi zorunlu.' }]}
                >
                    <Input placeholder="Şirket adını giriniz..." style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    label='Contact Name'
                    name='contactName'
                    rules={[{ required: true, message: 'Yetkili ismi zorunlu.' }]}
                >
                    <Input placeholder="Yetkili adını giriniz." style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item
                    label='Contact Title'
                    name='contactTitle'
                >
                    <Input placeholder="Yetkili ünvanını giriniz." style={{ width: '60%' }} />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Ekle
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Add