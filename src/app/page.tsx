// src/page.tsx
import AddCompanyButton from '@/app/components/add-company-button';
import { headers } from 'next/headers';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';
import ServerComponentCopy from './components/server-component-copy';
import MagicButton from './components/magic-button';

export default function Home() {
  const headerList = headers();
  headerList.forEach((value, key) => {
    console.log(`${key} ==> ${value}`);
  });
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
