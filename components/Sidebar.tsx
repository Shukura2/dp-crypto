"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { links } from "./StaticData/navbarLinks";

type Props = {
  max: boolean;
};

const Sidebar = ({ max }: Props) => {
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <div>
      {max ? (
        <List
          sx={{
            width: "240px",
            height: "100vh",
            position: "fixed",
            overflow: "scroll",
            top: "70px",
            backgroundColor: theme.palette.background.default,
            "::-webkit-scrollbar": {
              display: "none",
            },
            ":hover": {
              "::-webkit-scrollbar": {
                display: "block",
                width: "10px",
              },
              " ::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "5px",
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.background.default,
              },
            },
          }}
        >
          {links.map((label) => (
            <ListItem key={label.title}>
              <Link href={label.path} style={{ width: "100%" }}>
                <ListItemText
                  sx={{
                    padding: "8px",
                    borderRadius: "10px",
                    backgroundColor:
                      pathname === label.path ? theme.palette.primary.main : "",
                    color: theme.palette.primary.dark,
                    ":hover": {
                      background: theme.palette.primary.main,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "10px",
                    }}
                  >
                    <span> {label.icon}</span>
                    <span>{label.title}</span>
                  </Box>
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <List
          sx={{
            width: "150px",
            height: "100vh",
            position: "fixed",
            overflow: "scroll",
            top: "70px",
            backgroundColor: theme.palette.background.default,
            "::-webkit-scrollbar": {
              display: "none",
            },
            ":hover": {
              "::-webkit-scrollbar": {
                display: "block",
                width: "10px",
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.background.default,
              },
              " ::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "5px",
              },
            },
          }}
        >
          {links.map((label) => (
            <ListItem key={label.title}>
              <Link href={label.path} style={{ width: "100%" }}>
                <ListItemText
                  sx={{
                    padding: "8px",
                    borderRadius: "10px",
                    textAlign: "center",
                    backgroundColor:
                      pathname === label.path ? theme.palette.primary.main : "",
                    color: theme.palette.primary.dark,
                    ":hover": {
                      background: theme.palette.primary.main,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <span>{label.icon}</span>
                    <span style={{ fontSize: "14px" }}>{label.title}</span>
                  </Box>
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Sidebar;
