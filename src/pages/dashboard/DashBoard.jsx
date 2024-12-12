import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Video, Activity } from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '1,234',
    icon: Users,
  },
  {
    title: 'Active Lessons',
    value: '45',
    icon: BookOpen,
  },
  {
    title: 'Tutorials',
    value: '28',
    icon: Video,
  },
  {
    title: 'Active Users',
    value: '573',
    icon: Activity,
  },
];

const DashBoard = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default DashBoard;
