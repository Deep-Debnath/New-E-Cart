import { products } from "../../public/files";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-br from-amber-50 to-yellow-100 px-2">
        <div className="bg-white w-full rounded-lg shadow-md">
          <Typography
            variant="h6"
            sx={{
              paddingTop: 1,
              color: "black",
              paddingX: 2,
              fontWeight: "bold",
            }}
          >
            Top Deals ⭐
          </Typography>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-3">
            {products.map((item) => (
              <Card
                component={Link}
                href={`/product/${item.category}/${
                  item.id
                }/${encodeURIComponent(item.name)}`}
                key={item.id}
                sx={{
                  cursor: "pointer",
                  paddingTop: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardMedia
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    height={140}
                    width={140}
                    alt={item.name}
                    src={item.image}
                    className="object-contain transition-transform hover:scale-108"
                  />
                </CardMedia>
                <CardContent className="p-2">
                  <Typography variant="body2" color="#404040" fontWeight="500">
                    ₹{item.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-black w-full flex justify-center p-2 ">
            <p className="hover:text-red-500 cursor-pointer">see more »</p>
          </div>
        </div>
      </div>
    </>
  );
}
