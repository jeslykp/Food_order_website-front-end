import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import emptyCart from "../assets/empty-cart.svg";
import { Link } from "react-router-dom";

export default function RestaurantDetailsPage() {
  const categories = ["Starters", "Main Course", "Desserts", "Drinks"];
  const menuItems = [
    { id: 1, name: "Margherita Pizza", price: "$10" },
    { id: 2, name: "Pasta Alfredo", price: "$12" },
    { id: 3, name: "Veg Burger", price: "$8" },
  ];

  return (
    <Box className="p-6 bg-gray-100 min-h-screen">
      {/* ================= Restaurant Details ================= */}
      <Card className="mb-4">
        <CardContent>
          <Typography variant="h4" className="font-bold">
            Restaurant Name
          </Typography>
          <Typography color="text.secondary">
            Italian • $$ • 30–40 mins
          </Typography>
        </CardContent>
      </Card>

      {/* ================= Tabs Section ================= */}
      <Box className="mb-6 border-b">
        <Tabs value={0} textColor="inherit" indicatorColor="primary">
          <Tab label="Menu" />
          <Tab label="Reviews" />
          <Tab label="Info" />
        </Tabs>
      </Box>

      <Box className="grid grid-cols-12 gap-6">
        <Box className="col-span-2 bg-white p-4 rounded-xl shadow">
          <Typography variant="h6" className="mb-3 font-semibold">
            Categories
          </Typography>

          <ul className="space-y-2">
            {categories.map((c) => (
              <li
                key={c}
                className="text-sm text-gray-800 cursor-pointer hover:underline"
              >
                {c}
              </li>
            ))}
          </ul>
        </Box>

        <Box className="col-span-7">
          <Box className="grid gap-4">
            {menuItems.map((item) => (
              <Card key={item.id} className="shadow-sm border">
                <CardContent className="flex justify-between items-center">
                  <div>
                    <Typography variant="subtitle1" className="font-medium">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className="font-semibold text-gray-600"
                    >
                      {item.price}
                    </Typography>
                  </div>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "rgb(245,89,5)",
                      borderRadius: "8px",
                      paddingX: 3,
                    }}
                  >
                    Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Box className="col-span-3 ">
          <Card className="text-white mb-4">
            <CardContent className="text-center font-semibold text-lg  bg-[rgb(245,89,5)] text-white">
              Your Cart
            </CardContent>
          </Card>

          <Card className="h-64 p-4 flex flex-col items-center justify-center">
            <img
              src={emptyCart}
              alt="Empty Cart"
              className="max-h-[70%] max-w-[70%] object-contain mb-2"
            />
            <Typography>There are no items in the shopping cart.</Typography>
          </Card>

          <Box className="mt-4">
            <Link to="/ordersummary">
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  backgroundColor: "rgb(245,89,5)",
                  borderRadius: "8px",
                }}
              >
                Checkout
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
