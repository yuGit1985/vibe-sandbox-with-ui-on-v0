type CustomerStatus = "アクティブ" | "休止中";

type CustomerNote = {
  id: string;
  body: string;
  createdAt: string;
};

export type Customer = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: CustomerStatus;
  lastContact: string;
  joined: string;
  location: string;
  notes: CustomerNote[];
};
