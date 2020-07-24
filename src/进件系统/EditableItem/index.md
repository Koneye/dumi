## EditableItem

### 可编辑的表单域

```jsx
/**
 *  title: 基本使用
 *  desc: 可编辑的表单域
 */
import react, { useState } from 'react';
import { EditableItem } from 'dumi-lib';

export default () => {
  const onChange = value => {
    console.log(value);
  };
  return <EditableItem value={123} onChange={onChange} />;
};
```

### 组件参数

| 参数     | 说明           |           类型           | 默认值 | 必填 |
| :------- | :------------- | :----------------------: | :----: | :--: |
| value    | 值             | `string` &#124; `number` |  `''`  |  是  |
| onChange | 点击勾选后回调 |        `function`        |   --   |  是  |
