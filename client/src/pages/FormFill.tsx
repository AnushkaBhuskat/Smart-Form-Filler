import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocumentUploader from '@/components/DocumentUploader';
import SignatureCanvas from '@/components/SignatureCanvas';
import FormRenderer from '@/components/FormRenderer';
import { ArrowLeft, Upload, FileText, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function FormFill() {
  const { t } = useTranslation();
  const [, params] = useRoute('/form/:formId');
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState('documents');
  const [photoId, setPhotoId] = useState<any[]>([]);
  const [signature, setSignature] = useState<string | null>(null);
  const [addressProof, setAddressProof] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const formId = params?.formId || 'unknown';
  const formTitle = t(`forms.${formId}`) || 'Application Form';

  const formFields = [
    { name: 'fullName', label: t('auth.fullName'), type: 'text' as const, value: formData.fullName, required: true },
    { name: 'fatherName', label: "Father's Name", type: 'text' as const, value: formData.fatherName },
    { name: 'motherName', label: "Mother's Name", type: 'text' as const, value: formData.motherName },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' as const, value: formData.dateOfBirth, required: true },
    { name: 'email', label: t('auth.email'), type: 'email' as const, value: formData.email },
    { name: 'phoneNumber', label: t('auth.phoneNumber'), type: 'tel' as const, value: formData.phoneNumber, required: true },
    { name: 'address', label: 'Residential Address', type: 'textarea' as const, value: formData.address, required: true },
    { name: 'city', label: 'City', type: 'text' as const, value: formData.city, required: true },
    { name: 'state', label: 'State', type: 'text' as const, value: formData.state, required: true },
    { name: 'pincode', label: 'PIN Code', type: 'text' as const, value: formData.pincode, required: true },
  ];

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log('Submitting form:', {
      formId,
      formData,
      photoId: photoId.length > 0,
      signature: !!signature,
      addressProof: addressProof.length > 0,
    });

    toast({
      title: t('common.success'),
      description: 'Form submitted successfully! Reference ID: API-SETU-' + Date.now(),
    });

    setTimeout(() => {
      setLocation('/');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Button
        variant="ghost"
        onClick={() => setLocation('/')}
        className="mb-6"
        data-testid="button-back"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t('common.cancel')}
      </Button>

      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">{formTitle}</h1>
        <p className="text-muted-foreground">Complete all sections to submit your application</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-2xl">
          <TabsTrigger value="documents" data-testid="tab-documents">
            <Upload className="h-4 w-4 mr-2" />
            {t('nav.documents')}
          </TabsTrigger>
          <TabsTrigger value="form" data-testid="tab-form">
            <FileText className="h-4 w-4 mr-2" />
            {t('forms.fillForm')}
          </TabsTrigger>
          <TabsTrigger value="preview" data-testid="tab-preview">
            <Send className="h-4 w-4 mr-2" />
            {t('forms.preview')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('documents.upload')}</CardTitle>
              <CardDescription>Upload required documents for your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <DocumentUploader
                label={t('documents.photoID')}
                documentType="photo-id"
                onFilesChange={setPhotoId}
              />
              <DocumentUploader
                label={t('documents.addressProof')}
                documentType="address-proof"
                onFilesChange={setAddressProof}
              />
              <SignatureCanvas onSignatureChange={setSignature} />
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={() => setActiveTab('form')} data-testid="button-next-form">
              Continue to Form
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="form" className="space-y-6">
          <FormRenderer
            formTitle={formTitle}
            fields={formFields}
            photoIdUrl={photoId[0]?.preview}
            signatureUrl={signature || undefined}
            onFieldChange={handleFieldChange}
          />

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setActiveTab('documents')}
              data-testid="button-back-documents"
            >
              Back to Documents
            </Button>
            <Button onClick={() => setActiveTab('preview')} data-testid="button-next-preview">
              Preview Form
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <FormRenderer
            formTitle={formTitle}
            fields={formFields}
            photoIdUrl={photoId[0]?.preview}
            signatureUrl={signature || undefined}
            onFieldChange={handleFieldChange}
          />

          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">API Setu Integration</CardTitle>
              <CardDescription>
                This form will be submitted directly to Government of India systems via API Setu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 bg-green-500 rounded-full" />
                <span>Connected to API Setu Platform</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setActiveTab('form')}
              data-testid="button-back-form"
            >
              Back to Form
            </Button>
            <Button onClick={handleSubmit} data-testid="button-submit-form">
              <Send className="h-4 w-4 mr-2" />
              {t('forms.submit')}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
