import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import ButtonLoader from '@/components/ui/button-loader';
import { BookOpen, Hash, Quote, Volume2 } from 'lucide-react';
import InputField from '@/components/ui/form/InputField';
import { vocabularyUpdateFormSchema } from '@/lib/validators/Vocabulary';

const EditVocabularyDialog = ({ vocabulary, onClose, onUpdate }) => {
  const form = useForm({
    resolver: zodResolver(vocabularyUpdateFormSchema),
    defaultValues: {
      word: vocabulary?.word || '',
      meaning: vocabulary?.meaning || '',
      pronunciation: vocabulary?.pronunciation || '',
      whenToSay: vocabulary?.whenToSay || '',
      lessonNo: vocabulary?.lessonNo || 0,
    },
  });

  const { reset } = form;
  useEffect(() => {
    if (vocabulary) {
      reset({
        word: vocabulary?.word,
        meaning: vocabulary?.meaning,
        pronunciation: vocabulary?.pronunciation,
        whenToSay: vocabulary?.whenToSay,
        lessonNo: vocabulary?.lessonNo,
      });
    }
  }, [vocabulary, reset]);

  const onSubmit = async (data) => {
    onUpdate(vocabulary?._id, data);
  };
  return (
    <Dialog open={!!vocabulary} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit vocabulary</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <InputField
              form={form}
              name="word"
              label="Word"
              placeholder="Enter the word"
              leftIcon={<BookOpen className="h-4 w-4 mt-1" />}
            />
            <InputField
              form={form}
              name="meaning"
              label="Meaning"
              placeholder="Enter the meaning"
              leftIcon={<Quote className="h-4 w-4 mt-1" />}
            />
            <InputField
              form={form}
              name="pronunciation"
              label="Pronunciation"
              placeholder="Enter the pronunciation"
              leftIcon={<Volume2 className="h-4 w-4 mt-1" />}
            />
            <InputField
              form={form}
              name="whenToSay"
              label="When to Say"
              placeholder="Enter context for when to use this word"
              leftIcon={<BookOpen className="h-4 w-4 mt-1" />}
            />
            <InputField
              form={form}
              name="lessonNo"
              label="Lesson Number"
              placeholder="Enter lesson number"
              type="number"
              leftIcon={<Hash className="h-4 w-4 mt-1" />}
            />
            <div className="flex justify-end gap-2">
              <ButtonLoader
                type="submit"
                loading={form.formState.isSubmitting}
                loadingText="Updating..."
              >
                Update Vocabulary
              </ButtonLoader>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default EditVocabularyDialog;
