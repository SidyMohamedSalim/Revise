import { Card, ReviewsCard } from "@/components/dashboard/Card";
import CenterLayout from "@/components/layout/CenterLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <CenterLayout>
        <div>
          <Link
            href={"/quizz"}
            className={cn(buttonVariants(), "my-8 self-end")}
          >
            Generer un examen
          </Link>
        </div>

        {/* card stats */}
        <div className="grid grid-cols-2 gap-8">
          <Card title="Utilisations" value={30} type="invoices" />
          <Card title="Historiques" value={1600} type="invoices" />
        </div>

        {/* card reviews */}
        <ReviewsCard />
      </CenterLayout>
    </div>
  );
};

export default page;
