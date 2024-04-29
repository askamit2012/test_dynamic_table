import { makeStyles } from "@mui/styles";
import React from "react";
import { dataTableStyle } from "../style";

const style = makeStyles(dataTableStyle)
const getTitle = (type) => {
  if (type == "date") {
    return localStorage.getItem('user_time_zone');
  }
  return ""
}
function index({
  TABLE_COLUMNS,
  data,
}) {
  const classes = style()
  return (
    <tbody>
      {data.length > 0 && data?.map((singleData) => (

        <tr className={classes.tableBodyWrapper}>
          {TABLE_COLUMNS?.map((column) => (
            <td style={{ width: column?.maxWidth, minWidth: column?.maxWidth }} title={getTitle(column?.type)} className={classes.tableBodyItem} >
              {singleData?.[column?.name] ? singleData?.[column?.name] : '...'}
            </td>
          ))}
        </tr>

      ))}
      {data.length === 0 && <p className={classes.noRecordsFound}>No Records Found</p>}
    </tbody>
  );
}

export default index;
