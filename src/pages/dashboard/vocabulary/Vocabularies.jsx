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
import PageLoader from '@/components/ui/page-loader';
import { toast } from '@/hooks/use-toast';
import {
  useDeleteVocabularyMutation,
  useGetAllVocabulariesQuery,
  useUpdateVocabularyMutation,
} from '@/redux/features/vocabularies/vocabulariesApi';
import EditVocabularyDialog from './EditVocabularyDialog';

const Vocabularies = () => {
  const [editingVocabulary, setEditingVocabulary] = useState(null);

  const {
    data: vocabularies,
    isLoading: isvocabulariesLoading,
    isError: isvocabulariesError,
    error: vocabulariesError,
  } = useGetAllVocabulariesQuery();

  const [
    deleteVocabulary,
    {
      data: deletedData,
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
    },
  ] = useDeleteVocabularyMutation();

  const [
    updateVocabulary,
    {
      data: updatedData,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
      error: updateError,
    },
  ] = useUpdateVocabularyMutation();

  useEffect(() => {
    if (isUpdateSuccess) {
      setEditingVocabulary(null);
      toast({
        title: 'Update Successful',
        description: 'Vocabulary updated successfully',
        status: 'success',
        duration: 3000,
      });
    }

    if (updateError?.data) {
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
  if (isvocabulariesLoading) {
    return <PageLoader />;
  }

  // If error occurs, show the error message
  if (isvocabulariesError) {
    return <div>Error: {vocabulariesError.message}</div>;
  }

  // If there are no lessons, show a no data found message
  if (vocabularies?.data?.length === 0) {
    return <div>No lessons found</div>;
  }

  const handleDelete = async (id) => {
    if (!id) return;
    deleteVocabulary(id);
  };

  const handleUpdate = async (id, payload) => {
    updateVocabulary({ id, payload });
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Word</TableHead>
              <TableHead>Meaning</TableHead>
              <TableHead>Pronunciation</TableHead>
              <TableHead>When To Say</TableHead>
              <TableHead>Lesson No</TableHead>
              <TableHead>Creator Email</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vocabularies?.data?.map((vocabulary) => (
              <TableRow key={vocabulary._id}>
                <TableCell>{vocabulary?.word}</TableCell>
                <TableCell>{vocabulary?.meaning}</TableCell>
                <TableCell>{vocabulary?.pronunciation}</TableCell>
                <TableCell>{vocabulary?.whenToSay}</TableCell>
                <TableCell>{vocabulary?.lessonNo}</TableCell>
                <TableCell>{vocabulary?.adminEmail?.email}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingVocabulary(vocabulary)}
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
                            Are you sure you want to delete "{vocabulary?.word}
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
                              onClick={() => handleDelete(vocabulary._id)}
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

      <EditVocabularyDialog
        lesson={editingVocabulary}
        onClose={() => setEditingVocabulary(null)}
        onUpdate={handleUpdate}
      />
    </div>
  );
};
export default Vocabularies;
