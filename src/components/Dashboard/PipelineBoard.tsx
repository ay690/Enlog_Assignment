import React from "react";
import { ArrowDownUpIcon } from "lucide-react";
import { useAppSelector } from "../../store";
import { type Customer } from "../../types";
import CustomerCard from "./CustomerCard";

const PipelineBoard: React.FC = () => {
  const customers = useAppSelector((state) => state.customers.customers);

  const stages = [
    { key: "contacted", title: "Contacted", icon: ArrowDownUpIcon },
    { key: "negotiation", title: "Negotiation", icon: ArrowDownUpIcon },
    { key: "offer-sent", title: "Offer Sent", icon: ArrowDownUpIcon },
    { key: "deal-closed", title: "Deal Closed", icon: ArrowDownUpIcon },
  ] as const;

  const getCustomersByStage = (stage: string): Customer[] =>
    customers.filter((c) => c.stage === stage);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {stages.map(({ key, title, icon: Icon }) => {
        const list = getCustomersByStage(key);
        return (
          <div key={key} className="rounded-lg p-4 flex flex-col space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                  {list.length}
                </span>
              </div>
              <Icon size={16} className="text-gray-400 cursor-pointer" />
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {list.map((customer) => (
                <CustomerCard
                  key={customer.id}
                  customer={customer}
                  highlighted={customer.name === "Prime Estate"}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PipelineBoard;
