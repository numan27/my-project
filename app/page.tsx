import type { Metadata } from 'next';

import { SITE } from '@/config';
// import Looks from './(pages)/looks/page';
import Login from './(pages)/(auth)/login/page';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Login />
    </>
  );
}
