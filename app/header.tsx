"use client";

import CenterLayout from "@/components/layout/CenterLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import ButtonTheme from "@/src/theme/ButtonTheme";
import Link from "next/link";
import React from "react";

import { signIn } from "next-auth/react";
import AvatarProfile from "@/components/ui/AvatarProfile";

const Header = ({
  userId,
  userName,
  userImage,
}: {
  userId?: string;
  userImage?: string | undefined | null;
  userName?: string | undefined | null;
}) => {
  return (
    <div>
      <CenterLayout className="flex justify-between items-center max-md:text-sm">
        <Link
          href="/"
          className="text-xl font-extrabold text-purple-700 flex items-center"
        >
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-500 text-white mr-1">
            <i className="fas fa-cogs">Re</i>
          </div>
          <div className="italic text-gray-700 dark:text-gray-200">vise</div>
        </Link>

        <nav className="flex gap-3">
          <Link
            className={cn(buttonVariants({ variant: "link" }))}
            href={"/dashboard"}
          >
            Commencer
          </Link>
          <Link className={cn(buttonVariants({ variant: "link" }))} href={"/"}>
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ButtonTheme />
          {userId ? (
            <div>
              <AvatarProfile name={userName} image={userImage} />
            </div>
          ) : (
            <Button
              onClick={async (e) => {
                await signIn();
              }}
            >
              Connexion
            </Button>
          )}
        </div>
      </CenterLayout>
      <Separator />
    </div>
  );
};

export default Header;
