import { Form } from '@/components/ui/form';
import ButtonLoader from '@/components/ui/button-loader';
import { BookOpen, Hash } from 'lucide-react';
import InputField from '@/components/ui/form/InputField';

const LessonForm = ({ form, onSubmit, submitText, loadingText }) => {
  return (
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
            loadingText={loadingText}
          >
            {submitText}
          </ButtonLoader>
        </div>
      </form>
    </Form>
  );
};
export default LessonForm;
