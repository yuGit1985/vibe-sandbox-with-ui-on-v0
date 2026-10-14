import { initialCustomers } from "@/fakes/customer-data";
import { CustomerManagementScreen } from "@/ui/screens/customer-management-screen";

export default function Home() {
  return <CustomerManagementScreen initialCustomers={initialCustomers} />;
}

export const dynamic = "force-static";
