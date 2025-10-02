import { ShoppingCart, Search, Person } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Modal,
  Badge,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "./cart";
import { useDispatch, useSelector } from "react-redux";
import { clearitem, searchitem } from "@/redux/slices/search";
import SearchModal from "./searchmodal";
import Searchinsmall from "./searchinsmall";

const Useblemodel = ({ open, setopen }) => {
  const input = useRef(null);
  const [animate, setanimate] = useState(true);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handlesearch = (para) => {
    const value = para.trim();
    value ? dispatch(searchitem(value)) : dispatch(clearitem());
  };

  useEffect(() => {
    if (open && input.current) {
      input.current.focus();
    }
    if (open) {
      const timer = setTimeout(() => {
        if (input.current) {
          input.current.focus();
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleClose = () => {
    setanimate(false);
    dispatch(clearitem());
    setTimeout(() => {
      setopen(false);
      setanimate(true);
    }, 300);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.6)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence>
          {animate && (
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.6 }}
              animate={{ opacity: 1, y: 200, scale: 1 }}
              exit={{ opacity: 0, y: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <TextField
                inputRef={input}
                placeholder="Search for products..."
                variant="outlined"
                fullWidth
                onChange={(e) => handlesearch(e.target.value)}
                // value={inp}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    console.log(e.target.value);
                  }
                }}
                sx={{
                  maxWidth: 600,
                  bgcolor: "white",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
                  "& .MuiOutlinedInput-root": {
                    height: 50,
                    fontSize: "1rem",
                    pl: 2,
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="search"
                        onClick={() => {
                          console.log("💀");
                        }}
                      >
                        <Search sx={{ color: "#2874F0" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {search && open ? <Searchinsmall search={search} />: null}
      </Box>
    </Modal>
  );
};

export default function Navbar() {
  const [open, setopen] = useState(false);
  const [isopencart, setisopencart] = useState(false);
  const badgeviwe = useSelector((state) => state.cart);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handlesearch = (para) => {
    const value = para.trim();
    value ? dispatch(searchitem(value)) : dispatch(clearitem());
  };

  return (
    <Grid
      container
      className="w-full fixed z-1 h-12 bg-[#fff7d8] grid grid-cols-12 grid-rows-1"
    >
      <Grid sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center" padding=".7rem" color="#287fff">
          <ShoppingCart fontSize="medium" />
          <Typography>E-cart</Typography>
        </Box>
      </Grid>
      <Grid sx={{ flexGrow: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center" }} p=".25rem">
          <TextField
            variant="outlined"
            placeholder="Search products"
            fullWidth
            onChange={(e) => handlesearch(e.target.value)}
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiOutlinedInput-root": {
                height: 40,
                borderRadius: "9px",
                paddingRight: 1,
                backgroundColor: "#f1f3f6",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="search">
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Grid>
      <Grid>
        <Box className="flex mt-1" sx={{ flexGrow: 1 }}>
          <Box sx={{ display: { xs: "initial", sm: "none" } }}>
            <IconButton aria-label="search" onClick={() => setopen(true)}>
              <Search />
            </IconButton>
          </Box>
          <Box>
            <Typography variant="button" color="#30448c">
              cart
            </Typography>
            <IconButton aria-label="cart" onClick={() => setisopencart(true)}>
              <Badge badgeContent={badgeviwe.length} color="primary">
                <ShoppingCart sx={{ color: "#85116A" }} />
              </Badge>
            </IconButton>
          </Box>
          <Box>
            <Typography variant="button" color="#30448c">
              login
            </Typography>
            <IconButton aria-label="profile">
              <Person sx={{ color: "#85116A" }} />
            </IconButton>
          </Box>
        </Box>
      </Grid>
      {open ? <Useblemodel setopen={setopen} open={open} /> : null}
      {isopencart ? <Cart cart={isopencart} setcart={setisopencart} /> : null}
      {search && !open ? <SearchModal search={search} /> : null}
    </Grid>
  );
}
