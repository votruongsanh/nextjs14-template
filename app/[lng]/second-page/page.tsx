import { Footer } from '@/components/common/Footer';
import { useTranslation } from '@/i18n';
import Link from 'next/link';

interface PageProps {
  params: {
    lng: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng, 'second-page');
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>{t('back-to-home')}</Link>

      <Footer lng={lng} path="/second-page" />
    </>
  );
};
export default Page;
