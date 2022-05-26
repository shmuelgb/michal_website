import React from "react";
import icon1 from "../../style/assets/icons1.png";
import icon2 from "../../style/assets/icons2.png";
import icon3 from "../../style/assets/icons3.png";
import icon4 from "../../style/assets/icons4.png";
import icon5 from "../../style/assets/icons5.png";

export default function FeaturesStrip() {
  return (
    <div className="features-strip">
      <div className="features-strip_icons">
        <div className="features-strip_icon icon5">
          <img src={icon5} alt="icon" />
          <span>התרי בניה</span>
        </div>
        <div className="features-strip_icon icon4">
          <img src={icon4} alt="icon" />
          <span>שרטוטים</span>
        </div>
        <div className="features-strip_icon icon3">
          <img src={icon3} alt="icon" />
          <span>בקרת איכות</span>
        </div>
        <div className="features-strip_icon icon2">
          <img src={icon2} alt="icon" />
          <span>ביטוחים</span>
        </div>
        <div className="features-strip_icon icon1">
          <img src={icon1} alt="icon" />
          <span>הדמיות</span>
        </div>
      </div>
    </div>
  );
}
