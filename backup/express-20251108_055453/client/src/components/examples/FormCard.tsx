import FormCard from '../FormCard';

export default function FormCardExample() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <FormCard
        formType="passport"
        title="Passport Application"
        description="Apply for a new passport or renew existing passport"
        estimatedTime="15-20 minutes"
        onFillForm={() => console.log('Fill passport form')}
      />
    </div>
  );
}
