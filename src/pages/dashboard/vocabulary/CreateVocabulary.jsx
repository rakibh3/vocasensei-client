import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Globe, Clock, Hash } from 'lucide-react';
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
import { vocabularyCreateFormSchema } from '@/lib/validators/Vocabulary';
import { useCreateVocabularyMutation } from '@/redux/features/vocabularies/vocabulariesApi';

const CreateVocabulary = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(vocabularyCreateFormSchema),
    defaultValues: {
      lessonName: '',
      lessonNumber: 0,
    },
  });

  const { reset } = form;

  const [createVocabulary, { data: vocabulary, isLoading, error }] =
    useCreateVocabularyMutation();

  useEffect(() => {
    if (vocabulary?.success) {
      reset();
      navigate('/dashboard/vocabularies');
      toast({
        title: 'Congratulations!',
        description: `You have successfully created the vocabulary: ${vocabulary?.data?.word}`,
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
  }, [vocabulary, error, navigate, reset]);

  const onSubmit = async (data) => {
    createVocabulary(data);
  };

  return (
    <div className="flex min-h-[94vh] flex-col items-center justify-center">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create New Vocabulary
          </CardTitle>
          <CardDescription>
            Fill in the form below to create a new vocabulary
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CardContent className="space-y-4">
              <InputField
                form={form}
                name="word"
                label="Japanese Word"
                placeholder="Enter the Japanese word (e.g., こんにちは)"
                leftIcon={<Globe className="h-4 w-4 mt-1" />}
              />
              <InputField
                form={form}
                name="pronunciation"
                label="Pronunciation"
                placeholder="Enter the pronunciation (e.g., Konnichiwa)"
                leftIcon={<Clock className="h-4 w-4 mt-1" />}
              />
              <InputField
                form={form}
                name="meaning"
                label="Meaning"
                placeholder="Enter the meaning of the word"
                leftIcon={<Clock className="h-4 w-4 mt-1" />}
              />
              <InputField
                form={form}
                name="whenToSay"
                label="When to Say"
                placeholder="Enter description of when to use the word"
                leftIcon={<Clock className="h-4 w-4 mt-1" />}
                type="textarea"
              />
              <InputField
                form={form}
                name="lessonNo"
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
                disabled={isLoading}
                loadingText="Creating..."
              >
                Create Vocabulary
              </ButtonLoader>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};
export default CreateVocabulary;
