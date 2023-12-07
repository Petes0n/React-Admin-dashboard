import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AddCardIcon from "@mui/icons-material/AddCard";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import LogoutIcon from "@mui/icons-material/Logout";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export const menu = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "HomePage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/",
        icon: "profile.svg",
      },
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    image: "https://picsum.photos/200",
    username: "Peter",
    email: "popeyeyeng@umail.com",
    amount: 345,
  },
  {
    id: 2,
    image: "https://picsum.photos/200",
    username: "Gene",
    email: "john@gmail.com",
    amount: 678,
  },
  {
    id: 3,
    image: "https://picsum.photos/200",
    username: "Billy",
    email: "Billy@gmail.com",
    amount: 345,
  },
  {
    id: 4,
    image: "https://picsum.photos/200",
    username: "Paula",
    email: "petedaayeng@umail.com",
    amount: 345,
  },
  {
    id: 5,
    image: "https://picsum.photos/200",
    username: "Simpson",
    email: "simpsons@gmail.com",
    amount: 345,
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "./user.svg",
  title: "Total Users",
  number: 12.5,
  dataKey: "users",
  percentage: 77,
  chartData: [
    { name: "Peter", users: 40 },
    { name: "John", users: 800 },
    { name: "Amoah", users: 80 },
    { name: "Lois", users: 39 },
    { name: "Zurich", users: 200 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "conversionIcon.svg",
  title: "Total Ratio",
  number: 2.6,
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Peter", ratio: 40 },
    { name: "John", ratio: 30 },
    { name: "Amoah", ratio: 80 },
    { name: "Lois", ratio: 39 },
    { name: "Zurich", ratio: 100 },
  ],
};
export const chartBoxProduct = {
  color: "skyblue",
  icon: "productIcon.svg",
  title: "Total Products",
  number: 234,
  dataKey: "products",
  percentage: 123,
  chartData: [
    { name: "Peter", products: 40 },
    { name: "John", products: 30 },
    { name: "Amoah", products: 80 },
    { name: "Lois", products: 39 },
    { name: "Zurich", products: 100 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "revenueIcon.svg",
  title: "Total Revenue",
  number: 234,
  dataKey: "revenue",
  percentage: 564,
  chartData: [
    { name: "Peter", revenue: 80 },
    { name: "John", revenue: 30 },
    { name: "Amoah", revenue: 80 },
    { name: "Lois", revenue: 30 },
    { name: "Zurich", revenue: 60 },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Yolanda",
      visit: 20,
    },

    {
      name: "James",
      visit: 24,
    },

    {
      name: "Maddison",
      visit: 10,
    },

    {
      name: "Jun",
      visit: 9,
    },

    {
      name: "Wola",
      visit: 4,
    },
  ],
};

export const barChartBoxRevenue = {
  title: "Total Revenue",
  color: "#32CD32",
  dataKey: "revenue",
  chartData: [
    {
      name: "Yolanda",
      revenue: 20,
    },

    {
      name: "James",
      revenue: 24,
    },

    {
      name: "Maddison",
      revenue: 10,
    },

    {
      name: "Jun",
      revenue: 9,
    },

    {
      name: "Wola",
      revenue: 4,
    },
  ],
};

export const routes = [
  {
    id: 1,
    url: "/",
    icon: <OtherHousesIcon />,
    pathName: "Home",
  },
  {
    id: 2,
    url: "/config",
    icon: <SettingsIcon />,
    pathName: "Permissions",
  },
  {
    id: 3,
    url: "/addProduct",
    icon: <AddCardIcon />,
    pathName: "Add Product",
  },
  {
    id: 4,
    url: "/buyers",
    icon: <LocalMallIcon />,
    pathName: "Buyers",
  },
  {
    id: 5,
    url: "/reconciliation",
    icon: <BarChartSharpIcon />,
    pathName: "Reconciliation",
  },
  {
    id: 6,
    url: "/reports",
    icon: <TextSnippetIcon />,
    pathName: "Reports",
  },
  {
    id: 7,
    url: "/logout",
    icon: <LogoutIcon />,
    pathName: "Logout",
  },
];

export const addBuyerInputField = [
  {
    id: 1,
    fieldId: "filled-required",
    fieldLabel: "Fullname",
    fieldVariant: "filled",
    fieldType: "text",
    fieldRequired: true,
  },
  {
    id: 2,
    fieldId: "filled-required",
    fieldLabel: "Email Address",
    fieldVariant: "filled",
    fieldType: "text",
    fieldRequired: true,
  },
  {
    id: 3,
    fieldId: "filled-required",
    fieldLabel: "Telephone number",
    fieldVariant: "filled",
    fieldType: "number",
    fieldRequired: true,
  },
  {
    id: 4,
    fieldId: "filled-required",
    fieldLabel: "Initial Deposit ₵",
    fieldVariant: "filled",
    fieldType: "number",
    fieldRequired: false,
  },
];

export const addProductsInput = [
  {
    id: 1,
    fieldId: "filled-required",
    fieldLabel: "Product Name",
    fieldVariant: "filled",
    fieldType: "text",
    fieldRequired: true,
  },
  {
    id: 2,
    fieldId: "filled-required",
    fieldLabel: "Add Category",
    fieldVariant: "filled",
    fieldType: "text",
    fieldRequired: false,
  },
  {
    id: 3,
    fieldId: "outlined-multiline-flexible",
    fieldLabel: "Product Description",
    fieldVariant: "filled",
    fieldType: "multiline",
    rows: 4,
    fieldRequired: true,
  },
];

export const categories = [
  {
    value: "Accessories",
    label: "Accessories",
  },
  {
    value: "Desktop",
    label: "Desktop Computers",
  },
  {
    value: "Laptops",
    label: "Laptop Computers",
  },
  {
    value: "Monitors",
    label: "Monitors",
  },
];

export const homeTableData = [
  {
    id: 1,
    Product: "Acer Nitro 5",
    img: "https://picsum.photos/100",
    customer: "Peter",
    date: "1 January",
    amount: 465,
    method: "Cash",
    status: "Approved",
  },
  {
    id: 2,
    Product: "Pavilion",
    img: "https://picsum.photos/100",
    customer: "Peter",
    date: "1 January",
    amount: 465,
    method: "MOMO",
    status: "Approved",
  },
  {
    id: 3,
    Product: "HP envy",
    img: "https://picsum.photos/100",
    customer: "Peter",
    date: "1 January",
    amount: 465,
    method: "Cash",
    status: "Pending",
  },
  {
    id: 4,
    Product: "HP envy",
    img: "https://picsum.photos/100",
    customer: "Peter",
    date: "1 January",
    amount: 465,
    method: "Cash",
    status: "Pending",
  },
  {
    id: 5,
    Product: "HP 8456",
    img: "https://picsum.photos/100",
    customer: "Peter",
    date: "1 January",
    amount: 465,
    method: "Online",
    status: "Approved",
  },
  {
    id: 6,
    Product: "HP 8456",
    img: "https://picsum.photos/100",
    customer: "Peter",
    date: "1 January",
    amount: 465,
    method: "Online",
    status: "Approved",
  },
  {
    id: 7,
    Product: "HP 8456",
    img: "https://picsum.photos/100",
    customer: "Peter",
    date: "1 January",
    amount: 465,
    method: "Online",
    status: "Approved",
  },
  {
    id: 8,
    Product: "HP 8456",
    img: "https://picsum.photos/100",
    customer: "Peter",
    date: "1 January",
    amount: 465,
    method: "Online",
    status: "Approved",
  },
];

export const messagesData = [
  {
    id: 1,
    name: "Paulina Hesse",
    img: "https://picsum.photos/100",
    message:
      "Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. Houses latter an valley be indeed wished merely in my. Money doubt oh drawn every or an china. Visited out friends for expense message set eat.",
  },
  {
    id: 2,
    name: "Julius Caesar",
    img: "https://picsum.photos/100",
    message:
      "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy. Pretend am earnest offered arrived company so on. Felicity informed yet had admitted strictly how you.",
  },
  {
    id: 3,
    name: "Thug",
    img: "https://picsum.photos/100",
    message:
      "Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. Houses latter an valley be indeed wished merely in my. Money doubt oh drawn every or an china. Visited out friends for expense message set eat.",
  },
  {
    id: 4,
    name: "Jonas Jones",
    img: "https://picsum.photos/100",
    message:
      "Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no rejoiced. End friendship sufficient assistance can prosperous met. As game he show it park do. Was has unknown few certain ten promise. No finished my an likewise cheerful packages we. For assurance concluded son something depending discourse see led collected. Packages oh no denoting my advanced humoured. Pressed be so thought natural.",
  },
];

export const reconciliationRows = [
  {
    sn: 1,
    name: "Heather Owens",
    telephone: "+233 55689024",
    buyersId: 104561,
    balance: 12,
    amountPaid: 200,
  },
  {
    sn: 2,
    name: "Joana Sufre",
    telephone: "+233 55689024",
    buyersId: 187451,
    balance: 60,
    amountPaid: 500,
  },
  {
    sn: 3,
    name: "Paulina Yeboah",
    telephone: "+233 55600024",
    buyersId: 124560,
    balance: "--",
    amountPaid: 200,
  },
  {
    sn: 4,
    name: "Hughes Jefferson",
    telephone: "+233 55600024",
    buyersId: 124560,
    balance: 160,
    amountPaid: 200,
  },
  {
    sn: 5,
    name: "Anna Munroe",
    telephone: "+233 55600774",
    buyersId: 120560,
    balance: 160,
    amountPaid: 100,
  },
  {
    sn: 6,
    name: "James Jefferson",
    telephone: "+233 55600024",
    buyersId: 194560,
    balance: 10,
    amountPaid: 200,
  },
  {
    sn: 7,
    name: "Henry Hill",
    telephone: "+233 55607024",
    buyersId: 164560,
    balance: 40,
    amountPaid: 600,
  },
];

export const ReconciliationGraphData = [
  {
    name: "Heather Owens",
    uv: 80,
  },
  {
    name: "Joana Sufre",
    uv: 30,
  },
  {
    name: "Paulina Yeboah",
    uv: 20,
  },
  {
    name: "Hughes Jefferson",
    uv: 67,
  },
];

export const buyersDataRows = [
  {
    sn: 1,
    name: "Heather Owens",
    telephone: "+233 55689024",
    buyersId: 104561,
    amountPaid: 20000,
  },
  {
    sn: 2,
    name: "Joana Sufre",
    telephone: "+233 55689024",
    buyersId: 187451,
    amountPaid: 5000,
  },
  {
    sn: 3,
    name: "Paulina Yeboah",
    telephone: "+233 55600024",
    buyersId: 124560,
    amountPaid: 200,
  },
  {
    sn: 4,
    name: "Hughes Jefferson",
    telephone: "+233 55600024",
    buyersId: 124560,
    amountPaid: 200,
  },
];

export const singleUserData = [
  {
    months: "January",
    uv: 3000,
  },
  {
    months: "February",
    uv: 200,
  },
  {
    months: "March",
    uv: 2080,
  },
  {
    months: "April",
    uv: 1900,
  },
];

export const singleUserDetailData = [
  {
    id: 1,
    Month: "January",
    QuantitySold: 3000,
    itemsReceived: 4000,
    balance: 100,
    totalCash: 200,
  },
  {
    id: 2,
    Month: "February",
    QuantitySold: 200,
    itemsReceived: 400,
    balance: 2000,
    totalCash: 600,
  },
  {
    id: 3,
    Month: "March",
    QuantitySold: 2080,
    itemsReceived: 400,
    balance: 100,
    totalCash: 100,
  },
  {
    id: 4,
    Month: "April",
    QuantitySold: 1900,
    itemsReceived: 300,
    balance: 100,
    totalCash: 200,
  },
];
