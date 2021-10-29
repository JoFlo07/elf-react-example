import { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import './FormComponent.css';

export default function AutocompleteCompomnent() {
  const [movie, setMovie] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMovie(event.target.value);
  };
  return (
    <div className="form-container">
      <div className="box">
        <TextField
          id="standard-basic"
          label="Movie"
          variant="standard"
          sx={{ width: 300 }}
          value={movie}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}