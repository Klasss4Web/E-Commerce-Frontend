import { PROTECTED_PATHS } from "../../../constants";
import { GrTransaction } from "react-icons/gr"
import { TiShoppingCart } from "react-icons/ti"
import { MdOutlineCategory, MdOutlineDashboard } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBell, BsStar } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";

const {
   DASHBOARD,
  PRODUCTS,
  CATEGORIES,
  CUSTOMERS,
  ORDERS,
  TRANSACTIONS,
  RATINGS,
  NOTIFICATIONS,
} = PROTECTED_PATHS;

// const userType = JSON.parse(sessionStorage.getItem("!!OPQ1"));

export const ADMIN_NAV_ITEMS = [
  {
    title: "Dashboard",
    to: DASHBOARD,
    icon: MdOutlineDashboard,
  },
  {
    title: "Products",
    to: PRODUCTS,
    icon: TiShoppingCart,
  },

  {
    title: "Customers",
    to: CUSTOMERS,
    icon: IoPeopleOutline,
  },
  {
    title: "Categories",
    to: CATEGORIES,
    icon: MdOutlineCategory,
  },

  {
    title: "Orders",
    to: ORDERS,
    icon: FiTruck,
  },
  // {
  //   title: "Merchants",
  //   to: MERCHANTS,
  //   icon: GiGalleon,
  // },
  {
    title: "Transactions",
    to: TRANSACTIONS,
    icon: GrTransaction,
  },
  {
    title: "Ratings",
    to: RATINGS,
    icon: BsStar,
  },

  {
    title: "Notifications",
    to: NOTIFICATIONS,
    icon: BsBell,
  },
];
