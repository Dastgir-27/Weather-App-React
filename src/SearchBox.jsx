import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { weatherData } from "./helper.js";
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({settingData}){
    let [input,setInput] = useState("");
    let [error, setError] = useState(false);

    function handleInput(event){
        setInput(event.target.value);
    }

    async function handleSubmit(event){
        try{
            event.preventDefault();
            let newData = await weatherData(input);
            settingData(newData);
            setInput("");
            setError(false);
        }catch(err){
            setError(true);
        }
       
    }
    return(
          <div  className="searchBox">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="place"> <h3>🌤️Search for the Weather?</h3></label>
                    <TextField id="place" value={input} onChange={handleInput} label="City Name" variant="outlined" required />
                    <br />
                    <br />
                    <Button className="formButton" variant="contained" type="submit">Search</Button>
                    {error && <p style={{color: "red"}}>⚠️No such place exists!</p>}
                </form>
            </div>
    );
}