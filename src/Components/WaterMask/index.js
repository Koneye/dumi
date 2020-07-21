/*
 * @Author: zhuxingmin
 * @Date: 2020-07-07 13:47:34
 * @Last Modified by: zhuxingmin
 * @Last Modified time: 2020-07-17 11:36:22
 * @Description: 水印
 */
import React, { Component } from 'react';
import t from 'prop-types';

const getStrLength = (str = '') => {
  // 一个中文字符换算成两个英文字母
  return str.replace(/[\u0391-\uFFE5]/g, 'aa').length / 2;
};

class WaterMask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  static defaultProps = {
    body: 'body',
    str: '',
    rotate: '',
    width: '',
    height: '',
    fontSize: '40px',
    textStyle: '',
  };

  static propTypes = {
    body: t.string,
    str: t.string,
    rotate: t.string,
    width: t.oneOfType([t.string, t.number]),
    height: t.oneOfType([t.string, t.number]),
    fontSize: t.oneOfType([t.string, t.number]),
    // textStyle: t.string,
  };

  componentDidMount() {
    this.renderWaterMark();
  }

  renderWaterMark = () => {
    const {
      textStyle,
      body,
      str,
      fontSize,
      summary,
      rotate,
      width,
      height,
    } = this.props;

    let _textStyle = textStyle || 'rgba(97, 97, 97,0.2)';
    let can = document.createElement('canvas');
    let target = document.querySelector(body);
    target.style.position = 'relative';

    // 宽高分别设置最小值 保证水印间隔  高度在字数较多时 固定加200 以保证垂直方向的间隔
    let len = getStrLength(str);
    let _width = width || len * fontSize;
    let _height = rotate
      ? _width * Math.abs(Math.sin((rotate * Math.PI) / 180))
      : fontSize;
    can.width = _width + fontSize;
    can.height = _height + fontSize;

    let cans = can.getContext('2d');

    let ox = can.width / 2,
      oy = can.height / 2;

    // 旋转中心偏移到画布中心再旋转
    cans.translate(ox, oy);
    cans.rotate((Math.PI / 180) * rotate);

    cans.font = `${fontSize}px Source Han Sans CN`;
    cans.textAlign = 'center';
    cans.textBaseline = 'middle';

    cans.fillStyle = _textStyle;

    cans.fillText(str, 0, 0);
    summary && cans.fillText(summary, 0, fontSize);
    // 重置画布中心
    cans.translate(-ox, -oy);

    this.setState({
      url: can.toDataURL('image/png'),
    });
  };

  render() {
    const { url = '' } = this.state;
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1000,
          pointerEvents: 'none',
          backgroundRepeat: 'repeat',
          backgroundImage: `url(${url})`,
        }}
      ></div>
    );
  }
}

export default WaterMask;
