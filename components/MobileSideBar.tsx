"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet } from "./ui/sheet";

const MobileSideBar = () => {
  return (
    <Sheet>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
    </Sheet>
  );
};

export default MobileSideBar;
