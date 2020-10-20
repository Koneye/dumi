## AntdSelect

### 封装 Antd 的 Select 组件

```jsx
/**
 *  title: 基本使用
 *  desc: 基于`Antd`的`Select`封装的带有通用逻辑的组件
 */
import react, { useState } from 'react';
import { AntdSelect } from '@c300/react-ui';

const data = [...new Array(10)].map((item, index) => ({
    id: `id${index}`,
    value: Math.random(),
}));

export default () => {
    const onChange = value => console.log(value);
    return (
        <AntdSelect
            style={{ width: 200 }}
            name="name"
            data={data}
            valueName="value"
            labelName="id"
            onChange={onChange}
        />
    );
};
```

## API

| 参数      | 说明            | 类型     | 默认值  |
| --------- | --------------- | -------- | ------- |
| name      | 唯一标识        | `string` | -       |
| data      | 下拉框数据      | `array`  | -       |
| valueName | 选项`value`别名 | `string` | `value` |
| labelName | 选项`label`别名 | `string` | `label` |

> 支持透传`Select`组件的所有其他属性
