import { Box, Divider, IconButton, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import {
  ecommercelist,
  Totalcommercelist,
} from "../../redux/features/counter/ecommerceSlice";
import DeleteIcon from "@mui/icons-material/Delete";

function CartItem() {
  const CartValue = useSelector((state) => ecommercelist(state));
  const Totalcommercelistdata = useSelector((state) =>
    Totalcommercelist(state)
  );

  return (
    <Box>
      <Typography
        variant="inherit"
        className="text-2xl px-5 font-semibold tracking-widest"
      >
        Cart
      </Typography>
      <Box className="px-5 py-1">
        <Divider />
      </Box>
      <Box className="scrollbar-thin scrollbar-thumb-slate-300 scrollbar-thumb-rounded-md h-[65vh]">
        {CartValue?.length > 0 &&
          [...new Set(CartValue)].map((item, i) => (
            <Box
              key={i}
              className="flex px-5 border-2 my-5 p-2 rounded-lg border-black "
            >
              <Image
                className="group-hover:scale-125 transition-all px-2"
                width={80}
                height={100}
                src={item.image}
                alt={item.image}
              />
              <Box className="w-64 m-2 truncate flex flex-col">
                <Typography variant="inherit">{item.title}</Typography>
                <Box className="flex items-center">
                  <Box className="flex-1">
                    <Typography variant="inherit" className="flex-1 flex">
                      Items :{" "}
                      <strong className="px-2">
                        {CartValue.filter((e) => e.id == item.id)?.length}
                      </strong>
                    </Typography>
                    <Typography variant="inherit" className="flex-1 flex">
                      ${" "}
                      {item.price *
                        CartValue.filter((e) => e.id == item.id)?.length}
                    </Typography>
                  </Box>
                  <IconButton>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
      <table class="w-full py-5">
        <tbody>
          <tr className="flex justify-between px-5 border-b-2 border-black py-1">
            <td>Total</td>
            <td>$ {parseFloat(Totalcommercelistdata).toFixed(2)}</td>
          </tr>
          <tr className="flex justify-between px-5 border-b-2 border-black py-1">
            <td>Taxes</td>
            <td>$ 5</td>
          </tr>
          <tr className="flex justify-between px-5 border-b-2 border-black border-dashed py-1">
            <td>Sub Total</td>
            <td>$ {parseFloat(Totalcommercelistdata + 5).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}

export default CartItem;
