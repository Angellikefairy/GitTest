import React , {Component} from "react";
import { Table, Badge } from 'antd';
import "./ShowTable.css";

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
    sorter: (a,b) => Number(a.content > b.content)
  },
  {
    title: '简介',
    dataIndex: 'summary',
    key: 'summary',
    sorter: (a,b) => Number(a.summary > b.summary),
    filters: [
        {
            text: '字数少于20的简介',
            value: 20
        },
        {
            text: '字数少于50的简介',
            value: 50
        },
        {
            text: '不限',
            value: '不限'
        }
    ],
    onFilter: (value,record) => {
        if(value !== '不限') {
            return record.summary.length < value
        }
        else return true;
    },
    filterMultiple: false
  },
  {
    title: '时间',
    key: 'time',
    dataIndex: 'time',
    sorter: (a,b) => Number(new Date(a) - new Date(b))
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    render: (text,record,index) => {
        if(text === '成功') {
            return (
                <Badge status="success" text="成功"></Badge>
            )
        }
        else if(text === '进行中') {
            return (
                <Badge status="processing" text="进行中"></Badge>
            )
        }
        else return (
            <Badge status="error" text="失败"></Badge>
        )
    }
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a className="actionLink">编辑</a>
        <a>下载</a>
      </span>
    ),
  },
];

const data = [];
for(let i=1;i<11;i++) {
    let status;
    let time;
    let mounth='2020-04';
    if(i%3 === 1) {
        status = '成功'
    }
    else if(i%3 === 2) {
        status = '进行中'
    }
    else status = '失败';
    if(i<10) {
        time = mounth+`-0${i}`
    }
    else {
        time = mounth+`-${i}`
    }
    data.push({
        key: `${i}`,
        name: `文件夹${i}`,
        content: `这是一段内容${i}`,
        summary: `这是一段很长的简介，这是一段很长的简介${i}`,
        time,
        status
    })
}

const paginationProps = {
    showSizeChanger: false,
    defaultCurrent: 1,
    total: 10,
    pageSize: 3,
    showQuickJumper: true
}

const ShowTable = () => (
    <Table 
        columns={columns} 
        dataSource={data} 
        style={{marginTop: 24}}
        pageSize={2}
        pagination={paginationProps}
    />
)

export default ShowTable;