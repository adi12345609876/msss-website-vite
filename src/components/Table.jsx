import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableStyles from "../styles/modules/Table.module.scss";
import Paper from "@mui/material/Paper";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function createData(item) {
  const obj = {
    name: item[0],
    LKG: item[1],
    UKG: item[2],
    I: item[3],
    II: item[4],
    IV: item[5],
    III: item[6],
    V: item[7],
    VI: item[8],
    VII: item[9],
    VIII: item[10],
    IX: item[11],
    X: item[12],
    XI_CS: item[13],
    XI_BIO: item[14],
    XI_COMM: item[15],
    XII_CS: item[16],
    XII_BIO: item[17],
    XII_COMM: item[18],
  };

  // console.log("fn", obj);
  return obj;
}
function TableComp(props) {
  const rows = [];
  props.allrows.map((item) => {
    // console.log("item:", item);
    const rowsdata = [createData(item)];
    rows.push(rowsdata);
  });
  // console.log("ROWS", rows);
  return (
    <div key={props.i} className="">
      <h2 className={TableStyles.sectionTitle}>{props.SectionTitle}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              {props.topHeader.map((header) => {
                return (
                  <StyledTableCell align="right">{header}</StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((rowitem) => {
              const row = rowitem[0];
              console.log(row);
              return (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className={
                      row.name.endsWith("TOTAL")
                        ? "bg-cyan-400"
                        : TableStyles.header
                    }
                  >
                    <p className="text-white">{row.name}</p>
                  </StyledTableCell>

                  {Object.keys(row).map((val) => {
                    console.log(val);
                    if (val != "name") {
                      return (
                        <StyledTableCell
                          align="right"
                          className={
                            row.name.endsWith("TOTAL") && "bg-cyan-400"
                          }
                        >
                          {row[val]}
                        </StyledTableCell>
                      );
                    }
                  })}
                  {/* 
                  <StyledTableCell align="right">{row.LKG}</StyledTableCell>
                  <StyledTableCell align="right">{row.UKG}</StyledTableCell>
                  <StyledTableCell align="right">{row.I}</StyledTableCell>
                  <StyledTableCell align="right">{row.II}</StyledTableCell>
                  <StyledTableCell align="right">{row.III}</StyledTableCell>
                  <StyledTableCell align="right">{row.IV}</StyledTableCell>
                  <StyledTableCell align="right">{row.V}</StyledTableCell>
                  <StyledTableCell align="right">{row.VI}</StyledTableCell>
                  <StyledTableCell align="right">{row.VII}</StyledTableCell>
                  <StyledTableCell align="right">{row.VIII}</StyledTableCell>
                  <StyledTableCell align="right">{row.IX}</StyledTableCell>
                  <StyledTableCell align="right">{row.X}</StyledTableCell>
                  <StyledTableCell align="right">{row.XI_CS}</StyledTableCell>
                  <StyledTableCell align="right">{row.XI_BIO}</StyledTableCell>
                  <StyledTableCell align="right">{row.XI_COMM}</StyledTableCell>
                  <StyledTableCell align="right">{row.XII_CS}</StyledTableCell>
                  <StyledTableCell align="right">{row.XII_BIO}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.XII_COMM}
                  </StyledTableCell> */}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComp;
