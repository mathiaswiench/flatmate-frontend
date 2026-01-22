export default interface Flatmate {
  name: string;
  expenditure: number | undefined;
  daysAbsent: number | undefined;
}

export interface Settlement {
  debtor: string;
  creditor: string;
  amount: number;
}
