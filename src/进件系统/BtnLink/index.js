/*
 * @Author: wqjiao
 * @Date: 2019-06-11 10:59:12
 * @Last Modified by: zhuxingmin
 * @Last Modified time: 2020-10-20 09:41:34
 * @Description: BtnLink 列表按钮box
 * @params showMoreBtn: Boolean 是否启用更多下拉按钮 true false
 * @use: <BtnLink><a>按钮</a></BtnLink>
 */
import React from 'react';
import { Icon, Dropdown } from 'antd';
import styles from './index.less';

function BtnLink(props) {
    const { children, limit = 4 } = props;

    const showMoreBtn = children.length > limit;

    // 获取有用的节点
    const getCountNum = children => {
        let count = 0;
        let needRenderDom = [];
        let moreBtn = [];
        children.forEach(item => {
            if (item && item.type) {
                // 表示存在真实的节点
                count++;
                if (count < limit) {
                    needRenderDom.push(item);
                } else {
                    moreBtn.push(item);
                }
            }
        });
        if (count >= limit) {
            return (
                <div className={styles.btnLink}>
                    {needRenderDom}
                    {renderMore(moreBtn)}
                </div>
            );
        } else {
            return <div className={styles.btnLink}>{children}</div>;
        }
    };

    // 更多dom 节点
    const renderMore = moreBtn => {
        return (
            <Dropdown overlay={renderModel(moreBtn)}>
                <a className={styles.renderMoreA}>
                    更多 <Icon type="down" />
                </a>
            </Dropdown>
        );
    };

    // 弹框中的内容
    const renderModel = moreBtn => {
        return <div className={styles.renderModel}>{moreBtn}</div>;
    };

    if (showMoreBtn) {
        return getCountNum(children);
    } else {
        return <div className={styles.btnLink}>{children}</div>;
    }
}

export default BtnLink;
