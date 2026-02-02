import { getAllDocs } from '@/lib/docs';
import { redirect } from 'next/navigation';

export default function Home() {
  const docs = getAllDocs();
  if (docs.length > 0) {
    redirect(`/docs/${encodeURIComponent(docs[0].slug)}`);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">가이드북을 찾을 수 없습니다.</h1>
        <p className="text-gray-600">content 폴더에 마크다운 파일을 추가해주세요.</p>
      </div>
    </div>
  );
}
