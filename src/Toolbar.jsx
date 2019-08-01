import React from 'react';


class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  onSelectFilter = (filter) => {
    this.props.onSelectFilter(filter)
  }

  render() {
    const { filters, selected } = this.props;
    return (
      <ul>
        {filters.map(filter => <li className={filter === selected ? 'toolbar__filter toolbar__filter_active' : 'toolbar__filter'} onClick={() => this.onSelectFilter(filter)}>{filter}</li>)}
      </ul>
    )
  }
}

export default Toolbar