import React , {Component} from "react";
import { Table, Badge } from 'antd';
import eventBus from "../../EventBus";
import data from "../../Data";
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
    sorter: (a,b) => {
        return new Date(a.time).getTime() - new Date(b.time).getTime()
    }
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

const paginationProps = {
    showSizeChanger: false,
    defaultCurrent: 1,
    total: 10,
    pageSize: 3,
    showQuickJumper: true
}

class ShowTable extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: data
        }
    }

    render() {
        return (
            <Table 
                columns={columns} 
                dataSource={this.state.dataSource} 
                style={{marginTop: 24}}
                pageSize={2}
                pagination={paginationProps}
            />
        )
    }

    componentDidMount() {
        eventBus.addListener('search',(...searchValues)=>{
            let [name,time] = searchValues;
            let newData = data.filter(item => {
                return item.name.includes(name) && (item.time === time)
            })
            this.setState({
                dataSource: newData
            })
        })
    }
}

export default ShowTable;