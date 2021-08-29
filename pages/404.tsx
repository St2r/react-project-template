import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const NotFound: NextPage = () => {
  const router = useRouter();

  console.log(router.query)

  return <div>
    404
  </div>
}

export default NotFound;
