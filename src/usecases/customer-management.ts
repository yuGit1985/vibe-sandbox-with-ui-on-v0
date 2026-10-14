import type { Customer } from "@/ports/customer";

export function searchCustomers(customers: Customer[], query: string) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (!normalizedQuery) return customers;

  return customers.filter((customer) =>
    `${customer.name}${customer.company}`
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  );
}

export function addCustomerNote(
  customers: Customer[],
  customerId: number,
  body: string,
  createdAt = "今日",
) {
  const trimmedBody = body.trim();
  if (!trimmedBody) return customers;

  return customers.map((customer) =>
    customer.id === customerId
      ? {
          ...customer,
          notes: [
            { id: `${customerId}-${Date.now()}`, body: trimmedBody, createdAt },
            ...customer.notes,
          ],
        }
      : customer,
  );
}

export function countActiveCustomers(customers: Customer[]) {
  return customers.filter((customer) => customer.status === "アクティブ")
    .length;
}
