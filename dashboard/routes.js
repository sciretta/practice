// @material-ui/icons
import WebIcon from "@material-ui/icons/Web"
import TocIcon from "@material-ui/icons/Toc"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <WebIcon/>
  },
  {
    path: "/users",
    name: "Users",
    icon: <PeopleAltIcon/>
  },
  {
    path: "/services",
    name: "Services",
    icon: <TocIcon/>
  },
  {
    path: "/payments",
    name: "Payments",
    icon: <MonetizationOnIcon/>
  }
]

export default dashboardRoutes
