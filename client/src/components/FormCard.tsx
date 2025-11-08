import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock } from 'lucide-react';

interface FormCardProps {
  formType: string;
  title: string;
  description?: string;
  estimatedTime?: string;
  onFillForm: () => void;
}

export default function FormCard({ formType, title, description, estimatedTime, onFillForm }: FormCardProps) {
  const { t } = useTranslation();

  return (
    <Card className="hover-elevate" data-testid={`card-form-${formType}`}>
      <CardHeader className="space-y-0 pb-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="truncate">{title}</span>
            </CardTitle>
            {description && (
              <CardDescription className="mt-2">{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {estimatedTime && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{estimatedTime}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          className="flex-1"
          onClick={onFillForm}
          data-testid={`button-fill-${formType}`}
        >
          {t('forms.fillForm')}
        </Button>
      </CardFooter>
    </Card>
  );
}
