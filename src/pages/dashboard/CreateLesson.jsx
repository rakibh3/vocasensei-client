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

const CreateLesson = () => {
  const form = useForm({
    resolver: zodResolver(lessonCreateFormSchema),
    defaultValues: {
      lessonName: '',
      lessonNumber: 1,
    },
  });

  const onSubmit = async (data) => {
    // try {
    //   await createLesson(data);
    //   toast.success('Lesson created successfully!');
    //   form.reset({ name: '', number: 1 });
    // } catch (error) {
    //   toast.error('Failed to create lesson');
    //   console.error('Error creating lesson:', error);
    // }

    console.log(data);
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
                loading={form.formState.isSubmitting}
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
