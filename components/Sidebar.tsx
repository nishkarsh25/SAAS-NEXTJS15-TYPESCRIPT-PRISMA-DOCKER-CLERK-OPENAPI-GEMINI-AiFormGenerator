import React, { JSX } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import { ChartSpline, ClipboardList } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import UpgradeButton from "./UpgradeButton";
import { currentUser } from "@clerk/nextjs/server";

type MenuItems = {
  title: string;
  url: string;
  icon: JSX.Element;
};

const items: MenuItems[] = [
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: <ChartSpline />,
  },
  {
    title: "My Forms",
    url: "/dashboard/forms",
    icon: <ClipboardList />,
  },
];

const DashboardSidebar = async () => {
  const user = await currentUser();
  return (
    <Sidebar>
      
    </Sidebar>
  );
};

