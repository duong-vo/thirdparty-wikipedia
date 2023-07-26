import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      Hi {id}
    </div>
  );
}
