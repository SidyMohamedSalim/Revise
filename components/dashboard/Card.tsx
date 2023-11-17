import { MonitorCheck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = MonitorCheck;

  return (
    <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-2">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-800" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`
          truncate rounded-xl bg-white dark:bg-gray-900 bg px-4 py-8 text-center text-2xl`}
      >
        {value} / 3000
      </p>
    </div>
  );
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus:
      "Paid et mer  a tous pour ce magnifique bijou je trouve tu as tuee les  dslksd   dslk asdklke dlksakjds alk dsa lk sda  ldaskldaj  adlk sadlk sa lkadsasdl kdsalk etlks  lk sd kl sd ldsj sd l dsfflk sdflkk",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function ReviewsCard() {
  return (
    <div className="my-10 rounded-xl  p-2">
      <h2 className="font-bold my-4">Retour d&apos;experiences</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Utilisateurs</TableHead>
            <TableHead>Commentaires</TableHead>
            <TableHead className="text-right">Etoiles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">AA</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell className="text-right">
                <div className="rating rating-xs">
                  <input
                    title="element"
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    title="e"
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    title="el"
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    title="el"
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    title="el"
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
