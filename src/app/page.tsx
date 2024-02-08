import Image from 'next/image';
import { Roboto_Mono } from 'next/font/google';
const roboto_Mono = Roboto_Mono({ subsets: ['latin'] });
import Top from '@/components/Top';
import Main from '@/components/Main';
import FamilyTitle from '@/components/FamilyTitle';
import FamDetails from '@/components/FamDetails';
import Events from '@/components/Events';
import Important from '@/components/Important';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Top />
      <Main />
      <FamilyTitle />
      <FamDetails />
      <Events />
      <Important />
      <Footer />
    </main>
  );
}
