import React from 'react'
import { Select, MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { grayColor } from '../../../common_css/css_variables';
const useStyles = makeStyles({
    noHoverOutline: {
        padding: '-5px 0',
        '&:hover fieldset': {
            border: ".5px solid #c1d0eb !important"
        },
        '&:active fieldset': {
            border: ".5px solid #c1d0eb !important"
        },
    },
    menuWrapper: {
        width: "100%",
        marginTop: "15%",
        fontSize: "15px",
        color: grayColor,
    },
    menuSelect: {
        width: "100%",
        "& .MuiSelect-select": {
            padding: "3px 0 4px",
            paddingLeft: "12px",
            fontSize: "14px"
        },
        "& .MuiMenuItem-root": {
            lineHeight: "0.8",
            fontSize: "14px",
            paddingLeft: "0px"
        }
    },
});


function FilterConditionAutocomplete(props) {
    
    const classes = useStyles()

    const dateTypeNode = [
        { label: "is equal to", value: "isequal", display: 'is equal to' },
        { label: "is not equal to", value: "isnotequal", display: 'is not equal to' },
        { label: "greater than", value: "greaterthan", display: 'greater than' },
        { label: "greater than or equal to", value: "greaterthanorequal", display: 'greater than or equal to' },
        { label: "less than", value: "lessthan", display: 'less than' },
        { label: "less than or equal to", value: "lessthanorequal", display: 'less than or equal to' },
        { label: "between", value: "between", display: 'between' }
    ]
    

    return (
        <>
            <Select
                className={classes.menuSelect}
                style={{ zIndex: 10000 }}
                placeholder='please select'
                value={props.value ? props.value : "Please Select"}
                variant="standard"
                onChange={e => {
                    console.log('change me! ', e.target.value)
                }}
                renderValue={(selected) => {

                    
                    return <MenuItem disabled className={classes.menuItem} sx={{ paddingLeft: "5px", fontSize: "14px" }}>"Please select"</MenuItem>;
                }}
            >
                <MenuItem disabled style={{ zIndex: '100000 !important' }}>please select</MenuItem>
                { dateTypeNode.map(item => <MenuItem value={item.value}>{ item.display }</MenuItem>) }
            </Select>
        </>
    )
}


export default FilterConditionAutocomplete