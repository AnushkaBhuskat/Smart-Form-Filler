import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, X, FileText, Image as ImageIcon } from 'lucide-react';

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  type: string;
}

interface DocumentUploaderProps {
  label: string;
  documentType: string;
  onFilesChange: (files: UploadedFile[]) => void;
  maxFiles?: number;
  accept?: Record<string, string[]>;
}

export default function DocumentUploader({
  label,
  documentType,
  onFilesChange,
  maxFiles = 1,
  accept = { 'image/*': ['.jpg', '.jpeg', '.png'], 'application/pdf': ['.pdf'] },
}: DocumentUploaderProps) {
  const { t } = useTranslation();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => ({
        id: Math.random().toString(36),
        file,
        preview: URL.createObjectURL(file),
        type: file.type,
      }));

      const updatedFiles = maxFiles === 1 ? newFiles : [...uploadedFiles, ...newFiles].slice(0, maxFiles);
      setUploadedFiles(updatedFiles);
      onFilesChange(updatedFiles);
      console.log(`${documentType} uploaded:`, acceptedFiles);
    },
    [uploadedFiles, maxFiles, onFilesChange, documentType]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize: 5242880,
  });

  const removeFile = (id: string) => {
    const updatedFiles = uploadedFiles.filter((f) => f.id !== id);
    setUploadedFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">{label}</label>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors hover-elevate ${
            isDragActive ? 'border-primary bg-accent' : 'border-border'
          }`}
          data-testid={`dropzone-${documentType}`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-sm text-muted-foreground mb-1">{t('documents.dragDrop')}</p>
          <p className="text-xs text-muted-foreground">{t('documents.supportedFormats')}</p>
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {uploadedFiles.map((fileObj) => (
            <Card key={fileObj.id} className="p-4 relative">
              <Button
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                onClick={() => removeFile(fileObj.id)}
                data-testid={`button-remove-${fileObj.id}`}
              >
                <X className="h-4 w-4" />
              </Button>
              {fileObj.type.startsWith('image/') ? (
                <div className="aspect-square rounded-md overflow-hidden bg-muted">
                  <img
                    src={fileObj.preview}
                    alt={fileObj.file.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square rounded-md bg-muted flex items-center justify-center">
                  <FileText className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
              <p className="text-xs mt-2 truncate text-center" title={fileObj.file.name}>
                {fileObj.file.name}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
