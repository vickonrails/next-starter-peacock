import React from 'react';
import AboutHeader from './about-header';
import HomeHeader from './home-header';
import PageHeader from './page-header';

interface IHeader {
  pathname: string;
  title: string;
  date?: Date;
  articleImage?: string;
}

const header = ({ pathname, title }: IHeader) => {
  switch (pathname) {
    case '/':
      return <HomeHeader />;

    case '/about':
      return <AboutHeader />;

    default:
      return <PageHeader headingTitle={title} />;
  }
};

export default header;
