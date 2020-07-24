/*
 * @Author: wqjiao
 * @Date: 2019-06-20 10:09:57
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-07-02 16:37:26
 * @Description: DrawSignature 绘制签名弹窗
 * @use: <DrawSignature callback={this.handleDraw} />
 */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, notification } from 'antd';
import Canvas from './Canvas';

export default class DrawSignature extends PureComponent {
  static propTypes = {
    callback: PropTypes.func, // 保存后的回调
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: false, // 绘制签名弹窗
      value: props.value || props.signUrl, // 图片路径
      isFirst: true, // 第一次更新
    };
  }

  componentDidUpdate() {
    const { value, signUrl } = this.props;

    // 初次更新数据时，使用 props
    if (this.state.isFirst && (value || signUrl)) {
      this.setState({
        isFirst: false,
        value: value || signUrl,
      });
    }
  }

  // 显示弹窗
  handleSignature = () => {
    this.setState({
      visible: true,
    });
  };

  // 关闭弹窗
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  // 保存签名
  handleSave = value => {
    // const {name} = this.props;
    notification.success({
      message: '提示',
      description: '保存成功',
    });
    this.setState({ value });
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(value);
    }
    // this.props.callback(name, value);
    this.handleCancel(); // 关闭弹窗
  };

  render() {
    const { visible, value } = this.state;

    return (
      <Fragment>
        <Button type="primary" onClick={this.handleSignature}>
          点击签名
        </Button>
        {value && (
          <div style={{ marginTop: '15px' }}>
            <img src={value} alt="签名图片" />
          </div>
        )}
        {visible && (
          <Modal
            visible={visible}
            title="绘制签名"
            onCancel={this.handleCancel}
            footer={null}
          >
            <Canvas callback={this.handleSave} />
          </Modal>
        )}
      </Fragment>
    );
  }
}
