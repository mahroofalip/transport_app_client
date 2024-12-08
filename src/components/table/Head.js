import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
// const headCells = [
//   {
//     id: "colom1",
//     label: "colom1",
//   },
//   {
//     id: "colom2",
//     label: "colom2",
//   },
//   {
//     id: "colom3",
//     label: "colom3",
//   },
//   {
//     id: "colom4",
//     label: "colom4",
//   },
//   {
//     id: "colom5",
//     label: "colom5",
//   },
//   {
//     id: "colom6",
//     label: "colom6",
//   },
//   {
//     id: "colom7",
//     label: "colom7",
//   },
//   {
//     id: "colom8",
//     label: "colom8",
//   },
//   {
//     id: "colom9",
//     label: "colom9",
//   },
//   {
//     id: "colom10",
//     label: "colom10",
//   },
//   {
//     id: "colom11",
//     label: "colom11",
//   },
//   {
//     id: "colom12",
//     label: "colom12",
//   },
//   {
//     id: "colom13",
//     label: "colom13",
//   },
//   {
//     id: "colom14",
//     label: "colom14",
//   },
//   {
//     id: "colom15",
//     label: "colom15",
//   },
// ];


function TableHeddings(props) {
  const { order, orderBy, onRequestSort, headCells} = props;


  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells && headCells.map((headCell,i) => (
          <TableCell
            key={i}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box   component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export { TableHeddings };
