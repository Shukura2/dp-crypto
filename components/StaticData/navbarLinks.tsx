import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

export const links = [
  { icon: <GridViewOutlinedIcon />, title: "Dashboard", path: "/" },
  {
    icon: <EventOutlinedIcon />,
    title: "Crypto Wallet",
    path: "/crypto-wallet",
  },
  {
    icon: <SignalCellularAltOutlinedIcon />,
    title: "Crypto Stats",
    path: "/crypto-stats",
  },
  // {
  //   icon: <FormatShapesOutlinedIcon />,
  //   title: "App",
  //   subNav: [
  //     { title: "Calendar", path: "/calendar" },
  //     { title: "Invoice", path: "/invoice" },
  //     { title: "Draggable Card", path: "/draggable-card" },
  //   ],
  // },
  {
    icon: <ShoppingCartOutlinedIcon />,
    title: "Buy & Sell",
    path: "#",
  },
  { icon: <LoopOutlinedIcon />, title: "Transactions", path: "#" },
  { icon: <TimelineOutlinedIcon />, title: "Tickers", path: "#" },
  { icon: <DonutLargeOutlinedIcon />, title: "Pages", path: "#" },
  { icon: <EmailOutlinedIcon />, title: "Mail Box", path: "#" },
  { icon: <TipsAndUpdatesOutlinedIcon />, title: "Icons", path: "#" },
  {
    icon: <BackupTableOutlinedIcon />,
    title: "UI Elements",
    path: "#",
  },
  { icon: <ListAltOutlinedIcon />, title: "Forms", path: "#" },
  { icon: <WidgetsOutlinedIcon />, title: "Widgets", path: "#" },
  { icon: <TableChartOutlinedIcon />, title: "Table", path: "#" },
  { icon: <AutoGraphOutlinedIcon />, title: "Charts", path: "#" },
  { icon: <PublicOutlinedIcon />, title: "Maps", path: "#" },
];
