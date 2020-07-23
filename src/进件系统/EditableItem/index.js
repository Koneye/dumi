import React, { PureComponent } from 'react';
import { Input, Icon } from 'antd';
import t from 'prop-types';
import styles from './index.less';

export default class EditableItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      editable: false,
    };
  }

  static propTypes = {
    value: t.oneOfType([t.string, t.number]).isRequired,
    onChange: t.func.isRequired,
  };

  static defaultProps = {
    value: '',
    onChange: () => {},
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  check = () => {
    this.setState({ editable: false });
    const { value } = this.state;
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  edit = () => {
    this.setState({ editable: true });
  };

  render() {
    const { value, editable } = this.state;
    return (
      <div className={styles.editableItem}>
        {editable ? (
          <div className={styles.wrapper}>
            <Input
              value={value}
              onChange={this.handleChange}
              onPressEnter={this.check}
            />
            <Icon type="check" className={styles.icon} onClick={this.check} />
          </div>
        ) : (
          <div className={styles.wrapper}>
            <span>{value || ' '}</span>
            <Icon type="edit" className={styles.icon} onClick={this.edit} />
          </div>
        )}
      </div>
    );
  }
}
