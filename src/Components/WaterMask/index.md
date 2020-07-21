## WaterMask

### 水印组件

```jsx
/**
 *  title: 基本使用
 *  desc: 生成水印节点
 */
import react, { useState } from 'react';
import { WaterMask } from 'dumi-lib';

export default () => (
  <div className="demo-wm" style={{ height: '500px' }}>
    <WaterMask
      body={'.demo-wm'}
      str={'这是一个很长的示例水印'}
      rotate={-60}
      fontSize={30}
    />
  </div>
);
```

### 组件参数

| 参数      | 说明                |           类型           |         默认值         | 必填 |
| :-------- | :------------------ | :----------------------: | :--------------------: | :--: |
| body      | 水印范围`css选择器` |         `string`         |         `body`         |  否  |
| str       | 水印文字            |         `string`         |           --           |  是  |
| summary   | 水印副标题文字      |         `string`         |           --           |  否  |
| rotate    | 水印旋转角度        |         `number`         |           --           |  否  |
| width     | 水印`canvas`的宽度  |         `number`         |           --           |  否  |
| height    | 水印`canvas`的宽度  |         `number`         |           --           |  否  |
| fontSize  | 水印字体大小        | `string` &#124; `number` |           --           |  否  |
| textStyle | 水印字体颜色`色值`  |         `string`         | `rgba(97, 97, 97,0.2)` |  否  |
