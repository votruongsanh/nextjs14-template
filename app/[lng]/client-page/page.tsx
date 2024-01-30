import Counter from '@/components/client-page/Counter';
import { Footer } from '@/components/common/Footer';

interface PageProps {
  params: {
    lng: string;
  };
}

export default function Page({ params: { lng } }: PageProps) {
  return (
    <>
      <Counter lng={lng} />
      <Footer lng={lng} path="/client-page" />
    </>
  );
}
