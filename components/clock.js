import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Clock() {
  const [currentTime, setTime] = useState(new Date());
  return (

    <div className={styles.description}>
      <div className={styles.clock}>
        <h2>Choose a time that works for you!</h2>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={currentTime}
            onChange={(newTime) => {
              setTime(newTime);
            }}
          />
        </LocalizationProvider>

      </div>
    </div>
  );
}
