import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'textarea';
  value: string;
  required?: boolean;
}

interface FormRendererProps {
  formTitle: string;
  fields: FormField[];
  photoIdUrl?: string;
  signatureUrl?: string;
  onFieldChange: (name: string, value: string) => void;
}

export default function FormRenderer({
  formTitle,
  fields,
  photoIdUrl,
  signatureUrl,
  onFieldChange,
}: FormRendererProps) {
  const { t } = useTranslation();

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader className="border-b bg-muted/30">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">Government of India</Badge>
            </div>
            <CardTitle className="text-2xl">{formTitle}</CardTitle>
          </div>
          {photoIdUrl && (
            <div className="flex-shrink-0">
              <div className="border-2 border-border rounded-md overflow-hidden bg-background w-32 h-40">
                <img
                  src={photoIdUrl}
                  alt="Photo ID"
                  className="w-full h-full object-cover"
                  data-testid="img-photo-id"
                />
              </div>
              <p className="text-xs text-center text-muted-foreground mt-1">
                {t('documents.photoID')}
              </p>
            </div>
          )}
          {!photoIdUrl && (
            <div className="flex-shrink-0">
              <div className="border-2 border-dashed border-border rounded-md bg-muted/50 w-32 h-40 flex items-center justify-center">
                <User className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-xs text-center text-muted-foreground mt-1">
                {t('documents.photoID')}
              </p>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field) => (
            <div
              key={field.name}
              className={field.type === 'textarea' ? 'md:col-span-2' : ''}
            >
              <Label htmlFor={field.name} className="mb-2 block">
                {field.label}
                {field.required && <span className="text-destructive ml-1">*</span>}
              </Label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  value={field.value}
                  onChange={(e) => onFieldChange(field.name, e.target.value)}
                  className="w-full min-h-24 px-3 py-2 border border-input rounded-md bg-background text-foreground resize-y"
                  data-testid={`input-${field.name}`}
                />
              ) : (
                <Input
                  id={field.name}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => onFieldChange(field.name, e.target.value)}
                  data-testid={`input-${field.name}`}
                />
              )}
            </div>
          ))}
        </div>

        {signatureUrl && (
          <div className="mt-8 pt-6 border-t">
            <div className="flex items-end justify-between">
              <div className="flex-1" />
              <div>
                <Label className="mb-2 block text-sm">{t('documents.signature')}</Label>
                <div className="border border-border rounded-md p-2 bg-background inline-block">
                  <img
                    src={signatureUrl}
                    alt="Signature"
                    className="h-20 w-auto"
                    data-testid="img-signature"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
