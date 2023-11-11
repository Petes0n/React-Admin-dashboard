import {Link} from 'react-router-dom'
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

import SettingsIcon from "@mui/icons-material/Settings";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AddCardIcon from '@mui/icons-material/AddCard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ReportIcon from '@mui/icons-material/Report';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
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

export const chartBoxConversion ={
  color:"gold",
  icon:'conversionIcon.svg',
  title:"Total Ratio",
  number:2.6,
  dataKey:"ratio",
  percentage:12,
  chartData:[
    { name: "Peter", ratio: 40 },
    { name: "John", ratio: 30 },
    { name: "Amoah", ratio: 80 },
    { name: "Lois", ratio: 39 },
    { name: "Zurich", ratio: 100 },
  ]

}
export const chartBoxProduct ={
  color:"skyblue",
  icon:'productIcon.svg',
  title:"Total Products",
  number:234,
  dataKey:"products",
  percentage:123,
  chartData:[
    { name: "Peter", products: 40 },
    { name: "John", products: 30 },
    { name: "Amoah", products: 80 },
    { name: "Lois", products: 39 },
    { name: "Zurich", products: 100 },
  ]

}
export const chartBoxRevenue ={
  color:"teal",
  icon:'revenueIcon.svg',
  title:"Total Revenue",
  number:234,
  dataKey:"revenue",
  percentage:564,
  chartData:[
    { name: "Peter", revenue: 80 },
    { name: "John", revenue: 30 },
    { name: "Amoah", revenue: 80 },
    { name: "Lois", revenue: 30 },
    { name: "Zurich", revenue: 60 },
  ]

}


export const barChartBoxVisit = {
  title:"Total Visit",
  color:"#FF8042",
  dataKey:"visit",
  chartData:[
    {
      name: 'Yolanda',
      visit: 20,
     
    },
    
    {
      name: 'James',
      visit: 24,
     
    },
    
    {
      name: 'Maddison',
      visit: 10,
     
    },
    
    {
      name: 'Jun',
      visit: 9,
     
    },
    
    {
      name: 'Wola',
      visit: 4,
     
    },
    
  ]
};

export const barChartBoxRevenue = {
  title:"Total Revenue",
  color:"#32CD32",
  dataKey:"revenue",
  chartData:[
    {
      name: 'Yolanda',
      revenue: 20,
     
    },
    
    {
      name: 'James',
      revenue: 24,
     
    },
    
    {
      name: 'Maddison',
      revenue: 10,
     
    },
    
    {
      name: 'Jun',
      revenue: 9,
     
    },
    
    {
      name: 'Wola',
      revenue: 4,
     
    },
    
  ]
}


export const routes=[
 
  {
    id:1,
    link:'/',
    icon:<OtherHousesIcon />,
    pathName:'Home'
  },
  {
    id:2,
    link:'/config',
    icon:<SettingsIcon />,
    pathName:'Settings'
  },
  {
    id:3,
    link:'/addProduct',
    icon:<AddCardIcon />,
    pathName:'Add Product'
  },
  {
    id:4,
    link:'/buyers',
    icon: <LocalMallIcon />,
    pathName:'Buyers'
  },
  {
    id:5,
    link:'/reconciliation',
    icon: <BarChartSharpIcon  />,
    pathName:'Reconciliation'
  },
  {
    id:6,
    link:'/reports',
    icon: <ReportIcon />,
    pathName:'Reports'
  },
];


export const addBuyerInputField =[
  {
    id:1,
    fieldId:"filled-required",
    fieldLabel:"Fullname",
    fieldVariant:"filled",
    fieldType:'text',
    fieldRequired:true
  },
  {
    id:2,
    fieldId:"filled-required",
    fieldLabel:"Email Address",
    fieldVariant:"filled",
    fieldType:'text',
    fieldRequired:true
  },
  {
    id:3,
    fieldId:"filled-required",
    fieldLabel:"Telephone number",
    fieldVariant:"filled",
    fieldType:"number",
    fieldRequired:true
  },
  {
    id:4,
    fieldId:"filled-required",
    fieldLabel:"Initial Deposit ₵",
    fieldVariant:"filled",
    fieldType:"number",
    fieldRequired:false
  }
]