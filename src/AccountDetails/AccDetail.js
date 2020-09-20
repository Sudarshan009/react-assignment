import React, { Component } from "react";
import PersonData from "../data/PersonData";

class AccDetail extends Component {
  render() {
    return (
      <div className="container infobox">
        <div className="columnData">
          <div>
            {PersonData.map((postDetail, index) => {
              return (
                <div>
                  <h4 class="infotitle">{postDetail.title}</h4>
                  <input
                    className="inputfield"
                    type="text"
                    value={postDetail.value}
                    readonly
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AccDetail;
