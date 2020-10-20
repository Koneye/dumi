## DrawSignature

### 基于 canvas 实现的签名组件

```jsx
/**
 *  title: 基本使用
 *  desc: 基于canvas实现的签名功能
 */
import react, { useState } from 'react';
import { DrawSignature } from '@c300/react-ui';

export default () => {
    const [src, setSrc] = useState('');
    return (
        <>
            <DrawSignature value={src} callback={src => setSrc(src)} />
        </>
    );
};
```

### 组件参数

| 参数     | 说明         |    类型    | 默认值 | 必填 |
| :------- | :----------- | :--------: | :----: | :--: |
| value    | 图片地址     |  `string`  |   --   |  否  |
| callback | 弹窗保存回调 | `function` |   --   |  否  |
