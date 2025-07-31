import { createContext } from 'react';

export interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CountContext = createContext<CountContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});
