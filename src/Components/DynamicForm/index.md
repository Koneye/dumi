## DynamicForm

### 动态表单

```jsx
/**
 *  title: 基本使用
 *  desc: 根据传入的`items`参数，动态生成表单
 */

import React from 'react';
import { DynamicForm } from 'dumi-lib';

export default () => {
  const items = [
    {
      type: 'input',
      key: 'name',
      label: '名称',
      options: {
        initialValue: 'zhuxingmin',
      },
      formEleOptions: {
        allowClear: false,
      },
    },
    {
      type: 'select',
      selectValueKey: 'id',
      selectLabelKey: 'name',
      key: 'id',
      label: '资产编号',
      list: [
        {
          id: 1,
          name: '资产1',
        },
        {
          id: 2,
          name: '资产2',
        },
        {
          id: 3,
          name: '资产3',
        },
      ],
      options: {
        initialValue: 2,
      },
    },
    {
      type: 'datepicker',
      key: 'date',
      label: '创建时间',
      formEleOptions: {
        placeholder: '自定义placeholder',
      },
      options: {
        initialValue: '2020-01-01',
      },
    },
    {
      type: 'rangepicker',
      key: 'range',
      label: '起止时间',
      formEleOptions: {
        placeholder: ['start', 'end'],
      },
      options: {
        initialValue: ['2020-01-01', '2020-05-20'],
      },
    },
  ];
  return <DynamicForm items={items} />;
};
```

### 组件参数

| 参数  | 说明                            |   类型   | 默认值 | 必填 | 版本  |
| :---- | :------------------------------ | :------: | :----: | :--: | :---: |
| items | 表单元素集合（item 参数见下文） | `array`  |  `[]`  |  是  | 2.0.0 |
| limit | 默认展开数量                    | `number` |  `0`   |  是  | 2.0.0 |

### items[item] 参数

| 参数           | 说明                                                            |   类型   | 默认值 | 必填 |
| :------------- | :-------------------------------------------------------------- | :------: | :----: | :--: |
| type           | 表单项类型，暂时支持`input` `select` `datepicker` `rangepicker` | `string` |   -    |  是  |
| key            | 表单项的 key，同时也作为该表单项字段名                          | `string` |   -    |  是  |
| label          | 表单项的 label，在部分表单项中，同时也作为`placeholder`         | `string` |   -    |  是  |
| formEleOptions | 表单元素的属性，同`antd`                                        | `object` |   -    |  否  |
| options        | 表单域方法参数，同`antd`表单的`getFieldDecorator`的`options`    | `object` |   -    |  否  |
| list           | 当`type`为`select`时，设置作为下拉数据源                        | `array`  |   -    |  否  |
| selectValueKey | 当`type`为`select`时，设置作为下拉数据`value`的字段名           | `string` |  `id`  |  否  |
| selectLabelKey | 当`type`为`select`时，设置作为下拉数据`label`的字段名           | `string` | `name` |  否  |
