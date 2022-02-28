import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import styles from "assets/jss/material-kit-react/views/readings.js";
const useStyles = makeStyles(styles);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  console.log(currentItems);
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          //   className={classes.table}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Time Received</StyledTableCell>
              <StyledTableCell align="right">Time Sampled</StyledTableCell>
              <StyledTableCell align="right">Flow Count</StyledTableCell>
              <StyledTableCell align="right">Flow Rate (L/min)</StyledTableCell>
              <StyledTableCell align="right">
                Battery Level (Volts)
              </StyledTableCell>
              <StyledTableCell align="right">Temperature (C°)</StyledTableCell>
              <StyledTableCell align="right">Total Flow (L)</StyledTableCell>
              <StyledTableCell align="right">Signal Strength</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems &&
              currentItems.map(
                ({
                  id,
                  time_received,
                  time_sampled,
                  flow_count,
                  flow_rate,
                  battery_level,
                  temperature,
                  total_flow,
                  signal_strength,
                }) => {
                  return (
                    <StyledTableRow key={id}>
                      <StyledTableCell component="th" scope="row">
                        {time_received}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {time_sampled}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {flow_count}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {flow_rate}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {battery_level}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {temperature}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {total_flow}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {signal_strength}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                }
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const ReadingsPagination = ({ itemsPerPage, readings }) => {
  const classes = useStyles();

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(readings.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(readings.data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className={classes.pagination}
        // activeClassName={classes.paginationActiveLink}
        pageLinkClassName={classes.paginationLink}
        activeLinkClassName={classes.paginationActiveLink}
        previousLinkClassName={classes.previous}
        nextLinkClassName={classes.next}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default ReadingsPagination;
