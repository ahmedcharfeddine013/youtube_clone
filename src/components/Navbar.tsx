import { Stack } from "@mui/material";
import Link from "next/link";

import { logo } from "../utils/constants";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link href="/" style={{ display: "flex", alignItems: "center" }}>
      <Image src={logo} alt="logo" height={45} width={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
