/*
 * @Author: wqjiao
 * @Date: 2019-09-02 14:42:54
 * @Last Modified by: wqjiao
 * @Last Modified time: 2019-09-02 14:43:48
 * @Description: 可选择 Table rows,可添加默 ids
 */
import React, { PureComponent } from 'react';
import { Table } from 'antd';
import styles from './index.less';

class SelectTable extends PureComponent {
  render() {
    const {
      data = {},
      scroll,
      type,
      rowKey,
      selectedRowKeys,
      getCheckboxProps,
      onSelectRow,
      onChange,
      ...rest
    } = this.props;
    const { list = [], pageNo, pageSize, total } = data;
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      current: pageNo,
      pageSize,
      total,
    };
    let rowSelection = {
      selectedRowKeys,
      onChange: onSelectRow,
      getCheckboxProps: getCheckboxProps
        ? getCheckboxProps
        : record => ({
            disabled: record.disabled,
          }),
      type: type || 'checkbox',
    };

    return (
      <div className={styles.selectTable}>
        <Table
          rowKey={rowKey || 'key'}
          rowSelection={rowSelection}
          dataSource={list}
          pagination={paginationProps}
          onChange={onChange}
          scroll={scroll || { x: '100%' }}
          {...rest}
        />
      </div>
    );
  }
}

export default SelectTable;
