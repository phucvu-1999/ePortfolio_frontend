/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

interface Props {
  active: string;
}

const NavigationDot = (props: Props) => {
  const { active } = props;

  return (
    <div className="app__navigation">
      {["home", "about", "work", "skill", "testimonial", "contact"].map(
        (item, index) => (
          <a
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
            key={item + index}
            href={`#${item}`}
          ></a>
        )
      )}
    </div>
  );
};

export default NavigationDot;
