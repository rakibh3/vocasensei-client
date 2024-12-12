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
import { BookOpen, Hash } from 'lucide-react';
import InputField from '@/components/ui/form/InputField';
import { lessonUpdateFormSchema } from '@/lib/validators/lesson';

const EditVocabularyDialog = ({ lesson, onClose, onUpdate }) => {
  const form = useForm({
    resolver: zodResolver(lessonUpdateFormSchema),
    defaultValues: {
      lessonName: lesson?.lessonName || '',
      lessonNumber: lesson?.lessonNumber || 0,
    },
  });

  const { reset } = form;
  useEffect(() => {
    if (lesson) {
      reset({
        lessonName: lesson?.lessonName,
        lessonNumber: lesson?.lessonNumber,
      });
    }
  }, [lesson, reset]);

  const onSubmit = async (data) => {
    onUpdate(lesson?._id, data);
  };
  return (
    <Dialog open={!!lesson} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Lesson</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            <div className="flex justify-end gap-2">
              <ButtonLoader
                type="submit"
                loading={form.formState.isSubmitting}
                loadingText="Updating..."
              >
                Update Lesson
              </ButtonLoader>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default EditVocabularyDialog;
