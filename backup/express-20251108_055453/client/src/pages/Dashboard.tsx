import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import FormCard from '@/components/FormCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Clock } from 'lucide-react';

const availableForms = [
  { id: 'passport', translationKey: 'forms.passport', estimatedTime: '15-20 min' },
  { id: 'panCard', translationKey: 'forms.panCard', estimatedTime: '10-15 min' },
  { id: 'drivingLicense', translationKey: 'forms.drivingLicense', estimatedTime: '12-18 min' },
  { id: 'voterID', translationKey: 'forms.voterID', estimatedTime: '8-12 min' },
  { id: 'aadhaar', translationKey: 'forms.aadhaar', estimatedTime: '10-15 min' },
];

export default function Dashboard() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  const handleFillForm = (formId: string) => {
    console.log('Navigating to form:', formId);
    setLocation(`/form/${formId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">{t('dashboard.title')}</h1>
        <p className="text-muted-foreground">{t('dashboard.selectForm')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableForms.map((form) => (
          <FormCard
            key={form.id}
            formType={form.id}
            title={t(form.translationKey)}
            estimatedTime={form.estimatedTime}
            onFillForm={() => handleFillForm(form.id)}
          />
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {t('dashboard.mySubmissions')}
            </CardTitle>
            <CardDescription>Track your form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No submissions yet</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              {t('dashboard.myDocuments')}
            </CardTitle>
            <CardDescription>Manage your uploaded documents</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No documents uploaded yet</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
