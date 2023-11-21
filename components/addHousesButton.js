
const AddHousesBtn = () => {
 
  const addHouse = async () => {
   const response = await  fetch("http://localhost:5000/houses", {
      method: "POST",
      body: JSON.stringify({
        id: 9,
        address: "Milana Tokina 3",
        country: "Serbia",
        price: 1000
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
     })
  };
  return(
    <>
    <button className="addBtnHouses" onClick={addHouse}>Add</button>
    </>
  )
}
export default AddHousesBtn ; 
