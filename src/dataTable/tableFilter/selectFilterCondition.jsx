import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export function Playground() {
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    //** const flatProps = {
    //**     options: top100Films.map((option) => option.title),
    //** };
    //** const [value, setValue] = React.useState(null);
    //** const [] = useState('')
    const handleChange = (e, item) => {
        console.log('select : ', e, item);
    }

    return (
        <Stack spacing={1} sx={{ width: 300 }}>

            <Autocomplete
                {...defaultProps}
                id="clear-on-escape"
                clearOnEscape
                onChange={handleChange}
                renderInput={(params) => (
                    <TextField {...params} label="clearOnEscape" variant="standard" />
                )}
            />

        </Stack>
    );
}

//** Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
];