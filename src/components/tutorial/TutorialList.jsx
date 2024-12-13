import { useGetAllTutorialsQuery } from '@/redux/features/tutorial/tutorialApi';
import { TutorialCard } from './TutorialCard';

export function TutorialList({ onEdit, onDelete }) {
  const { data, isLoading, error } = useGetAllTutorialsQuery();

  if (isLoading) {
    return <div className="text-center">Loading tutorials...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error loading tutorials</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.data?.map((tutorial) => (
        <TutorialCard
          key={tutorial._id}
          tutorial={tutorial}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
