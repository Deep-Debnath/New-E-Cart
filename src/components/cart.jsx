import { removeitem } from "@/redux/slices/cart";
import {
  Close,
  Delete,
  ShoppingCart,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import { Box, Button, Modal, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Placeorder from "./orderplace";

export default function Cart({ cart, setcart }) {
  const value = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [order, setorder] = useState(false);
  const totalprice = () => {
    const price = value.reduce((acc, item) => acc + item.price, 0);
    return price === 0 ? "" : "₹" + price;
  };

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
          <Box sx={{ position: "absolute", right: "10px" }}>
            <IconButton aria-label="close modal" onClick={() => setcart(false)}>
              <Close sx={{ color: "red" }} />
            </IconButton>
          </Box>
        </Box>

        {order && <Placeorder setorder={setorder} order={order} />}

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: 1,
            p: 1,
          }}
        >
          <ul>
            {value.length !== 0 ? (
              value.map((item) => (
                <li
                  className="text-black border-b-2 border-b-gray-300 py-2 grid grid-cols-3"
                  key={item.id}
                >
                  <div className="flex justify-center">
                    <Image
                      height={70}
                      width={70}
                      alt={item.name}
                      src={item.image}
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-nowrap marquee-text text-gray-900">
                      {item.name}
                    </h3>
                    <h4 className="text-gray-600">₹{item.price}</h4>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button
                      variant="contained"
                      endIcon={<Delete />}
                      sx={{
                        bgcolor: "red",
                        fontSize: ".7rem",
                        px: 1,
                        py: 0.5,
                        fontWeight: 600,
                      }}
                      onClick={() => dispatch(removeitem(item.id))}
                    >
                      remove
                    </Button>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-600 text-center">cart empty</p>
            )}
          </ul>
        </Box>
        <Box
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ cursor: "pointer" }}
            endIcon={<ShoppingCartCheckout />}
            color="success"
            onClick={() => {
              value.length !== 0 ? setorder(true) : null;
            }}
          >
            Checkout {totalprice()}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
