import { Button, Container, Input, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/user";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/sagas/types";
import { v4 } from "uuid";

const defaultUserDetails = {
  id: "",
  name: "",
  email: "",
  password: "",
};

const MyForm = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);

  const handleChange = (prop) => (event) => {
    dispatch(setUser({ ...userDetails, [prop]: event.target.value }));
  };

  const { name, email, password, id } = userDetails;

  const handleSubmit = (type) => {
    type === "edit"
      ? dispatch({ type: UPDATE_USER_BY_ID, payload: userDetails })
      : dispatch({ type: CREATE_USER, payload: { ...userDetails, id: v4() } });
    dispatch(setUser(defaultUserDetails));

    // dispatch(addUser({ ...userDetails, id: uuidv4() }));
    // id == 0
    //   ?
  };

  const inputs = [
    {
      name: "id",
      // value: 0,
      placeholder: "Unique ID will generate automatically",
      disabled: true,
    },
    {
      name: "name",
      value: name,
      placeholder: "Enter Name",
    },
    {
      name: "email",
      value: email,
      placeholder: "Enter Email",
    },
    {
      name: "password",
      value: password,
      placeholder: "Enter Password",
    },
  ];

  return (
    <Container>
      {inputs?.map(({ value, placeholder, name, disabled }) => (
        <Input
          key={name}
          fullWidth
          onChange={handleChange(name)}
          {...{ placeholder, value, disabled }}
        />
      ))}
      <Button
        fullWidth
        style={{ marginTop: "0.5rem" }}
        variant="contained"
        onClick={() => handleSubmit()}
        color="secondary"
      >
        Submit
      </Button>
      <Button
        style={{ marginTop: "1rem" }}
        fullWidth
        color="secondary"
        variant="outlined"
        onClick={() => handleSubmit("edit")}
      >
        Edit
      </Button>
    </Container>
  );
};

export default MyForm;
