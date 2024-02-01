import React, { useState } from "react";

import NavigationBar from "../Global/NavigationBar";

import Header from "../../components/Header";
import LineChart from "./LineChartGraph";
import LineChartGraph from "./LineChartGraph";
function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header>
        <i
          class="fa-solid fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </Header>
      <div className="d-flex justify-between w-100">
        <NavigationBar show={isOpen} />
        <div className="w-100">
          <div className="row w-100 justify-around">
            <div className="col-2  border rounded px-5 p-2 mt-4 bg-dark shadows">
              <div>
                <span>
                  <p>Text text</p>
                </span>
              </div>
              <div>
                <h3>$10000</h3>
              </div>
              <div>
                <p>sales up</p>
              </div>
            </div>
            <div className="col-2  border rounded px-5 p-2 mt-4 bg-dark shadows">
              <div>
                <span>
                  <p>Text text</p>
                </span>
              </div>
              <div>
                <h3>$10000</h3>
              </div>
              <div>
                <p>sales up</p>
              </div>
            </div>
            <div className="col-2  border rounded px-5 p-2 mt-4 bg-dark shadows">
              <div>
                <span>
                  <p>Text text</p>
                </span>
              </div>
              <div>
                <h3>$10000</h3>
              </div>
              <div>
                <p>sales up</p>
              </div>
            </div>
            <div className="col-2  border rounded px-5 p-2 mt-4 bg-dark shadows">
              <div>
                <span>
                  <p>Text text</p>
                </span>
              </div>
              <div>
                <h3>$10000</h3>
              </div>
              <div>
                <p>sales up</p>
              </div>
            </div>
            <div className="col-2  border rounded px-5 p-2 mt-4 bg-dark shadows">
              <div>
                <span>
                  <p>Text text</p>
                </span>
              </div>
              <div>
                <h3>$10000</h3>
              </div>
              <div>
                <p>sales up</p>
              </div>
            </div>
          </div>
          <div className="row w-100 justify-around">
            <div className="col">
              <LineChartGraph />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
