## SelectTable

### 带选框的表格

```jsx
/**
 *  title: 基本使用
 *  desc: 带选框的表格
 */
import react, { useState } from 'react';
import { SelectTable } from 'dumi-lib';

const getList = ({ current, pageSize }) =>
  [...new Array(pageSize)].map((item, index) => ({
    id: `第${current}页___id${index}`,
    value: index,
  }));
const columns = [
  {
    title: '编号',
    dataIndex: 'id',
  },
  {
    title: '随机数',
    dataIndex: 'value',
  },
];
export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const onSelectRow = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys, selectedRows);
    setSelectedRowKeys(selectedRowKeys);
  };
  const onChange = pagination => setPagination(pagination);
  const list = getList(pagination);
  return (
    <SelectTable
      data={{
        list: list,
        total: 500,
        pageNo: pagination.current,
        pageSize: pagination.pageSize,
      }}
      rowKey={'id'}
      columns={columns}
      selectedRowKeys={selectedRowKeys}
      // getCheckboxProps={}
      onSelectRow={onSelectRow}
      onChange={onChange}
    />
  );
};
```

> 属性同`antd`的`Table`，`data`属性如下

### 组件参数

| 参数     | 说明               |   类型   | 默认值 | 必填 |
| :------- | :----------------- | :------: | :----: | :--: |
| list     | 原组件`dataSource` | `array`  |   --   |  是  |
| total    | 数据总数           | `number` |   --   |  是  |
| pageNo   | 当前页码           | `number` |  `1`   |  是  |
| pageSize | 每页数量           | `number` |  `10`  |  是  |
