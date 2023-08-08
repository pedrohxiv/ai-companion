'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';

import { cn } from '@/lib/utils';

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

export const ImageUpload = ({ value, onChange, disabled }: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={(result: any) => onChange(result.info.secure_url)}
        uploadPreset="v4ass1ji"
      >
        <div
          className={cn(
            'p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center',
            disabled && 'cursor-not-allowed opacity-50 hover:opacity-50',
          )}
        >
          <div className="relative h-40 w-40">
            <Image
              src={value || '/placeholder.svg'}
              alt="Upload"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};
