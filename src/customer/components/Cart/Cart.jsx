import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map(() => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
          <hr />
          <div className="space-y-3 font-semibold mb-10">
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>$4596</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Disccount</span>
              <span className="text-green-600">$349</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Delivery Charge</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Total Amount</span>
              <span className="text-green-600">$1278</span>
            </div>
          </div>
          <Button
            onClick={handleCheckOut}
            className="w-full"
            variant="contained"
            sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
