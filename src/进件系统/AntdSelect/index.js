import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

class AntdSelect extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.array,
    valueName: PropTypes.string,
    labelName: PropTypes.string,
  };

  static defaultProps = {
    name: '',
    data: [],
    valueName: 'value',
    labelName: 'label',
  };

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleChange = value => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const {
      name,
      data = [],
      valueName,
      labelName,
      ...rest // allowClear showSearch...
    } = this.props;
    const { value } = this.state;

    return (
      <Select
        placeholder="请选择"
        showSearch
        optionFilterProp="children"
        defaultValue={value}
        onChange={this.handleChange}
        {...rest}
      >
        {data.length > 0 &&
          data.map(item => {
            return (
              <Option
                value={item[valueName]}
                key={`${name}-${item[valueName]}`}
              >
                {item[labelName]}
              </Option>
            );
          })}
      </Select>
    );
  }
}

export default AntdSelect;
