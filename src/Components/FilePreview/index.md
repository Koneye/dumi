## FilePreview

### 文件预览弹窗

```jsx
/**
 *  title: 基本使用
 *  desc: 根据传入的fileList，弹窗展示图片轮播
 */
import react, { useState } from 'react';
import { Button } from 'antd';
import { FilePreview } from '@c300/react-ui';

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button type="primary" onClick={() => setVisible(!visible)}>
                打开弹窗
            </Button>
            <FilePreview
                visible={visible}
                fileList={[
                    {
                        id: 1,
                        url: 'https://image6.znzmo.com/1593608377159_7422.jpeg',
                    },
                    {
                        id: 2,
                        url: 'https://image6.znzmo.com/1593588895201_45.jpeg',
                    },
                    {
                        id: 3,
                        url: 'https://image6.znzmo.com/1593605462122_2958.jpeg',
                    },
                    {
                        id: 4,
                        url: 'https://image6.znzmo.com/1593581430272_9899.jpeg',
                    },
                    {
                        id: 5,
                        url: 'https://image6.znzmo.com/1593618125973_7402.jpeg',
                    },
                    {
                        id: 6,
                        url: 'https://image6.znzmo.com/1593530565118_8687.jpeg',
                    },
                ]}
                activeIndex={0}
                slideSize={4}
                onCancel={() => setVisible(!visible)}
            />
        </div>
    );
};
```

### 组件参数

| 参数        | 说明                  |    类型    | 默认值  | 必填 |
| :---------- | :-------------------- | :--------: | :-----: | :--: |
| visible     | 可见性                | `boolean`  | `false` |  是  |
| fileList    | 文件列表              |  `array`   |   --    |  是  |
| activeIndex | 初始下标              |  `number`  |   `0`   |  否  |
| slideSize   | 缩略图每屏个数        |  `number`  |   `4`   |  否  |
| onOk        | 同`antd`的`modal`属性 | `function` |   --    |  否  |
| onCancel    | 同`antd`的`modal`属性 | `function` |   --    |  否  |
