/*
 * @Author: zhuxingmin
 * @Date: 2020-05-20 14:01:52
 * @Last Modified by: zhuxingmin
 * @Last Modified time: 2020-07-17 16:09:26
 * @description: 主要用於列表頭部的條件查詢
 */
import React, { PureComponent } from 'react';
import t from 'prop-types';
import { Form, Row, Col, Button, Input, Select, DatePicker } from 'antd';
import moment from 'moment';
import styles from './index.less';

const debounce = (fn, wait = 1000) => {
  let timeout = null;
  return function() {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), wait);
  };
};

const { Option } = Select;
const { RangePicker } = DatePicker;

class Index extends PureComponent {
  state = {
    open: false,
  };

  componentDidMount() {}

  // 生成表单项
  createFormItem = () => {
    const {
      items,
      limit,
      form: { getFieldDecorator },
    } = this.props;
    const { open } = this.state;
    const _items = limit && !open ? items.slice(0, limit) : items;
    return _items.map((item, index) => {
      const {
        // 表单类型
        type,
        // 表单key
        // key,
        // 表单label
        label,
        // 表单校验配置
        options,
        // 表单元素配置
        formEleOptions,
        // 下拉选项指定value的key
        selectValueKey,
        // 下拉选项指定label的key
        selectLabelKey,
        // 表单项布局
        formItemLayout,
      } = item;

      // 初始化配置项
      item.options = options || {};
      item.formEleOptions = formEleOptions || {};
      item.getFieldDecorator = getFieldDecorator;
      item.formItemLayout = formItemLayout || {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 20,
        },
      };
      let { initialValue } = item.options;

      switch (type) {
        case 'input':
          item.placeholder = `请输入${label}`;
          return this.createInput(item, index);
        case 'select':
          item.placeholder = `请选择${label}`;
          item.selectValueKey = selectValueKey || 'id';
          item.selectLabelKey = selectLabelKey || 'name';
          return this.createSelect(item, index);
        case 'datepicker':
          item.placeholder = `请选择${label}`;
          if (initialValue) {
            try {
              item.options.initialValue = moment.isMoment(initialValue)
                ? initialValue
                : moment(initialValue);
            } catch (error) {
              item.options.initialValue = undefined;
              throw error;
            }
          }
          return this.createDatepicker(item, index);
        case 'rangepicker':
          if (initialValue) {
            if (
              Object.prototype.toString.call(initialValue) === '[object Array]'
            ) {
              item.options.initialValue = initialValue.map(date => {
                let value;
                try {
                  value = moment.isMoment(date) ? date : moment(date);
                } catch (error) {
                  value = null;
                }
                return value;
              });
            } else {
              item.options.initialValue = null;
            }
          }
          item.placeholder = ['开始时间', '结束时间'];
          return this.createRangepicker(item, index);
        default:
          break;
      }
    });
  };

  // 输入框
  createInput = (item, index) => {
    const {
      key,
      label,
      options,
      placeholder,
      getFieldDecorator,
      formEleOptions,
      formItemLayout,
    } = item;
    return (
      <Col span={8} key={index}>
        <Form.Item {...formItemLayout} label={label}>
          {getFieldDecorator(
            key,
            options,
          )(<Input placeholder={placeholder} {...formEleOptions} />)}
        </Form.Item>
      </Col>
    );
  };

  // 下拉框
  createSelect = (item, index) => {
    const {
      key,
      label,
      options,
      placeholder,
      list = [],
      selectValueKey,
      selectLabelKey,
      getFieldDecorator,
      formEleOptions,
      formItemLayout,
    } = item;
    return (
      <Col span={8} key={index}>
        <Form.Item {...formItemLayout} label={label}>
          {getFieldDecorator(
            key,
            options,
          )(
            <Select placeholder={placeholder} {...formEleOptions}>
              {list.map((item, i) => (
                <Option key={i} value={item[selectValueKey]}>
                  {item[selectLabelKey]}
                </Option>
              ))}
            </Select>,
          )}
        </Form.Item>
      </Col>
    );
  };

  // 日期选择
  createDatepicker = (item, index) => {
    const {
      key,
      label,
      options,
      placeholder,
      getFieldDecorator,
      formEleOptions,
      formItemLayout,
    } = item;
    return (
      <Col span={8} key={index}>
        <Form.Item {...formItemLayout} label={label}>
          {getFieldDecorator(
            key,
            options,
          )(<DatePicker placeholder={placeholder} {...formEleOptions} />)}
        </Form.Item>
      </Col>
    );
  };

  // 日期范围选择
  createRangepicker = (item, index) => {
    const {
      key,
      label,
      options,
      placeholder,
      getFieldDecorator,
      formEleOptions,
      formItemLayout,
    } = item;
    return (
      <Col span={8} key={index}>
        <Form.Item {...formItemLayout} label={label}>
          {getFieldDecorator(
            key,
            options,
          )(<RangePicker placeholder={placeholder} {...formEleOptions} />)}
        </Form.Item>
      </Col>
    );
  };

  // 搜索
  onSubmit = e => {
    const {
      form: { validateFields },
      getFieldsValue,
    } = this.props;
    e.preventDefault();
    validateFields((errors, values) => {
      if (errors) {
        return;
      }
      getFieldsValue && getFieldsValue(values);
    });
  };

  // 重置
  handleReset = () => {
    const {
      form: { resetFields },
      getFieldsValue,
    } = this.props;
    resetFields();
    getFieldsValue && getFieldsValue({});
  };

  // 展开收起
  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;
    return (
      <Form onSubmit={this.onSubmit} className={styles.dynamicForm}>
        <Row className="dynamicForm_row">{this.createFormItem()}</Row>
        <Row className="dynamicForm_row">
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: 8 }}
              onClick={this.handleReset}
            >
              重置
            </Button>
            <Button
              type="default"
              style={{ marginLeft: 8 }}
              onClick={this.toggle}
              className={styles.test}
            >
              {open ? '收起' : '展开'}
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

let debounceFun = undefined;

const DynamicForm = Form.create({
  // 任一表单域的值发生改变时的回调
  onValuesChange: (props, changedValues, allValues) => {
    if (debounceFun) {
      // 加入debounceFun 防止生成多个debounce
      debounceFun(changedValues, allValues);
    } else {
      debounceFun = debounce(props.onValuesChange);
    }
  },
})(Index);

DynamicForm.propTypes = {
  limit: t.number.isRequired,
  items: t.array.isRequired,
  getFieldsValue: t.func,
  onValuesChange: t.func,
};

DynamicForm.defaultProps = {
  items: [],
  limit: 3,
  onValuesChange: () => {},
};

export default DynamicForm;
