"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import { categories } from "../../public/files";
import Image from "next/image";
import Carousel from "@/app/assets/carousel";

export default function Hero() {
  return (
    <>
      <div className="h-90 pt-12 bg-gradient-to-br from-amber-50 to-yellow-100 w-full p-2">
        <div className="h-full grid grid-flow-row gap-2 grid-rows-12">
          <div className="row-span-3 overflow-x-auto overflow-y-hidden scrollbar-none">
            <div className="flex gap-2 w-max">
              {categories.map((item) => (
                <Box key={item.key}>
                  <Card
                    className="row-span-1"
                    sx={{
                      
                      boxShadow:"none",
                      border:"none",
                      width: {
                        lg: "231px",
                        md: "186px",
                        sm: "170px",
                        xs: "160px",
                      },
                      // borderRadius: 2,
                      // boxShadow: 2,
                      "&:hover": { boxShadow: 4, transform: "scale(1.02)" },
                      transition: "0.3s",
                    }}
                  >
                    <CardActionArea
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: 70,
                          height: 70,
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.key}
                          fill
                          priority
                          style={{
                            objectFit: "cover",
                            borderRadius: "15px",
                            backgroundColor: "#fff",
                            padding: 5,
                          }}
                        />
                      </Box>

                      <CardContent sx={{ padding: "8px 0 !important" }}>
                        <Typography variant="subtitle1" fontWeight={400}>
                          {item.key}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              ))}
            </div>
          </div>
          <div className="row-span-9 w-full">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
