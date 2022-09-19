import React from "react";
import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";


const AwardCard = ({award: {imgUrl, title, subtitle}})=> (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt={title} />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color: "#DCCA87"}}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
)

function Laurels() {
  return (
    <div className="app__wrapper app__bg section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />

        <h3 className="headtext__cormorant">Our Laurels</h3>
        <div className="app__laurels_awards">
          {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
}

export default Laurels;
