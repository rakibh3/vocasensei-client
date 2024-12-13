import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookOpen, Hash } from 'lucide-react';
import { Form } from '@/components/ui/form';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import ButtonLoader from '@/components/ui/button-loader';
import InputField from '@/components/ui/form/InputField';
import { lessonCreateFormSchema } from '@/lib/validators/lesson';
import { useCreateLessonMutation } from '@/redux/features/lessons/lessonsApi';
import { useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const CreateLesson = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(lessonCreateFormSchema),
    defaultValues: {
      lessonName: '',
      lessonNumber: 0,
    },
  });

  const { reset, isSubmitting } = form;

  const [createLesson, { data: lesson, isLoading, error }] =
    useCreateLessonMutation();

  useEffect(() => {
    if (lesson?.success) {
      reset();
      navigate('/dashboard/lessons');
      toast({
        title: 'Congratulations!',
        description: `You have successfully created the lesson: ${lesson?.data?.lessonName}`,
        status: 'success',
        duration: 3000,
      });
    }

    if (error?.data) {
      toast({
        title: 'Lesson Creation Failed',
        description: error.data.errorMessage || error?.data?.message,
        status: 'error',
        duration: 3000,
      });
    }
  }, [lesson, error, navigate, reset]);

  const onSubmit = async (data) => {
    createLesson(data);
  };

  return (
    <div className="flex min-h-[94vh] flex-col items-center justify-center">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create New Lesson
          </CardTitle>
          <CardDescription>
            Add a new lesson to your curriculum. Fill in the details below.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CardContent className="space-y-4">
              <InputField
                form={form}
                name="lessonName"
                label="Lesson Name"
                placeholder="Enter lesson name"
                leftIcon={<BookOpen className="h-4 w-4 mt-1" />}
              />
              <InputField
                form={form}
                name="lessonNumber"
                label="Lesson Number"
                placeholder="Enter lesson number"
                type="number"
                leftIcon={<Hash className="h-4 w-4 mt-1" />}
              />
            </CardContent>
            <CardFooter>
              <ButtonLoader
                type="submit"
                className="w-full"
                loading={isSubmitting}
                disabled={isLoading}
                loadingText="Creating..."
              >
                Create Lesson
              </ButtonLoader>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};
export default CreateLesson;
