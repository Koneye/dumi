## QueryFormWrapper

### 表格头部筛选表单

```jsx
/**
 *  title: 基本使用
 *  desc: 表格头部筛选表单
 */
import react, { useState } from 'react';
import { QueryFormWrapper } from 'dumi-lib';
import { Form, Col, Input } from 'antd';

const Demo = ({ form }) => {
  const handleSearch = values => console.log(values);
  return (
    <QueryFormWrapper form={form} handleSearch={handleSearch}>
      {[...new Array(9)].map((item, index) => (
        <Col md={8} sm={24} key={index}>
          <Form.Item label={`Label${index}`}>
            {form.getFieldDecorator(`name${index}`)(
              <Input placeholder="请输入" />,
            )}
          </Form.Item>
        </Col>
      ))}
    </QueryFormWrapper>
  );
};

const DemoForm = Form.create()(Demo);

export default DemoForm;
```

### 组件参数

| 参数            | 说明         |    类型    | 默认值 | 必填 |
| :-------------- | :----------- | :--------: | :----: | :--: |
| form            | 表单属性     |  `object`  |   --   |  是  |
| handleSearch    | 点击查询回调 | `function` |   --   |  否  |
| handleFormReset | 点击重置回调 | `function` |   --   |  否  |
