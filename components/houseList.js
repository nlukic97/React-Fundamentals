import React, { useEffect, useState } from "react";
import HouseRowMemo from "./houseRow";
import AddHousesBtn from "./addHousesButton";
import useHouses from "../hooks/useHouses";
import LoadingIndicator from "./loadingIndicator";
import loadingStatus from "../helpers/loadingStatus";
const HouseList = () => {
    const {houses,loadingState} = useHouses();
    if(loadingState !== loadingStatus.loaded){
    return  <LoadingIndicator loadingState={loadingState}></LoadingIndicator>
    }
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
              <HouseRowMemo key={house.id} house={house} />
          ))}
        </tbody>
      </table>
        <AddHousesBtn></AddHousesBtn>
    </>
  );
};

export default HouseList;

