import DocumentUploader from '../DocumentUploader';

export default function DocumentUploaderExample() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <DocumentUploader
        label="Upload Photo ID"
        documentType="photo-id"
        onFilesChange={(files) => console.log('Files changed:', files)}
      />
    </div>
  );
}
