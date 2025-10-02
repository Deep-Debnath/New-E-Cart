import { clearitem } from "@/redux/slices/search";
import { List, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};
export default function SearchModal({ search }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && search && search.length > 0) {
        dispatch(clearitem());
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch, search]);

  if (!search || search.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="
          hidden sm:block
          absolute top-[3rem] right-43
          xl:w-[69%] sm:w-[56%] md:w-[59%] lg:w-[64.5%] 
          mx-auto rounded-xl 
          bg-white text-gray-900 shadow-2xl 
          border border-gray-200
          max-h-[60vh] overflow-y-auto
          backdrop-blur-md
          transition-all duration-300
          z-50
        "
      >
        <List>
          {search.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <ListItemButton
                LinkComponent={Link}
                onClick={() =>
                  setTimeout(() => {
                    dispatch(clearitem());
                  }, 300)
                }
                href={`product/${item.category}/${item.id}/${item.item}`}
              >
                <Image
                  height={60}
                  width={60}
                  alt={item.name}
                  src={item.image}
                />
                <ListItemText
                  className="pl-5"
                  primary={item.name}
                  secondary={item.category}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    style: { fontSize: "1rem" },
                  }}
                  secondaryTypographyProps={{
                    style: { fontSize: "0.85rem", color: "#666" },
                  }}
                />
              </ListItemButton>
            </motion.div>
          ))}
        </List>
      </motion.div>
    </AnimatePresence>
  );
}
