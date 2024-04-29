// import { Fun_ORTernaryOprator, Fun_NestedTernaryOprator } from "../../utils";
import { MenuItem } from '@mui/material'

export const Fun_GetFilterRenderValue = (selected, value) => {

    if (selected?.length === 0) {
        return <MenuItem disabled sx={{ paddingLeft: "0", paddingBottom: '8px' }}>{Fun_NestedTernaryOprator(value.length > 0, <span style={{ fontSize: '18px' }}>"Please Select"</span>, <span style={{ fontSize: '18px' }}>Please Select</span>)}</MenuItem>;
    } else if (value === 'equals' || value === 'isequal') {
        return 'is equal to'
    } else if (value === 'contains') {
        return <MenuItem style={{ fontSize: '16px' }}>contains</MenuItem>
    } else if (value === 'startswith' || value === 'startsWith') {
        return 'starts with'
    } else if (value === 'isnotequal' || value === 'notEquals') {
        return 'is not equal to'
    } else if (value === 'greaterthan' || value === 'greaterThan') {
        return "greater than"
    } else if (value === 'lessthan' || value === 'lessThan') {
        return 'less than'
    } else if (value === 'greaterthanorequal' || value === 'greaterThanOrEqualTo') {
        return 'greater than or equal to'
    } else if (value === 'lessthanorequal' || value === 'lessThanOrEqualTo') {
        return 'less than or equal to'
    } else if (value === 'between') {
        return 'between'
    } else {
        return value
    }
}

export const Fun_CheckIsSearchDisabled = (column) => {
    if (column.filterCondition) {
        if (column.filterValue) return true
        if (column.timeZone && column.date && column.time) return true
        if (column.date && column.date2) return true
    }
    return false
}

export const Fun_CheckIsClearDisabled = (column) => {
    return Fun_NestedTernaryOprator(column.filterCondition && (column.filterValue || (column.date && column.time && column.timeZone) || (column.date && column.date2)), false, true)
}

export const Fun_GetClearButtonClassName = (column, classes) => {
    return Fun_NestedTernaryOprator(column.filterCondition && (column.filterValue || (column.date && column.time && column.timeZone) || (column.date && column.date2)), classes.btnBack, classes.btnsubmitDisbled)
}

const Fun_NestedTernaryOprator = (condition, first, second) => {
    if(condition) {
        return first
    }
    return second
}