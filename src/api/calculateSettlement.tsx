import type { Settlement } from '../types';
import type Flatmate from '../types';

const isDev = import.meta.env.PUBLIC_DEV === 'true';
const API_URL = isDev
  ? import.meta.env.PUBLIC_LOCAL_API_URL
  : import.meta.env.PUBLIC_API_URL;

export const calculateSettlement = async (
  flamates: Flatmate[],
  totalDays: number,
): Promise<Settlement[]> => {
  const response = await fetch(`${API_URL}settlement`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      totalDays: totalDays,
      flatmates: flamates,
    }),
  });
  const settlement = await response.json();
  console.log(settlement);
  return settlement.settlement;
};
