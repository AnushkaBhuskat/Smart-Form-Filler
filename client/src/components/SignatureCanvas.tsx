import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SignatureCanvasLib from 'react-signature-canvas';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Pen } from 'lucide-react';

interface SignatureCanvasProps {
  onSignatureChange: (signature: string | null) => void;
}

export default function SignatureCanvas({ onSignatureChange }: SignatureCanvasProps) {
  const { t } = useTranslation();
  const sigCanvas = useRef<SignatureCanvasLib>(null);
  const [hasSignature, setHasSignature] = useState(false);

  const clear = () => {
    sigCanvas.current?.clear();
    setHasSignature(false);
    onSignatureChange(null);
    console.log('Signature cleared');
  };

  const save = () => {
    if (sigCanvas.current?.isEmpty()) {
      return;
    }
    const dataUrl = sigCanvas.current?.toDataURL();
    if (dataUrl) {
      onSignatureChange(dataUrl);
      console.log('Signature saved');
    }
  };

  const handleEnd = () => {
    setHasSignature(!sigCanvas.current?.isEmpty());
    save();
  };

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium block">{t('documents.signature')}</label>
      <Card className="p-4">
        <div className="border-2 border-dashed border-border rounded-md overflow-hidden bg-background">
          <SignatureCanvasLib
            ref={sigCanvas}
            canvasProps={{
              className: 'w-full h-40 cursor-crosshair',
            }}
            onEnd={handleEnd}
          />
        </div>
        <div className="flex items-center justify-between mt-4 gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Pen className="h-4 w-4" />
            <span>{t('documents.capture')}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={clear}
            disabled={!hasSignature}
            data-testid="button-clear-signature"
          >
            {t('documents.clear')}
          </Button>
        </div>
      </Card>
    </div>
  );
}
