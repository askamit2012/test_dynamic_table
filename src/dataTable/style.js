// import { BorderBottom } from '@mui/icons-material';
// import { lightGrayColor, whiteColor, grayColor, primaryColor, smallFont, bigFont } from '../../common_css/css_variables'


export const dataTableStyle = {
  mainWrapper: {
    margin: "10px 10px 0 20px",
    background: "#F8F9FD",
    height: "calc(100vh - 180px)",
    '@media (max-width: 1200px)': {
      height: "calc(100vh - 220px)"
    }
  },
  secondaryWrapper: {
    width: "100%",
    height: 'calc(100% - 10px)',
    minWidth: "max",
    background: "#FFF",
    overflow: "auto",
    paddingBottom: "20px",
    marginBottom: '120px',
    '& table':{width:"100%"}
    // maxWidth: 'max-content'
  },
  tableHeaderWrapper: {
 
    // display: "flex",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    // padding: "0 10px",
    // minWidth: "fit-content",
    // background: "#F8F9FD",
    // position: "sticky",
    // top: 0
  },
  tableHeaderItem: {
    overflow: "auto",
    fontSize: "13px",
    fontWeight: 700,
    color: "#637381",  
    "& th": {  padding: '7px 7px 7px 20px !important', textAlign:"left",  borderBottom:"1px solid #d9d9d9", height:"40px", }
  },
  tableBodyWrapper: {
    // display: "flex",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    // padding: "5px 10px",
    // minWidth: "fit-content",
    // borderBottom: "1px solid #F8F9FD;",
    // overflow: 'auto',
    // '&:hover': {
    //   background: lightGrayColor
    // }
  },
  tableBodyItem: {
    fontSize: "13.5px",
    fontWeight: 400,
    color: "#637381",
    overflow: 'hidden',
    padding: '4px 7px 4px 20px !important',
    borderBottom:"1px solid #d9d9d9"
  },
  noRecordsFound: {
    textAlign: 'center'
  },
  btnBack: {
    padding: "5px",
    borderRadius: "5px",
    paddingLeft: "12px",
    paddingRight: "12px",
    backgroundColor: '#FFF',
    border: ".5px solid #637381",
    color: 'gray',
    marginTop: "30px",
    margin: '12px',
    cursor: "pointer",
    "&:hover": {
      border: ".5px solid #05275F",
      color: 'gray',
    },
  },
  btnsubmit: {
    padding: "5px",
    borderRadius: "5px",
    paddingLeft: "12px",
    paddingRight: "12px",
    backgroundColor: "#007BFF",
    border: ".5px solid #C4D2EC",
    color: '#FFFFFF',
    marginBottom: "9px",
    marginTop: "27px",
    cursor: "pointer",
    "&:hover": {
      border: ".5px solid #0069D9",
      backgroundColor: "#0069D9",
      color: '#FFFFFF',
    },
  },
  btnsubmitDisbled: {
    padding: "5px",
    borderRadius: "5px",
    paddingLeft: "12px",
    paddingRight: "12px",
    border: ".5px solid #C4D2EC",
    marginBottom: "9px",
    marginTop: "29px",
  },
  authorizationIdPopOver: {
    top: `12px !important`,
    left: "-130px !important",
    zIndex: '100 !important',
    "& .subWrapper": {
      width: "265px",
      fontSize: "15px",
      padding: "25px",
      paddingBottom: "0px",
      borderRadius: "25px !important",
      color: 'gray',
    },
    "& .menuWrapper": {
      width: "100%",
      marginTop: "15%",
      fontSize: "15px",
      color: 'gray',
    },
    "& .popsearch": {
      marginTop: "11%",
      fontSize: "15px",
      color: 'gray',
    },
    "& .popBtnwrapper": {
      // textAlign: "center",
      // float: "right",
      marginBottom: "5%",
      display: "flex",
      justifyContent: "center",
    },
    "& .andOption": {
      marginTop: "11%",
      textAlign: "center"
    },
  },
  menuItemstyle: {
    paddingLeft: "8px", fontSize: '16px'
  },
  activeFilterIcon: {
    color: "#0078ff",
    background: 'blue'
  }
};
