import CenterLayout from "@/components/layout/CenterLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { quizData } from "@/lib/data";
import { quizzStart } from "@/lib/quizz";
import { cn } from "@/lib/utils";
import ButtonTheme from "@/src/theme/ButtonTheme";
import Link from "next/link";
import React from "react";

const Header = () => {
  const index = quizzStart(quizData);

  console.log(index);

  return (
    <div>
      <CenterLayout className="flex justify-between items-center">
        <Link href={"/"} className="text-lg italic">
          Revise
        </Link>
        <nav className="flex gap-3">
          <Link
            className={cn(buttonVariants({ variant: "link" }))}
            href={"/quizz"}
          >
            Get Started
          </Link>
          <Link className={cn(buttonVariants({ variant: "link" }))} href={"/"}>
            Pricing
          </Link>
          <Link className={cn(buttonVariants({ variant: "link" }))} href={"/"}>
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ButtonTheme />
          <Button>Login</Button>
        </div>
      </CenterLayout>
      <Separator />
    </div>
  );
};

export default Header;
