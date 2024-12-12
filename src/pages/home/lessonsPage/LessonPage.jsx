import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import VocabularyCard from '@/components/vocabularyCard/VocabularyCard';
import Confetti from 'react-confetti';
import { useGetVocabularyQuery } from '@/redux/features/vocabularies/vocabulariesApi';
import PageLoader from '@/components/ui/page-loader';

const LessonPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const { data, isLoading, isError, error } = useGetVocabularyQuery(lessonId);

  // If loading, show the loader
  if (isLoading) {
    return <PageLoader />;
  }

  // If error occurs, show the error message
  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  // If there are no lessons, show a no data found message
  if (data?.data?.length === 0) {
    return <div>No lessons found!</div>;
  }

  //   const lesson = data?.data?.find((l) => l.id === lessonId);
  //   console.log(lesson);

  //   if (!lesson) {
  //     return <div>Lesson not found</div>;
  //   }

  const progress = ((currentIndex + 1) / data?.data?.length) * 100;
  const isLastWord = currentIndex === data?.data?.length - 1;

  const handleNext = () => {
    if (isLastWord) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        navigate('/');
      }, 6000);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };
  return (
    <div className="container mx-auto py-8">
      {showConfetti && <Confetti />}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{data?.data?.word}</h1>
        <Progress value={progress} className="w-full" />
      </div>

      <VocabularyCard vocabulary={data?.data[currentIndex]} />

      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button onClick={handleNext}>{isLastWord ? 'Complete' : 'Next'}</Button>
      </div>
    </div>
  );
};
export default LessonPage;
