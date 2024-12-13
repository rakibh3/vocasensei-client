/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { TutorialDialog } from '@/components/tutorial/TutorialDialog';
import { TutorialList } from '@/components/tutorial/TutorialList';
import { useToast } from '@/hooks/use-toast';
import {
  useCreateTutorialMutation,
  useDeleteTutorialMutation,
  useUpdateTutorialMutation,
} from '@/redux/features/tutorial/tutorialApi';

export function TutorialManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTutorial, setSelectedTutorial] = useState();

  const { toast } = useToast();

  const [
    createTutorial,
    {
      data: createData,
      isLoading: isCreateLoading,
      isError: isCreateError,
      error: errorCreate,
    },
  ] = useCreateTutorialMutation();
  const [
    updateTutorial,
    {
      data: updateData,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
      error: updateError,
    },
  ] = useUpdateTutorialMutation();
  const [
    deleteTutorial,
    {
      data: deleteData,
      isLoading: isDeleteLoading,
      isError: isDeleteError,
      error: errorDelete,
    },
  ] = useDeleteTutorialMutation();

  useEffect(() => {
    if (createData?.success) {
      // reset();
      // navigate('/dashboard/lessons');
      setIsDialogOpen(false);
      toast({
        title: 'Congratulations!',
        description: `You have successfully created the tutorial: ${createData?.data?.title}`,
        status: 'success',
        duration: 3000,
      });
    }

    if (errorCreate?.data) {
      toast({
        title: 'Lesson Creation Failed',
        description:
          errorCreate.data.errorMessage || errorCreate?.data?.message,
        status: 'error',
        duration: 3000,
      });
    }
  }, [createData, errorCreate, toast]);

  useEffect(() => {
    if (isUpdateSuccess) {
      setIsDialogOpen(false);
      setSelectedTutorial(undefined);
      toast({
        title: 'Lesson Updated',
        description: 'Lesson was successfully edited.',
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
  }, [isUpdateSuccess, updateError, updateData, toast]);

  const handleCreate = async (data) => {
    createTutorial(data);
  };

  const handleEdit = async (data) => {
    if (!selectedTutorial) return;

    updateTutorial({ id: selectedTutorial._id, data });
  };

  const handleDelete = async (id) => {
    if (!id) return;
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this tutorial?'
    );
    if (!confirmDelete) return;
    deleteTutorial(id);
  };

  const openEditDialog = (tutorial) => {
    setSelectedTutorial(tutorial);
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    setSelectedTutorial(undefined);
    setIsDialogOpen(true);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tutorial Management</h1>
        <Button onClick={openCreateDialog}>Add Tutorial</Button>
      </div>

      <TutorialList onEdit={openEditDialog} onDelete={handleDelete} />

      <TutorialDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        tutorial={selectedTutorial}
        onSubmit={selectedTutorial ? handleEdit : handleCreate}
      />
    </div>
  );
}
