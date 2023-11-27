import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const currentPage = router.pathname.replace('/', '');
  // console.log(currentPage)
  const pagesWithoutLayout = ['login', 'signup'];

  return (
    <div>
      {!pagesWithoutLayout.includes(currentPage) && <Header />}
      <Component {...pageProps} />
      {!pagesWithoutLayout.includes(currentPage) && <Footer />}
    </div>
  );
};

export default MyApp;
