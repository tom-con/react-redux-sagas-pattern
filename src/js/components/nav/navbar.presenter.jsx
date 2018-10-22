import React from 'react';

const NavBar = ({ children }) => {

  const navStyle = {
    padding: '30px'
  }

  const activeItemStyle = {
    color: '#42b983'
  }

  const inactiveItemStyle = {
    fontWeight: 'bold',
    color: '#2c3e50'
  }

  const childrenWithStyles = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { index, activeStyle: activeItemStyle, inactiveStyle: inactiveItemStyle })
  })

  const Bar = () => (<span> | </span>)

  const addedBars = childrenWithStyles.reduce((list, child, i) => {
    if (i >= 0 && i < childrenWithStyles.length - 1) list.push(child, <Bar key={`bar-${i}`} />)
    else list.push(child)
    return list
  }, [])

  return (
      <div
        style={navStyle}
      >
        {addedBars}
      </div>
  )
}

export default NavBar
