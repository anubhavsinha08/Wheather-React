import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
    let[city,setCity]= useState("")


    function handleChange(event){
        setCity(event.target.value)
    }

    let handleSubmiit=(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
    }
  return (
    <>
      <h1>Search Box</h1>
      <form onSubmit={handleSubmiit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <Button variant="outlined" type="submit">Submit</Button>
      </form>
    </>
  );
}
