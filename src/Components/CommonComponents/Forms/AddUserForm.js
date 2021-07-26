import React from 'react';
import {render} from 'react-dom';
import { Modal, Button, Form, Input, Select } from 'antd';
import {CG, track} from '../../../Data/UserInfoData';

export class AddUserForm extends React.Component {
  state = {
    loading: false,
    visible: false,
    trackArray: []
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  changeTrackValue = (value) => {
      this.setState({
          trackArray: track[value]
      })
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal} size={'large'}>
          Add User
        </Button>
        <Modal
          visible={visible}
          title="Add User"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>
          ]}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your e-mail!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="CG"
                    name="cg"
                    rules={[{ required: true, message: 'Please select CG from the dropdown!' }]}
                >
                    <Select defaultValue="Select CG" onChange={this.changeTrackValue}>
                        <Select.Option value="Select CG" disabled hidden>Select CG</Select.Option>
                        {CG.map((cg) => 
                            <Select.Option value={cg} key={cg}>{cg}</Select.Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Track"
                    name="track"
                    rules={[{ required: true, message: 'Please select Track from the dropdown!' }]}
                >
                    <Select defaultValue="Select Track">
                        <Select.Option value="Select Track" disabled hidden>Select Track</Select.Option>
                        {this.state.trackArray.map((cg) => 
                            <Select.Option value={cg} key={cg}>{cg}</Select.Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Level"
                    name="level"
                    rules={[{ required: true, message: 'Please input Level' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Office"
                    name="office"
                    rules={[{ required: true, message: 'Please input your Office!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
      </>
    );
  }
}