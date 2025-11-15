import { useState } from "react";
import { Link } from "react-router-dom";
import {  IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProfilePopup from "./login";

export default function Navbar() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <nav className="bg-[rgb(244,237,227)] p-5 flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src="https://www.talabat.com/assets/images/remix-logo.svg"
              alt="TalabatClone Logo"
              className="w-[130px]"
            />
          </Link>
        </div>
        <div>
          <IconButton>
            <img
              src="https://www.talabat.com/assets/images/ar.svg"
              alt="ar"
            ></img>
          </IconButton>

          <IconButton
            onClick={() => setOpenPopup(true)}
            size="large"
            sx={{ color: "rgb(245,89,5)" }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <IconButton sx={{backgroundColor:"white"}}>
            <img src="https://www.talabat.com/assets/images/new_cart_icn.png" alt="cart"  className="h-6"/>
          </IconButton>
        </div>
      </nav>

      <ProfilePopup open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
}
