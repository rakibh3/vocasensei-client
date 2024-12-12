import { Link } from 'react-router-dom';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const LessonCard = ({ lesson }) => {
  return (
    <Link to={`/lesson/${lesson.id}`}>
      <Card className="hover:bg-accent transition-colors">
        <CardHeader>
          <CardTitle>{lesson.title}</CardTitle>
          <CardDescription>{lesson.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
export default LessonCard;
