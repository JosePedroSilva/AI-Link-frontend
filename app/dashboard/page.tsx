'use client';
import { Card } from '@/app/ui/dashboard/cards';

interface CardData {
  title: string;
  value: number;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}

const data: CardData[] = [
  { title: 'Invoices', value: 23, type: 'invoices' },
  { title: 'Customers', value: 143828, type: 'customers' },
  { title: 'Pending', value: 182428, type: 'pending' },
  { title: 'Collected', value: 1822428, type: 'collected' },
];

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">

      </div>
    </main>
  );
}