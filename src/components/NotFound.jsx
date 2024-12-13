import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { JapaneseLantern } from '@/components/icon/JapaneseLantern';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Japanese-style 404 */}
        <div className="text-6xl font-bold text-gray-900 font-japanese">
          ４０４
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <JapaneseLantern />
        </div>

        {/* Message in both Japanese and English */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            ページが見つかりません
          </h1>
          <p className="text-lg text-gray-600">Page Not Found</p>
        </div>

        {/* Description */}
        <p className="text-gray-600">
          申し訳ありません。お探しのページは存在しないか、移動した可能性があります。
          <br />
          <span className="block mt-2">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </span>
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto"
          >
            戻る (Go Back)
          </Button>
          <Button onClick={() => navigate('/')} className="w-full sm:w-auto">
            ホームへ (Home)
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
