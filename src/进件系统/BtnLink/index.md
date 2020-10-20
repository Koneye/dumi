## BtnLink

### 按钮组

```jsx
/**
 *  title: 基本使用
 *  desc: 带分割线的按钮组，一般用于表格中的操作列
 */
import react, { useState } from 'react';
import { BtnLink } from '@c300/react-ui';

export default () => {
    return (
        <BtnLink limit={2}>
            <a>按钮1</a>
            <a>按钮2</a>
            <a>按钮3</a>
            <a>按钮4</a>
            <a>按钮5</a>
        </BtnLink>
    );
};
```

## API

| 参数  | 说明                     | 类型     | 默认值 |
| ----- | ------------------------ | -------- | ------ |
| limit | 超出则显示`更多`下拉菜单 | `number` | 4      |
