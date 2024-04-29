import React, { useEffect, useState } from 'react'
import { Select, MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles';
// import { grayColor } from '../../../common_css/css_variables';
// import { Fun_NestedTernaryOprator } from '../../../utils';
import { Fun_GetFilterRenderValue } from '../controller'
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
        color: 'gray',
    },
    menuSelect: {
        width: "100%",
        "& .MuiSelect-select": {
            padding: "4px 24px 5px 0",
            fontSize: "14px"
        },
        "& .MuiMenuItem-root": {
            lineHeight: "0.8",
            fontSize: "14px",
            paddingLeft: "0px"
        }
    },
});

function Fun_NestedTernaryOprator(fn, first, second) {
    if(fn) {
        return first
    }
    return second
}


function FilterConditionAutocomplete(props) {
    let { type, apiType } = { ...props }
    const classes = useStyles()

    const [options, setOptions] = useState([])

    const textTypeNode = [
        { label: "contains", value: "contains", display: 'contains' },
        { label: "starts with", value: "startswith", display: 'starts with' },
        { label: "is equal to", value: "isequal", display: 'is equal to' },
        { label: "is not equal to", value: "isnotequal", display: 'is not equal to' }
    ]
    const textTypeJava = [
        { label: "contains", value: "contains", display: 'contains' },
        { label: "starts with", value: "startsWith", display: 'starts with' },
        { label: "is equal to", value: "equals", display: 'is equal to' },
        { label: "is not equal to", value: "notEquals", display: 'is not equal to' }
    ]

    const dateTypeNode = [
        { label: "is equal to", value: "isequal", display: 'is equal to' },
        { label: "is not equal to", value: "isnotequal", display: 'is not equal to' },
        { label: "greater than", value: "greaterthan", display: 'greater than' },
        { label: "greater than or equal to", value: "greaterthanorequal", display: 'greater than or equal to' },
        { label: "less than", value: "lessthan", display: 'less than' },
        { label: "less than or equal to", value: "lessthanorequal", display: 'less than or equal to' },
        { label: "between", value: "between", display: 'between' }
    ]
    const dateTypeJava = [
        { label: "is equal to", value: "equals", display: 'is equal to' },
        { label: "is not equal to", value: "notEquals", display: 'is not equal to' },
        { label: "greater than", value: "greaterThan", display: 'greater than' },
        { label: "greater than or equal to", value: "greaterThanOrEqualTo", display: 'greater than or equal to' },
        { label: "less than", value: "lessThan", display: 'less than' },
        { label: "less than or equal to", value: "lessThanOrEqualTo", display: 'less than or equal to' },
        { label: "between", value: "between", display: 'between' }
    ]
    const selectTypeNode = [
        { label: "is equal to", value: "isequal", display: 'is equal to' },
        { label: "is not equal to", value: "isnotequal", display: 'is not equal to' }
    ]

    const selectTypeJava = [
        { label: "is equal to", value: "equals", display: 'is equal to' },
        { label: "is not equal to", value: "notEquals", display: 'is not equal to' }
    ]

    useEffect(() => {
        getOptions()
    }, [])

    const getOptions = () => {
        let filterOptions = []
        try {
            switch (type) {
                case 'text': {
                    filterOptions = Fun_NestedTernaryOprator(apiType === 'node', textTypeNode, textTypeJava)
                    setOptions(filterOptions)
                    return
                }
                case 'date': 
                case 'dateTime': {
                    filterOptions = Fun_NestedTernaryOprator(apiType === 'node', dateTypeNode, dateTypeJava)
                    setOptions(filterOptions)
                    return
                }
                case 'select': {
                    filterOptions = Fun_NestedTernaryOprator(apiType === 'node', selectTypeNode, selectTypeJava)
                    setOptions(filterOptions)
                    return
                }
                default: {
                    filterOptions = props.optionsArray
                    setOptions(filterOptions)
                    return
                }
            }
        } catch (err) {
            console.log('err ', err)
        }
    }


    return (
        
        <>
            <Select
                displayEmpty
                className={classes.menuSelect}
                style={{ zIndex: 10000, fontSize: '15px', padding: '4px 24px 5px 0 !important' }}
                variant="standard"
                onChange={e => {
                    props.onchange(e)
                }}
                defaultValue={props.value}
                renderValue={(selected) => {
                    return Fun_GetFilterRenderValue(selected, props.value)
                }}
            >
                <MenuItem disabled style={{ zIndex: '100000 !important', padding: '12px 0px', paddingLeft: '16px' }}>Please Select</MenuItem>

                {type ? options.map(item => <MenuItem value={item.value} style={{ fontSize: '16px' }}>{item.display}</MenuItem>) : props.optionsArray.map(item => <MenuItem value={item.value} style={{ fontSize: '16px' }}>{ Fun_NestedTernaryOprator(item.display, item.display, item.label)}</MenuItem>)}
            </Select>
        </>
    )
}


export default FilterConditionAutocomplete