import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export function TutorialCard({ tutorial, onEdit, onDelete }) {
  const { currentUser } = useAuth();
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{tutorial.title}</CardTitle>
        <CardDescription>{tutorial.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${tutorial.videoId}`}
            className="w-full h-full rounded-md"
            allowFullScreen
            title={tutorial.title}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        {currentUser?.role === 'admin' && (
          <>
            <Button variant="outline" onClick={() => onEdit(tutorial)}>
              Edit
            </Button>
            <Button
              variant="destructive"
              onClick={() => onDelete(tutorial._id)}
            >
              Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
