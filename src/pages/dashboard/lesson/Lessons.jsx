/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import ButtonLoader from '@/components/ui/button-loader';
import { Pencil, Trash2 } from 'lucide-react';
import EditLessonDialog from './EditLessonDialog';
import {
  useDeleteLessonMutation,
  useGetAllLessonsQuery,
  useUpdateLessonMutation,
} from '@/redux/features/lessons/lessonsApi';
import PageLoader from '@/components/ui/page-loader';
import { toast } from '@/hooks/use-toast';

const Lessons = () => {
  const [editingLesson, setEditingLesson] = useState(null);

  const {
    data: lessons,
    isLoading: isLessonsLoading,
    isError: isLessonsError,
    error: lessonsError,
  } = useGetAllLessonsQuery();

  const [
    deleteLesson,
    {
      data: deletedData,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
    },
  ] = useDeleteLessonMutation();

  const [
    updateLesson,
    {
      data: updatedData,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
      error: updateError,
    },
  ] = useUpdateLessonMutation();

  useEffect(() => {
    if (isUpdateSuccess) {
      setEditingLesson(null);
      toast({
        title: 'Lesson Updated',
        description: 'Lesson was successfully edited.',
        status: 'success',
        duration: 3000,
      });
    }

    if (updateError?.data) {
      console.log(updateError);
      toast({
        title: 'Update Failed',
        description:
          updateError?.data?.errorMessage || updateError?.data?.message,
        status: 'error',
        duration: 3000,
      });
    }
  }, [isUpdateSuccess, updateError]);

  // If loading, show the loader
  if (isLessonsLoading) {
    return <PageLoader />;
  }

  // If error occurs, show the error message
  if (isLessonsError) {
    return <div>Error: {lessonsError.message}</div>;
  }

  // If there are no lessons, show a no data found message
  if (lessons?.data?.length === 0) {
    return <div>No lessons found</div>;
  }

  const handleDelete = async (id) => {
    if (!id) return;
    deleteLesson(id);
  };

  const handleUpdate = async (id, payload) => {
    updateLesson({ id, payload });
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lesson Number</TableHead>
              <TableHead>Lesson Name</TableHead>
              <TableHead>Vocabulary Count</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lessons?.data?.map((lesson) => (
              <TableRow key={lesson._id}>
                <TableCell>{lesson?.lessonNumber}</TableCell>
                <TableCell>{lesson?.lessonName}</TableCell>
                <TableCell>{lesson?.vocabularyCount}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingLesson(lesson)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Lesson</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "
                            {lesson?.lessonName}
                            "? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <ButtonLoader
                              variant="destructive"
                              // loading={deletingId === lesson.id}
                              loadingText="Deleting..."
                              onClick={() => handleDelete(lesson._id)}
                            >
                              Delete
                            </ButtonLoader>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <EditLessonDialog
        lesson={editingLesson}
        onClose={() => setEditingLesson(null)}
        onUpdate={handleUpdate}
      />
    </div>
  );
};
export default Lessons;
