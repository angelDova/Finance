import Link from "next/link";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size={"sm"}
      variant={"outline"}
      className={cn(
        "focus:bg-white/3- w-full justify-between border-none font-normal text-white outline-none transition hover:bg-white/20 hover:text-white focus-visible:ring-transparent focus-visible:ring-offset-0 lg:w-auto",
        isActive ? "bg-white/10 text-white" : "bg-transparent",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
