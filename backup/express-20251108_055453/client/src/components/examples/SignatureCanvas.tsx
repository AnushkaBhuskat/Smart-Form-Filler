import SignatureCanvas from '../SignatureCanvas';

export default function SignatureCanvasExample() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <SignatureCanvas
        onSignatureChange={(sig) => console.log('Signature changed:', sig ? 'Captured' : 'Cleared')}
      />
    </div>
  );
}
