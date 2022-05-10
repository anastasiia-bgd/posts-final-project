import React, { useState, useEffect, useContext } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import GlobalContext from '../../contexts/globalContext'

const options = ['recent', 'old', 'likes', 'comments']

export const ComboBox = () => {
    const [value, setValue] = React.useState(options[0]);

    const { comboBoxSelected, setComboBoxSelected } = useContext(GlobalContext)


    return (
        <div>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                inputValue={comboBoxSelected}
                onInputChange={(event, newInputValue) => {
                    setComboBoxSelected(newInputValue)
                }}
                options={options}
                disableClearable={true}
                sx={{ width: 200 }}
                size='small'
                renderInput={(params) => <TextField {...params} label="SORT BY" />}
            />
        </div>
    );
}