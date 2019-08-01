import React from 'react';

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { filterProject } = this.props

    return (
      <div className='container'>
        {filterProject.map(el => <img className='img' src={el.img} />)}
      </div>
    )
  }
}

export default ProjectList;