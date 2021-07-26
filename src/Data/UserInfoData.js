import {Tag} from 'antd';

var CG = ["BT", "BO", "BC"];

var track = {
    BT: ["Software Developer", "Tester", "QA"],
    BO: ["Ops"],
    BC: ["DS"]
};

var UserInfoColumns = [{
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'E-Mail',
    dataIndex: 'email',
  },
  {
    title: 'CG',
    dataIndex: 'cg',
  },
  {
    title: 'Track',
    dataIndex: 'track',
  },
  {
    title: 'Level',
    dataIndex: 'level',
  },
  {
    title: 'Office',
    dataIndex: 'office',
  },
  {
    title: 'Date of Joining',
    dataIndex: 'date_of_joining',
  },
  {
    title: 'Skills',
    dataIndex: 'skills',
    render: tags => (
        <span>
        {tags.map(tag => (
            <Tag>{tag}</Tag>
        ))}
        </span>
    )
  }];

var UserInfoData = [{
    "name": "Vinayak Grover",
    "email": "vinayak.grover@zs.com",
    "cg": "BT",
    "track": "Software Developer",
    "level": "2",
    "office": "New Delhi",
    "date_of_joining": "21st July, 2021",
    "skills": ["ReactJS", "MongoDB", "HTML", "CSS"]
}];

export {CG, track, UserInfoData, UserInfoColumns};