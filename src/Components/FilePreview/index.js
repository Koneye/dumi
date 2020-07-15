/*
 * @Author: zhuxingmin
 * @Date: 2020-04-03 17:36:28
 * @Last Modified by: zhuxingmin
 * @Last Modified time: 2020-07-09 14:22:44
 * @Description: 文件预览
 */

import React, {Component} from 'react';
import t from 'prop-types';
import {Modal, Icon, Carousel, Button} from 'antd';
import './index.less';

class Index extends Component {
    constructor(props) {
        super(props);
        this.rotate = 0;
        this.scale = 1;
    }

    static defaultProps = {
        visible: false,
        fileList: [],
        activeIndex: 0,
        slideSize: 4,
        onOk: ()=>{},
        onCancel: ()=>{},
    };

    static propTypes = {
        visible: t.bool.isRequired,
        fileList: t.array.isRequired,
        activeIndex: t.number,
        slideSize: t.number,
        onOk: t.func.isRequired,
        onCancel: t.func.isRequired,
    }

    slickPrev = () => {
        this.carousel1.prev();
    };

    slickNext = () => {
        this.carousel1.next();
    };

    slickGoTo = index => {
        this.carousel1.goTo(index);
    };

    // 判断pdf文件
    isPdf = url => {
        return url.endsWith('.pdf');
    };

    operateBtn = type => {
        this.ele = document.querySelectorAll('.slick-active.slick-current')[0];
        switch (type) {
            case 'reset':
                this.scale = 1;
                this.rotate = 0;
                break;
            case 'in':
                this.scale *= 1.1;
                break;
            case 'out':
                this.scale *= 0.9;
                break;
            case 'rotate':
                this.rotate += 90;
                break;
            default:
                break;
        }
        this.ele.style.transform = `scale(${this.scale}) rotate(${this.rotate}deg)`;
    };

    // carousel联动
    beforeChange = (from, to) => {
        this.carousel2.goTo(to);
    };

    // 重置元素
    afterChange = () => {
        if (this.ele) {
            this.ele.style.transform = `scale(1) rotate(0deg)`;
        }
    };

    componentWillUnmount() {
        this.ele = null;
    }

    render() {
        const {visible, fileList, activeIndex, slideSize} = this.props;
        const ifShowSwitchBtn = fileList.length > slideSize;
        let data = [...fileList];

        return (
            <Modal
                title="文件预览"
                visible={visible}
                onOk={this.props.onOk}
                onCancel={this.props.onCancel}
                footer={null}
                width={998}
                destroyOnClose={true}
            >
                <div className="carousel-box">
                    <div className="toolbtns">
                        <Button type="default" onClick={() => this.operateBtn('reset')}>
                            重置
                        </Button>
                        <Button
                            onClick={() => this.operateBtn('in')}
                            title="放大"
                            className="icon"
                            type="default"
                        >
                            <Icon type="zoom-in" />
                        </Button>
                        <Button
                            onClick={() => this.operateBtn('out')}
                            className="icon"
                            title="缩小"
                            type="default"
                        >
                            <Icon type="zoom-out" />
                        </Button>
                        <Button
                            onClick={() => this.operateBtn('rotate')}
                            className="icon"
                            title="旋转"
                            type="default"
                        >
                            <Icon type="reload" />
                        </Button>
                    </div>

                    <Icon
                        onClick={this.slickPrev}
                        className="carousel-arrow arrow-left"
                        type="left"
                    />
                    <Icon
                        onClick={this.slickNext}
                        className="carousel-arrow arrow-right"
                        type="right"
                    />

                    <div className="carousel">
                        <Carousel
                            ref={node => (this.carousel1 = node)}
                            arrows={false}
                            initialSlide={activeIndex}
                            dots={false}
                            beforeChange={this.beforeChange}
                            afterChange={this.afterChange}
                        >
                            {fileList.map((item, index) => {
                                return (
                                    <div key={index} className="carousel-item-box">
                                        <div className="flexbox">
                                            {this.isPdf(item.src || item.url) ? (
                                                <a
                                                    href={item.src || item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon type="file-pdf" className="pdf" />
                                                </a>
                                            ) : (
                                                <img src={item.src || item.url} alt="" />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
                <div className="carousel-box">
                    {ifShowSwitchBtn ? (
                        <Icon
                            onClick={this.slickPrev}
                            className="carousel-arrow arrow-left"
                            type="left"
                        />
                    ) : null}
                    {ifShowSwitchBtn ? (
                        <Icon
                            onClick={this.slickNext}
                            className="carousel-arrow arrow-right"
                            type="right"
                        />
                    ) : null}
                    <div className="carousel">
                        <Carousel
                            ref={node => (this.carousel2 = node)}
                            arrows={false}
                            initialSlide={activeIndex}
                            slidesToShow={slideSize}
                            dots={false}
                        >
                            {data.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="carousel-item-box"
                                        onClick={() => this.slickGoTo(index)}
                                    >
                                        {this.isPdf(item.src || item.url) ? (
                                            <Icon type="file-pdf" className="pdf" />
                                        ) : (
                                            <img src={item.src || item.url} alt="" />
                                        )}
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Index;
