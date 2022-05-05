import React from "react";
import { SocialMedia, NavigationDots } from "../components";

const AppWrap = (Component: React.FC, idName: string, className?: string) =>
  function () {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">2022 Tiến Phúc</p>
            <p className="p-text">Alright reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
