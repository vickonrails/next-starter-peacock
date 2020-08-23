import React from "react";
import HomeHeader from "./home-header";
import AboutHeader from "./about-header";

interface IHeader {
  pathname: string;
  articleTitle?: string;
  date?: Date;
  articleImage?: string;
}

const header = ({ pathname }: IHeader) => {
  switch (pathname) {
    case "/":
      return <HomeHeader />;

    case "/about":
      return <AboutHeader />;
  }

  return <div>Header</div>;
};

export default header;
