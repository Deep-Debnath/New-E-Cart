import { CheckCircle } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";

export default function Placeorder({ order, setorder }) {
  return (
    <Modal open={order} onClose={() => setorder(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#fff",
          height: "100px",
          width: "250px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CheckCircle sx={{ color: "green" }} fontSize="large" />
        <h1 className="pl-1 text-black"> Order Placed 🎉</h1>
      </Box>
    </Modal>
  );
}
