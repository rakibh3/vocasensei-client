import LessonCard from '@/components/lessonCard/LessonCard';
import PageLoader from '@/components/ui/page-loader';
import { useGetAllLessonsQuery } from '@/redux/features/lessons/lessonsApi';

const LessonsPage = () => {
  const { data, isLoading, isError, error } = useGetAllLessonsQuery();

  // If loading, show the loader
  if (isLoading) {
    return <PageLoader />;
  }

  // If error occurs, show the error message
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // If there are no lessons, show a no data found message
  if (data?.data?.length === 0) {
    return <div>No lessons found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Available Lessons</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map((lesson) => (
          <LessonCard key={lesson._id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};
export default LessonsPage;
