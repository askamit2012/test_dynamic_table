import { TablePagination, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { tablePagenationStyle } from "./style";

const style = makeStyles(tablePagenationStyle);

function Index(props) {
  const {
    pageConfiguration,
    setPageConfiguration
  } = { ...props };

  const classes = style();

  useEffect(() => {
    if (
      pageConfiguration.count >
      pageConfiguration.pageNumber * pageConfiguration.pageSize
    ) {
      setPageConfiguration({ ...pageConfiguration, hasNext: true });
    } else {
      setPageConfiguration({ ...pageConfiguration, hasNext: false });
    } 
  }, [])

  const Fun_HandleChangeRowsPerPage = (e) => {
    setPageConfiguration({ ...pageConfiguration, pageSize: e.target.value })
  };



  return (
    <div>
      <TablePagination
        className={classes.pageStyle}
        component="div"
        rowsPerPageOptions={[15, 25]}
        count={pageConfiguration.count}
        rowsPerPage={pageConfiguration.pageSize}
        page={pageConfiguration.pageNumber - 1}
        hasPrev={pageConfiguration.hasPrev}
        hasNext={pageConfiguration.hasNext}
        pageConfiguration={pageConfiguration}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        // onPageChange={Fun_HandleChangePage}
        // ###### GLOB-1410 update #####
        onRowsPerPageChange={Fun_HandleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </div>
  );
}

function TablePaginationActions(props) {

  const { pageConfiguration, setPageConfiguration } = { ...props };
  
  const { count, rowsPerPage, hasPrev, hasNext } = props;
  const [selectedPage, setselectedPage] = useState(0);
  const [ismounted, setIsMounted] = useState(true);
  
  useEffect(() => {
    if (ismounted) {
      setIsMounted(false);
    }
    if (!ismounted) {
      setselectedPage(0);
    }
  }, [rowsPerPage]);


  const handleFirstPageButtonClick = () => {
    setPageConfiguration({ ...pageConfiguration, pageNumber: 1 });
  };

  const handlePreviousPageButtonClick = () => {
    if (selectedPage > 0) {
      setPageConfiguration({
        ...pageConfiguration,
        pageNumber: pageConfiguration.pageNumber - 1,
      });
    }
  };

  const handleNextPageButtonClick = () => {
    setPageConfiguration({
      ...pageConfiguration,
      pageNumber: pageConfiguration.pageNumber + 1,
    });
  };

  const handleLastPageButtonClick = () => {
    setPageConfiguration({
      ...pageConfiguration,
      pageNumber: Math.max(0, Math.ceil(count / rowsPerPage) - 1),
    });
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={!hasPrev}
        aria-label="first page"
        id="firstpagebutton"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handlePreviousPageButtonClick}
        disabled={!hasPrev}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextPageButtonClick}
        disabled={!hasNext}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={!hasNext}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default Index;
