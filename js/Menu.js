import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BookIcon from "@mui/icons-material/Book";
import DifferenceIcon from "@mui/icons-material/Difference";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ForumIcon from "@mui/icons-material/Forum";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

export const menu = [
  {
    title: "Dashboard",
    role: true,
  },
  {
    icon: <HomeOutlinedIcon />,
    title: "App",
    active: true,
    items: [],
  },
  {
    icon: <LocalMallIcon />,
    title: "E-commerce",
    link: "/Ecommerce",
    items: [],
  },
  {
    icon: <TrendingUpIcon />,
    title: "Analitics",
    items: [],
  },
  {
    icon: <AccountBalanceIcon />,
    title: "Banking",
    items: [],
  },
  {
    icon: <BookOnlineIcon />,
    title: "Booking",
    items: [],
  },
  {
    icon: <InsertDriveFileIcon />,
    title: "File",
    items: [],
  },
  {
    title: "Management",
    role: true,
  },
  {
    icon: <AccountBoxIcon />,
    title: "User",
    items: [
      {
        title: "Technical Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
    ],
  },
  {
    icon: <LocalMallIcon />,
    title: "E-commerce",
    items: [
      {
        title: "Technical Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
    ],
  },
  {
    icon: <ReceiptIcon />,
    title: "Invoice",
    items: [
      {
        title: "Technical Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
    ],
  },
  {
    icon: <BookIcon />,
    title: "Blog",
    items: [
      {
        title: "Technical Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
    ],
  },
  {
    icon: <DifferenceIcon />,
    title: "File Mangement",
    items: [],
  },
  {
    title: "Apps",
    role: true,
  },
  {
    icon: <MarkEmailUnreadIcon />,
    title: "Mail",
  },
  {
    icon: <ForumIcon />,
    title: "Chat",
  },
  {
    icon: <CalendarMonthIcon />,
    title: "Calendar",
  },
  {
    icon: <ViewKanbanIcon />,
    title: "Kanban",
  },
  // {
  //   icon: <DescriptionOutlinedIcon />,
  //   title: "Blog",
  //   items: [
  //     {
  //       title: "Technical Analysis",
  //       items: [
  //         {
  //           title: "The Dow Theory",
  //           to: "/thedowtheory",
  //         },
  //         {
  //           title: "Charts & Chart Patterns",
  //           to: "/chart",
  //         },
  //         {
  //           title: "Trend & Trend Lines",
  //           to: "/trendlines",
  //         },
  //         {
  //           title: "Support & Resistance",
  //           to: "/sandr",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Fundamental Analysis",
  //       items: [
  //         {
  //           title: "The Dow Theory",
  //           to: "/thedowtheory",
  //         },
  //         {
  //           title: "Charts & Chart Patterns",
  //           to: "/chart",
  //         },
  //         {
  //           title: "Trend & Trend Lines",
  //           to: "/trendlines",
  //         },
  //         {
  //           title: "Support & Resistance",
  //           to: "/sandr",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Elliot Wave Analysis",
  //       items: [
  //         {
  //           title: "The Dow Theory",
  //           to: "/thedowtheory",
  //         },
  //         {
  //           title: "Charts & Chart Patterns",
  //           to: "/chart",
  //         },
  //         {
  //           title: "Trend & Trend Lines",
  //           to: "/trendlines",
  //         },
  //         {
  //           title: "Support & Resistance",
  //           to: "/sandr",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
