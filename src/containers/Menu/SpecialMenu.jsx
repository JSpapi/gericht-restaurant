import React from "react";
import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
function SpecialMenu() {
  return (
    <div className="app__sepcialMenu flex__center section__padding">
      <div className="app__sepcialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h3 className="headtext__cormorant">Today's Special</h3>
      </div>

      <div className="app__sepcialMenu-menu">
        <div className="app__sepcialMenu-menu_wine flex__center">
          <p className="app__sepcialMenu_menu-heading">Wine & Beer</p>
          <div className="app__sepcialMenu_menu_items">
            {data.wines.map(({wine, index, title, price, tags}) => (

              <MenuItem 
                key={title + index} 
                title={title} 
                price={price} 
                tags={tags}
              />

            ))}
          </div>
        </div>
        <div className="app__sepcialMenu-menu_img">
          <img src={images.menu} alt="special menu" />
        </div>

        <div className="app__sepcialMenu-menu_cocktails flex__center">
          <p className="app__sepcialMenu_menu-heading">Cocktails</p>
          <div className="app__sepcialMenu_menu_items">
            {data.cocktails.map(({cocktail, index, title, price, tags}) => (
              <MenuItem 
                key={title + index} 
                title={title} 
                price={price} 
                tags={tags}
              />
            ))}
          </div>
        </div>
      </div>
      <button type="button" className="custom__btn">View More</button>
    </div>
  );
}

export default SpecialMenu;
