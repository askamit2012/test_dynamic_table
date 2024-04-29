import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { dataTableStyle } from '../style'
import FilterListIcon from '@mui/icons-material/FilterList';
import TableFilter from '../tableFilter'

const style = makeStyles(dataTableStyle)

function Index({ TABLE_COLUMNS, pageConfiguration, setPageConfiguration, setTableColumns }) {
  const classes = style()
  const [showPopver, setShowPopover] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterColumn, setFilterColumn] = useState([])

  function handlePopover(event, column) {
    setFilterColumn(column)
    setShowPopover(prev => !prev)
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setShowPopover(false)
    setAnchorEl(null)
  }

  return (
    <thead className={classes.tableHeaderWrapper}>
      <tr className={classes.tableHeaderItem} >
        {
          TABLE_COLUMNS?.map(column => (

            <th style={{ width: column?.maxWidth, minWidth: column?.maxWidth }}>{column?.display_name}
              {(pageConfiguration?.showFilters && column.isFilterable) && <div style={{ cursor: 'pointer', marginLeft: '10px', display: 'inline-block', flexDirection: 'column', alignItems: 'center' }} onClick={(e) => handlePopover(e, column)}><FilterListIcon sx={{ color: (column.filterCondition && (column.filterValue || (column.date && column.time && column.timeZone) || (column.date && column.date2))) ? '#0078ff' : '', fontSize: '1rem' }} color={(column.filterCondition && column.filterValue) ? '#0078ff' : 'green'} /></div>}
            </th>
          ))
        }
      </tr>
      {showPopver && <TableFilter
        isPopoverOpen={showPopver}
        handleClose={handleClose}
        filterAnchor={anchorEl}
        columns={TABLE_COLUMNS}
        setTableColumns={setTableColumns}
        column={filterColumn}
        pageConfiguration={pageConfiguration}
        setPageConfiguration={setPageConfiguration}
        setShowPopover={setShowPopover}
      />
      }
    </thead>
  )
}

export default Index