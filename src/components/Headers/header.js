import React from 'react'
import './header.css'
import { TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import categories from '../../data/category';



const Header = ({ category, setCategory, word, setWord, LightMode }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? '#000' : '#fff'
            },
            mode: LightMode ? 'light':'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language)
        setWord("")
    }
    return (
        <div className='header'>
            <span className='title'>Word Fem</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className='search'
                        label="Search a Word"
                        id="standard-basic"
                        variant="standard"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className='select'
                        select
                        label="Language"
                        variant="standard"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {categories.map((options) => (
                            <MenuItem key={options.label} value={options.label} >
                                {options.value}
                            </MenuItem>
                        ))}

                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header