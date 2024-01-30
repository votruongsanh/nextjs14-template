import { useTranslation } from '@/app/i18n';
import { Footer } from '@/components/common/Footer';
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
