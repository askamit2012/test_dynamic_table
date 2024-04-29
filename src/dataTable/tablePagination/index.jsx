import { TablePagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { tablePagenationStyle } from "./style";

const style = makeStyles(tablePagenationStyle);

function Index(props) {
  const {
    pageConfiguration,
    setPageConfiguration
  } = { ...props };

  const classes = style();

  const Fun_HandleChangeRowsPerPage = (e) => {
    setPageConfiguration({ ...pageConfiguration, pageSize: e.target.value, pageNumber: 1 })
  };

  const Fun_HandleChangePage = (_, newPage) => {
    setPageConfiguration({ ...pageConfiguration, pageNumber: newPage + 1 })
  }

  return (
    <div>
      <TablePagination
        className={classes.pageStyle}
        component="div"
        rowsPerPageOptions={ pageConfiguration?.rowsPerPageOptions ? pageConfiguration?.rowsPerPageOptions :  [15, 25]}
        count={pageConfiguration.count}
        rowsPerPage={pageConfiguration.pageSize}
        page={pageConfiguration.pageNumber - 1}
        pageConfiguration={pageConfiguration}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        showFirstButton={true}
        showLastButton={true}
        onPageChange={Fun_HandleChangePage}
        onRowsPerPageChange={Fun_HandleChangeRowsPerPage}
      />
    </div>
  );
}

export default Index;
