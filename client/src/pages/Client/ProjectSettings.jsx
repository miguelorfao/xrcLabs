import React from "react";

import Buttons from "../../components/Buttons";

import { useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav";

function ProjectSettings() {
  return (
    <div>
      <main>
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <SideNav />
            </div>
            <div class="col">
              {" "}
              <div className="container dashboard">
                
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default ProjectSettings;
