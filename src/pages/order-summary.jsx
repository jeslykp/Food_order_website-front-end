import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function OrderSummary() {
  const orderSummary = {
    items: [
      { id: 1, name: "Burger Meal", price: 25, quantity: "2" },
      { id: 2, name: "Fries", price: 14, quantity: "1" },
    ],
    subtotal: 39,
    deliveryFee: 9.5,
    serviceFee: 1.95,
    total: 50.45,
    paymentMethod: "Credit Card",
  };

  const address = {
    name: "John Doe",
    phone: "+971 50 123 4567",
    addressLine: "Flat 308, Marina Bay Towers",
    city: "Dubai",
  };
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <Box className=" min-h-screen bg-gray-100 p-6 flex flex-col gap-6 px-[500px]">
      {/* Order Summary */}
      <Card className="shadow-lg border-gray-300 ">
        <CardContent>
          <Typography
            variant="h5"
            className="font-semibold pb-8 text-center text-[rgb(245,89,5)] border-gray-300"
          >
            Order Summary
          </Typography>

          {/* Header Row */}
          <Box className="flex justify-between p-2 border-b font-bold text-gray-700 bg-gray-100 ">
            <Typography fontWeight="bold">Item</Typography>

            <div className="flex gap-10">
              <Typography fontWeight="bold">Qty</Typography>
              <Typography fontWeight="bold">Price</Typography>
            </div>
          </Box>

          {/* Items */}
          {orderSummary.items.map((item) => (
            <Box key={item.id} className="flex justify-between py-2 ">
              <Typography>{item.name}</Typography>

              <div className="flex gap-10">
                <Typography>{item.quantity}</Typography>
                <Typography>AED {item.price}</Typography>
              </div>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Delivery Address */}
      <Card className="shadow-lg">
        <CardContent>
          <Typography
            variant="h5"
            className="font-semibold mb-8 text-center border-b  border-gray-300  text-[rgb(245,89,5)]"
          >
            Delivery Address Details
          </Typography>

          <Box className="flex flex-col gap-1 ps-4 pt-4">
            <Typography className="font-medium">{address.name}</Typography>
            <Typography>{address.phone}</Typography>
            <Typography>{address.addressLine}</Typography>
            <Typography>{address.city}</Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Payment + Summary Row */}
      <Box className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Payment Options */}
        <Card className="shadow-lg flex-1">
          <CardContent>
            <Typography
              variant="h5"
              className="font-semibold mb-4 text-center border-b border-gray-300 text-[rgb(245,89,5)]"
            >
              Payment Options
            </Typography>

            <Box className="flex flex-col gap-3 pt-6 items-center">
              <FormControl component="fieldset">
                <RadioGroup
                  name="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel
                    value="card"
                    control={<Radio sx={{ color: "rgb(245,89,5)" }} />}
                    label="Credit Card"
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      width: "250px",
                      marginBottom: "10px",
                      border: "1px solid #e0e0e0",
                    }}
                  />

                  <FormControlLabel
                    value="cod"
                    control={<Radio sx={{ color: "rgb(245,89,5)" }} />}
                    label="Cash on Delivery"
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      width: "250px",
                      border: "1px solid #e0e0e0",
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </CardContent>
        </Card>

        {/* Price Summary */}
        <Card className="shadow-lg w-full lg:w-1/3">
          <CardContent>
            <Typography variant="h6" className="font-semibold mb-4">
              Summary
            </Typography>

            <Box className="flex justify-between py-1">
              <Typography>Subtotal:</Typography>
              <Typography>AED {orderSummary.subtotal}</Typography>
            </Box>

            <Box className="flex justify-between py-1">
              <Typography>Delivery fee:</Typography>
              <Typography>AED {orderSummary.deliveryFee}</Typography>
            </Box>

            <Box className="flex justify-between py-1">
              <Typography>Service fee:</Typography>
              <Typography>AED {orderSummary.serviceFee}</Typography>
            </Box>

            <Divider className="my-3" />

            <Box className="flex justify-between py-1 font-semibold">
              <Typography>Total amount:</Typography>
              <Typography>AED {orderSummary.total}</Typography>
            </Box>

            <Link to="/confirmation">
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ backgroundColor: "rgb(245,89,5)", borderRadius: "8px" }}
              >
                Place order
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
