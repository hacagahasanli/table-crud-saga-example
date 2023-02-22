import { Grid } from "@mui/material";
import MyForm from "./components/MyForm";
import MyTable from "./components/MyTable";

function App() {
  return (
    <>
      <Grid
        container
        spacing={6}
        style={{ maxWidth: "980px", margin: "0 auto" }}
      >
        <Grid item xs={12} md={4} lg={24}>
          <MyForm />
        </Grid>
        <Grid item xs={12} md={8} lg={24}>
          <MyTable />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
