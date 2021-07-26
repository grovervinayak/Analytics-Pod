import React from 'react';
import {render} from 'react-dom';
import { Row, Col, Menu, Button, Table } from 'antd';
import {UserInfoHeader} from './CommonComponents/Headers/UserInfoHeader';
import { MainOuterTemplate } from './CommonComponents/Others/OuterTemplate';
import {UserInfoData, UserInfoColumns} from "../Data/UserInfoData";
import { AddUserForm } from './CommonComponents/Forms/AddUserForm';

export class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfoData: UserInfoData
        }
    }
    render() {
        return(
            <div>
                <UserInfoHeader/>
                <MainOuterTemplate>
                    <Row>
                        <Col span={6}>
                            <Menu onClick={this.handleClick} selectedKeys={['mail']} mode="inline">
                                <Menu.Item key="mail">
                                    List View
                                </Menu.Item>
                                <Menu.Item key="app">
                                    reporting View
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={18}>
                            <div style={{padding: '10px'}}>
                                <div style={{display: 'flex', justifyContent: 'flex-end', padding: '10px 20px'}}>
                                    <AddUserForm />
                                </div>
                                <div>
                                    <Table columns={UserInfoColumns} dataSource={UserInfoData} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </MainOuterTemplate>
            </div>
        )
    }
}