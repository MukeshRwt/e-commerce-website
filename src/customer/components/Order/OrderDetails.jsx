import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>

      <Grid className="space-y-5 container">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="font-semibold">
                    Men Solid Pure Cotton Straight Kurta
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold ">
                    <span>Color : pink</span>
                    <span> Size : M</span>
                  </p>
                  <p className=" ">Seller : Linaria</p>
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
