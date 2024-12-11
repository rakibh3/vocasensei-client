import { useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from './button';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

const AvatarUpload = ({ onChange, defaultImage, className }) => {
  const [preview, setPreview] = useState(defaultImage || '');
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <div className="relative ">
        <div className="h-32 w-32 rounded-2xl overflow-hidden bg-gray-100 border border-gray-300">
          <Avatar>
            <AvatarImage src={preview} />
            <AvatarFallback className="flex items-center justify-center h-full text-muted-foreground">
              <Camera className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
        </div>
        <Button
          type="button"
          szie="icon"
          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full "
          onClick={() => inputRef.current?.click()}
          title="Upload Avatar"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};
export default AvatarUpload;
