import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  size: string
  chest: string
  neck: string
  sleeve: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Size',
    dataIndex: 'size'
  },
  {
    title: 'Chest',
    dataIndex: 'chest'
  },
  {
    title: 'Neck',
    dataIndex: 'neck'
  },
  {
    title: 'Sleeve',
    dataIndex: 'sleeve'
  }
]

const data: DataType[] = [
  {
    key: '1',
    size: 'Small',
    chest: '36-38"',
    neck: '14-14.5"',
    sleeve: '32.5"'
  },
  {
    key: '2',
    size: 'Medium',
    chest: '39-41"',
    neck: '15-15.5"',
    sleeve: '35.5"'
  },
  {
    key: '3',
    size: 'Large',
    chest: '42-44"',
    neck: '16-16.5"',
    sleeve: '34.5"'
  }
]

const Dimension: React.FC = () => (
  <Table pagination={false} columns={columns} dataSource={data} bordered />
)

export default Dimension
