import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '@/data/products';

type CartContextValue = {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const setQty = (id: string, qty: number) =>
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
    );

  const clear = () => setItems([]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      add,
      remove,
      setQty,
      clear,
      count: items.reduce((sum, i) => sum + i.qty, 0),
      total: items.reduce((sum, i) => sum + i.qty * i.price, 0),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
