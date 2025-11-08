import { useState } from 'react';
import FormRenderer from '../FormRenderer';

export default function FormRendererExample() {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    fatherName: 'Richard Doe',
    dateOfBirth: '1990-01-15',
    email: 'john.doe@example.com',
    phoneNumber: '+91 9876543210',
    address: '123 Main Street, Mumbai, Maharashtra - 400001',
  });

  const fields = [
    { name: 'fullName', label: 'Full Name', type: 'text' as const, value: formData.fullName, required: true },
    { name: 'fatherName', label: "Father's Name", type: 'text' as const, value: formData.fatherName },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' as const, value: formData.dateOfBirth, required: true },
    { name: 'email', label: 'Email', type: 'email' as const, value: formData.email },
    { name: 'phoneNumber', label: 'Phone Number', type: 'tel' as const, value: formData.phoneNumber, required: true },
    { name: 'address', label: 'Residential Address', type: 'textarea' as const, value: formData.address, required: true },
  ];

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <FormRenderer
        formTitle="Passport Application Form"
        fields={fields}
        photoIdUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop"
        signatureUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        onFieldChange={handleFieldChange}
      />
    </div>
  );
}
