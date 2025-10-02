import { List, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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

export default function Searchinsmall({ search }) {
  return (
    <AnimatePresence>
      {search && search.length > 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="
            absolute top-[250px] left-1/2
            transform -translate-x-1/2
            w-[290px]
            mx-auto rounded-xl
            bg-white text-gray-900 shadow-2xl 
            border border-gray-200
            max-h-[60vh] overflow-y-auto
            backdrop-blur-md
            z-50
          "
        >
          <List>
            {search.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <ListItemButton
                  LinkComponent={Link}
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
      )}
    </AnimatePresence>
  );
}
