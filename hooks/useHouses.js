import { useState,useEffect } from "react";
import loadingStatus from "../helpers/loadingStatus";
import useGetRequest from "./useGetRequest";
const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const {get, loadingState} = useGetRequest("http://localhost:5000/houses")
    useEffect( ()  =>  {
  const fetchHouses = async ()  => {
    const houses = await get();
    setHouses(houses);
  }
  fetchHouses();
  
},[get])
return {houses, loadingState};
}
 
export default useHouses;