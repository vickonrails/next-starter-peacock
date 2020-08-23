import React from "react";
import HomeHeader from "./home-header";

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
  }

  return <div>Header</div>;
};

export default header;
