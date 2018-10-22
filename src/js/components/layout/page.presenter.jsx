import React from 'react';

import NavBar from '../nav/navbar.container';
import Title from './title.presenter';

const Page = ({ children, title }) => {

  return (
      <div>
        <NavBar />
        <Title
          text={title}
        />
        {children}
      </div>
  )
}

export default Page
