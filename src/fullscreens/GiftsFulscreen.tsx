import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function GiftsFulscreen() {
  return (
    <div className="gifts-fullscreen">
      <div className="container">
        <div className="gifts-fullscreen-caption">
          <h2 className="gifts-fullscreen-caption-title">Подарки каждому!</h2>
          <h3 className="gifts-fullscreen-caption-subtitle">
            При покупке любого инструмента в нашем магазине вы получите в
            подарок:
          </h3>
          <div className="gifts-fullscreen-presents">
            <div className="gifts-fullscreen-presents__row_1">
              <div className="gifts-fullscreen-present gifts-fullscreen-present_1">
                <div className="gifts-fullscreen-present__image">
                  <StaticImage
                    src="../images/gift.png"
                    alt=""
                    draggable="false"
                  />
                </div>
              </div>
            </div>
            <div className="gifts-fullscreen-presents__row_2">
              <div className="gifts-fullscreen-present gifts-fullscreen-present_2">
                <p>Аксессуар на выбор</p>
                <div className="gifts-fullscreen-present__image">
                  <StaticImage
                    src="../images/gift.png"
                    alt=""
                    draggable="false"
                  />
                </div>
              </div>
              <div className="gifts-fullscreen-present gifts-fullscreen-present_3">
                <p>Гарантию на инструмент</p>
                <div className="gifts-fullscreen-present__image">
                  <StaticImage
                    src="../images/gift.png"
                    alt=""
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gifts-bokeh gifts-bokeh_1">
        <div className="gifts-bokeh-wrapper">
          <div className="gifts-bokeh-circle"></div>
        </div>
      </div>
      <div className="gifts-bokeh gifts-bokeh_2">
        <div className="gifts-bokeh-wrapper">
          <div className="gifts-bokeh-circle"></div>
        </div>
      </div>
      <div className="gifts-bokeh gifts-bokeh_3">
        <div className="gifts-bokeh-wrapper">
          <div className="gifts-bokeh-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default GiftsFulscreen;
