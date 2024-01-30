import { Footer } from '@/components/common/Footer';
import Link from 'next/link';
import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';

interface PageProps {
  params: {
    lng: string;
  };
}

const HomePage: React.FC<PageProps> = async ({ params: { lng } }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t('to-client-page')}</Link>
      <Footer lng={lng} path="/" />
    </>
  );
};
export default HomePage;
