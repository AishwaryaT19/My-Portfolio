import React, { useEffect } from "react";
import { my_email } from "../texts";

export default function MainRight() {
  useEffect(() => {
    var forAnimation = document.querySelector("#main > #main-right");
    forAnimation.style[
      "animation"
    ] = `upwardAnimation 0.8s ease 0.3s 1 normal forwards`;
  }, []);
  return (
    <div id="main-right" className="only-pc">
      {my_email != "" && my_email != null && (
        <>
          <a href={`mailto:${my_email}`}>{my_email}</a>
          <div className="rule"></div>
        </>
      )}
    </div>
  );
}
