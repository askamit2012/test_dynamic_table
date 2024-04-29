import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import TablePagination from './tablePagination'
import { makeStyles } from "@mui/styles";
import { dataTableStyle } from './style'

const style = makeStyles(dataTableStyle)

function Index(props) {
  const classes = style()
  const { pageConfiguration, setPageConfiguration, data, TABLE_COLUMNS, setTableColumns, showPagination } = {
    ...props,
  };

  const Fun_ResetTableFilters = () => {
    props.resetTableColumns();
  }

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.secondaryWrapper}>
        <table border={0} cellPadding={0} cellSpacing={0}>
          <div style={{ position: 'absolute', top: '10%', left: '50%' }}>
            <button text="Reset Table" onClick={() => Fun_ResetTableFilters()}>Reset Filter</button>
          </div>
          <TableHeader
            TABLE_COLUMNS={TABLE_COLUMNS}
            setTableColumns={setTableColumns}
            pageConfiguration={pageConfiguration}
            setPageConfiguration={setPageConfiguration}
          />


          <TableBody
            TABLE_COLUMNS={TABLE_COLUMNS}
            pageConfiguration={pageConfiguration}
            setPageConfiguration={setPageConfiguration}
            data={data}
          />

        </table>
      </div>
      {showPagination && <TablePagination
        pageConfiguration={pageConfiguration}
        setPageConfiguration={setPageConfiguration}
      />}
    </div>
  );
}

export default Index;
