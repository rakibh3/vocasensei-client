import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import VocabularyCard from '@/components/vocabularyCard/VocabularyCard';
import Confetti from 'react-confetti';

const LessonPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const lesson = lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const progress = ((currentIndex + 1) / lesson.vocabulary.length) * 100;
  const isLastWord = currentIndex === lesson.vocabulary.length - 1;

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
        <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
        <Progress value={progress} className="w-full" />
      </div>

      <VocabularyCard vocabulary={lesson.vocabulary[currentIndex]} />

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
