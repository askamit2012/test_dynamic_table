import { Typography, TextField, Box, InputAdornment, Divider } from '@mui/material'
import Popover from '@mui/material/Popover';
import React from 'react'
import FilterConditionAutocomplete from './filterConditionAutocomplete'
import { makeStyles } from "@mui/styles";
import { dataTableStyle } from '../style'
// import { Fun_NestedTernaryOprator } from '../../../utils';
import { Fun_CheckIsSearchDisabled, Fun_CheckIsClearDisabled, Fun_GetClearButtonClassName } from '../controller'

const dataTableStyles = makeStyles(dataTableStyle)

function Fun_NestedTernaryOprator(fn, first, second) {
    if (fn) {
        return first
    }
    return second
}

function Index({ isPopoverOpen, handleClose, filterAnchor, columns, setTableColumns, column, pageConfiguration, setPageConfiguration, setShowPopover }) {
    const { filterType } = { ...column }
    const classes = dataTableStyles()
    const Fun_FilterConditionChangeHandler = (e) => {
        try {
            const index = columns.findIndex(item => item.display_name === column.display_name)
            let allColumns = [...columns]
            allColumns[index].filterCondition = e.target.value
            setTableColumns(allColumns)
        } catch (err) {
            console.log('err in handling filter condition change: ', err)
        }
    }

    const Fun_ActionHandlers = async (type) => {
        switch (type) {
            case 'search': {
                setPageConfiguration({ ...pageConfiguration, isFilterActive: true, pageNumber: 1 })
                setShowPopover(false)
                return
            }
            case 'cancel': {
                setShowPopover(false)
                let index = columns.findIndex(items => items.display_name === column.display_name)
                let allColumns = [...columns]
                allColumns[index].filterCondition = ''
                allColumns[index].filterValue = ''
                if (column.date || column.time || column.timeZone || column.date2) {
                    allColumns[index].date = ''
                    allColumns[index].time = ''
                    allColumns[index].time2 = ''
                    allColumns[index].timeZone = ''
                    allColumns[index].date2 = ''
                }
                setTableColumns(allColumns)
                return
            }
            case 'clear': {
                let index = columns.findIndex(items => items.display_name === column.display_name)
                let allColumns = [...columns]
                allColumns[index].filterCondition = ''
                allColumns[index].filterValue = ''
                if (column.date || column.time || column.timeZone || column.date2) {
                    allColumns[index].date = ''
                    allColumns[index].time = ''
                    allColumns[index].timeZone = ''
                    allColumns[index].date2 = ''
                }
                setShowPopover(false)
                setTableColumns(allColumns)
                setPageConfiguration({ ...pageConfiguration, isFilterActive: true })
                return
            }
        }
    }

    const Fun_FilterInputChangeHandler = (e, item, type) => {
        let index = columns.findIndex(items => items.display_name === column.display_name)
        let allColumns = [...columns]

        switch (type) {
            case 'time': {
                allColumns[index].time = e.target.value
                setTableColumns(allColumns)
                return
            }
            case 'time2': {
                allColumns[index].time2 = e.target.value
                setTableColumns(allColumns)
                return
            }
            case 'date': {
                allColumns[index].date = e.target.value
                setTableColumns(allColumns)
                return
            }
            case 'date2': {
                allColumns[index].date2 = e.target.value
                setTableColumns(allColumns)
                return
            }
            case 'timeZone': {
                allColumns[index].timeZone = e.target.value
                setTableColumns(allColumns)
                return
            }
            case 'select':
            default: {
                allColumns[index].filterValue = e.target.value
                setTableColumns(allColumns)
                return
            }
        }
    }

    const Fun_GetFilter = () => {
        switch (filterType) {
            case 'text': {
                return (
                    <div style={{
                        color: '#05275f',
                        width: '100%',
                        fontSize: '16px',
                        marginTop: "15%"
                    }}>
                        <div>
                            <FilterConditionAutocomplete type={filterType} value={column.filterCondition} apiType={pageConfiguration.apiType} onchange={(e) => Fun_FilterConditionChangeHandler(e)} />
                        </div>
                        <div style={{ paddingLeft: 0 }}>
                            <TextField className="popsearch" variant="standard" placeholder='Search' type="text" fullWidth={true} value={column.filterValue} onChange={e => Fun_FilterInputChangeHandler(e)} />
                        </div>

                    </div>
                )
            }
            case 'date': {
                return (
                    <div>
                        <div style={{ marginTop: '10px' }}>
                            <FilterConditionAutocomplete type={filterType} value={column.filterCondition} apiType={pageConfiguration.apiType} onchange={(e) => Fun_FilterConditionChangeHandler(e)} />
                        </div>
                        <TextField className="popsearch" variant="standard" type="date" fullWidth={true} value={column.filterValue} onChange={e => Fun_FilterInputChangeHandler(e)} />
                    </div>
                )
            }
            case 'dateTime': {
                return (
                    <div>
                        <div style={{ marginTop: '20px' }}>
                            <FilterConditionAutocomplete type={filterType} value={column.filterCondition} apiType={pageConfiguration.apiType} onchange={(e) => Fun_FilterConditionChangeHandler(e)} />
                        </div>
                        {/** utc */}

                        <TextField className="popsearch" variant="standard" type="date" value={column.date} fullWidth={true} onChange={e => Fun_FilterInputChangeHandler(e, '', 'date')} />

                        <div className="andOption"> <span style={{ fontWeight: "bold", width: "100%", textAlign: "left", display: "block" }}>Time</span> </div>
                        <input
                            name="time"
                            onChange={(e) => {
                                Fun_FilterInputChangeHandler(e, '', 'time')
                            }}
                            style={{ width: "100%", border: "none", borderBottom: "1px solid #ddd", padding: "10px 0px" }}
                            className={classes.timeInp}
                            type="time" step="2"
                            value={column.time}
                            id="input-with-icon-textfieldTime"

                        />
                        <Divider />
                        {Fun_NestedTernaryOprator(column.filterCondition == "between", <>
                            <div className="andOption"> <span style={{ borderBottom: "1px solid" }}>And</span> </div>
                            <TextField
                                name="date2"
                                onChange={e => Fun_FilterInputChangeHandler(e, '', 'date2')}
                                className="popsearch"
                                type="date"
                                value={column.date2}
                                fullWidth
                                id="input-with-icon-textfield"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start"></InputAdornment>
                                    ),
                                    disableUnderline: true,
                                }}
                                variant="standard"
                            />

                            <Divider />
                        </>, <></>)}
                    </div>
                )
            }
            case 'select': {
                return (
                    <div>
                        <div style={{ marginTop: '20px' }}>
                            <FilterConditionAutocomplete type={filterType} value={column.filterCondition} apiType={pageConfiguration.apiType} onchange={(e) => Fun_FilterConditionChangeHandler(e)} />
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <FilterConditionAutocomplete optionsArray={column?.filterOptions} value={column.filterValue} onchange={(e, item) => Fun_FilterInputChangeHandler(e, item, 'select')} />
                        </div>
                    </div>
                )
            }
        }
    }



    return (
        <div>
            {Fun_NestedTernaryOprator(isPopoverOpen, <Popover
                open={isPopoverOpen}
                anchorEl={filterAnchor}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{ padding: '0 -7.5px' }}
                className={classes.authorizationIdPopOver}
            >
                <Box className="subWrapper">
                    <Typography sx={{ fontWeight: 700, fontSize: '15px' }}>Show items with value that</Typography>
                    <hr style={{
                        margin: '0px',
                        flexShrink: 0,
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        borderColor: 'rgba(0, 0, 0, 0.12)'
                    }}
                    />
                    <div style={{ margin: '10px 0' }}>
                        {Fun_GetFilter()}
                    </div>
                    <div style={{ display: 'flex', marginLeft: `${Fun_NestedTernaryOprator(classes.btnsubmit, '-8px ', '24px')}`, paddingBottom: '0', marginTop: '-8px', marginBottom: '12px' }}>
                        <button
                            disabled={Fun_CheckIsClearDisabled(column)}
                            className={Fun_GetClearButtonClassName(column, classes)}
                            variant='outlined'
                            onClick={() => Fun_ActionHandlers('clear')}>Clear</button>
                        <button
                            className={classes.btnBack}
                            variant="outlined"
                            onClick={() => Fun_ActionHandlers('cancel')}>Cancel</button>
                        <button
                            disabled={Fun_NestedTernaryOprator(Fun_CheckIsSearchDisabled(column), false, true)}
                            className={Fun_NestedTernaryOprator(Fun_CheckIsSearchDisabled(column), classes.btnsubmit, classes.btnsubmitDisbled)}
                            onClick={() => Fun_ActionHandlers('search')}>Search</button>
                    </div>
                </Box>
            </Popover>, <></>
            )}
        </div>
    )
}

export default Index