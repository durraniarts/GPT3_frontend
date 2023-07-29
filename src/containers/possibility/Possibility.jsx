import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";
export default function Possibility() {
  return (
    <div className="gpt3__possibility section__padding " id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility_image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early to Get Access</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h5>Request Early to Get Started</h5>
      </div>
    </div>
  );
}
