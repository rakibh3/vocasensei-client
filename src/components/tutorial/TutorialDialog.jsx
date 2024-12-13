import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { TutorialForm } from './TutorialForm';

export function TutorialDialog({ open, onOpenChange, tutorial, onSubmit }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {tutorial ? 'Edit Tutorial' : 'Create Tutorial'}
          </DialogTitle>
        </DialogHeader>
        <TutorialForm
          initialData={tutorial}
          onSubmit={onSubmit}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
