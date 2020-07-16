/*
 * @Author: zhuxingmin
 * @Date: 2020-07-07 13:47:34
 * @Last Modified by: zhuxingmin
 * @Last Modified time: 2020-07-16 09:49:44
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
    width: t.string,
    height: t.string,
    fontSize: t.string,
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

    let _str = str;
    let _textStyle = textStyle || 'rgba(97, 97, 97,0.2)';
    let can = document.createElement('canvas');
    let target = document.querySelector(body);
    target.style.position = 'relative';

    let prefix = ''; // mapMarkToWaterMask();
    _str = `${prefix}${str}`;
    // 宽高分别设置最小值 保证水印间隔  高度在字数较多时 固定加200 以保证垂直方向的间隔
    let len = getStrLength(_str);
    let _width = width || (len * fontSize) / 2;
    let _height = height || _width * Math.sqrt(3);
    can.width = _width > 480 ? _width : 480;
    can.height = _height > 500 ? _height + 200 : 500;

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

    cans.fillText(_str, 0, 0);
    summary && cans.fillText(summary, 0, fontSize);
    // 重置画布中心
    cans.translate(-ox, -oy);

    this.setState({
      url: can.toDataURL('image/png'),
    });
  };

  test = () => {
    let canvas = document.querySelector('#c1');
    const rotate = 0,
      str = '测试水印',
      len = str.length;
    const fontSize = 20,
      width = len * fontSize,
      height = fontSize;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    canvas.style.backgroundColor = '#f5f5f5';
    var ctx = canvas.getContext('2d');

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${fontSize}px microsoft yahei`;
    ctx.fillStyle = 'rgba(97, 97, 97,0.2)';

    let ox = width / 2,
      oy = height / 2;

    // 旋转中心偏移到画布中心再旋转
    ctx.translate(ox, oy);

    ctx.rotate((Math.PI / 180) * rotate);

    ctx.fillText(str, 0, 0);
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
