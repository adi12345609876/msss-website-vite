import * as React from "react";
import TableComp from "../components/Table";
import FeeContent from "../../public/data/FeeTable-ContentBloack.json";

export default function CustomizedTables() {
  const results = [];
  {
    FeeContent?.map((arr) => {
      arr?.map((items, index) => {
        results.push(
          <TableComp
            SectionTitle={items.SectionTitle}
            topHeader={items.topHeader}
            allrows={items.row}
            i={index}
          />
        );
      });
    });
  }
  return (
    <div className="items-center justify-center flex flex-col mb-4">
      {results}
      {/* 
      <h2>Term I - Apr-23 TO Jul-23</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              {topHeader.map((header) => {
                return (
                  <StyledTableCell align="right">{header}</StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
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
                <StyledTableCell align="right">{row.XI}</StyledTableCell>
                <StyledTableCell align="right">{row.XII}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
}
