import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box textAlign={'center'} mt={5}>
      <Box mb={4} >
        <Typography variant="p">For Login click on this button</Typography>&nbsp;&nbsp;
        <Link href={'/login'}><Button variant="contained">Login</Button></Link>
      </Box>
      <Box>
        <Typography variant="p">For Register click on button</Typography>&nbsp;&nbsp;
        <Link href={'/register'}><Button variant="contained">Register</Button></Link>
      </Box>
    </Box>
  );
}
