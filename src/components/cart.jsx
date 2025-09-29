import { ShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";

export default function Cart({ cart, setcart }) {
  return (
    <Modal
      open={cart}
      onClose={() => setcart(false)}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", sm: "10%" },
          right: 0,
          bgcolor: "background.paper",
          boxShadow: 6,
          p: 2,
          borderRadius: { xs: 0, sm: 2 },
          width: { xs: "100%", sm: 350 },
          height: "90%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="primary"
            sx={{ textAlign: "center" }}
          >
            My Cart
          </Typography>
          <ShoppingCart color="primary" />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: 1,
            p: 1,
          }}
        ></Box>
        <Box
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >
          <Button variant="contained" sx={{cursor:"pointer"}} endIcon={<ShoppingCartCheckout/>} color="success">
            Checkout
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
