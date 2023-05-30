"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Analytics from "./Analytics";

const Dashboard = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: { xs: "20px", md: "35px" },
      }}
    >
      <Analytics />
    </Box>
  );
};

export default Dashboard;
