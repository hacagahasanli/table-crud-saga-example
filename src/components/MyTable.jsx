import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { tableCells } from "../constants";
import { DELETE_USER_BY_ID, GET_USERS } from "../redux/sagas/types";
import { setUser } from "../redux/slice/user";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MyTable() {
  const dispatch = useDispatch();
  const { usersDetails } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch({ type: GET_USERS });
  }, []);

  const deleteHandler = (id) => {
    dispatch({
      type: DELETE_USER_BY_ID,
      payload: id,
    });
  };

  const editHandler = (user) => {
    dispatch(setUser(user));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableCells?.map(({ cellName, align, id }) => {
              return (
                <TableCell key={id} align={align ?? "center"}>
                  {cellName}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {usersDetails?.map((user) => {
            const { name, email, password, id } = user;
            return (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {name}
                </TableCell>
                <TableCell align="center">{email}</TableCell>
                <TableCell align="center">{password}</TableCell>
                <TableCell align="center">
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => editHandler(user)}
                    color="secondary"
                  >
                    Make Editable
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    onClick={() => deleteHandler(id)}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
