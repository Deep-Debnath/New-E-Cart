import { Alert, Snackbar } from "@mui/material";

export default function Alertbox({ alert, setalert ,product}) {
  return (
    <Snackbar
      autoHideDuration={3500}
      open={alert}
      onClose={() => setalert(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity="success"
        sx={{ width: "100%" }}
        onClose={() => setalert(false)}
      >
        {product} added to cart
      </Alert>
    </Snackbar>
  );
}
