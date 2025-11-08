# API Setu Integration Setup

This application uses **API Setu** (https://apisetu.gov.in) - India's official Open API Platform for government services.

## What is API Setu?

API Setu is the Government of India's unified API gateway that provides consent-based access to:
- **PAN Verification** - Income Tax Department
- **GSTIN Details** - GST Network
- **Aadhaar Verification** - via DigiLocker (consent-based)
- **Education Credentials** - National Academic Depository
- **And many more** government services

## Setup Instructions

### Step 1: Register on API Setu

1. Visit https://apisetu.gov.in/
2. Click "Sign Up" or "Register"
3. Complete the registration process with your organization details
4. Verify your email/phone

### Step 2: Subscribe to Required APIs

1. Log in to API Setu portal
2. Browse the **API Marketplace**
3. Subscribe to the following APIs based on your needs:
   - **PAN Verification API** (for vendor onboarding, KYC)
   - **Aadhaar e-KYC** (via DigiLocker - requires user consent)
   - **GSTIN Verification** (for business verification)
4. Wait for publisher approval (usually 1-2 business days)
5. Once approved, you'll receive API credentials

### Step 3: Get API Credentials

1. Navigate to "My Subscriptions" or "Developer Console"
2. Copy your **API Key** / **Client ID** and **Secret**
3. Note the API endpoints for each subscribed service

### Step 4: Configure Environment Variables

Add the following to your `.env` file:

```env
# API Setu Configuration
API_SETU_KEY=your_api_key_here

# Optional: If using OAuth-based APIs
API_SETU_CLIENT_ID=your_client_id
API_SETU_CLIENT_SECRET=your_client_secret
```

### Step 5: Test the Integration

The application will automatically:
- Use **live API Setu** services when `API_SETU_KEY` is configured
- Fall back to **demo mode** (mock data) when credentials are not available

## Demo Mode

Without API Setu credentials, the application runs in **demo mode**:
- Returns sample/mock data for testing
- Allows you to develop and test the UI/UX
- No actual government API calls are made

## API Usage

### Verify Aadhaar

```javascript
POST /api/api-setu/verify
Content-Type: application/json

{
  "documentType": "aadhaar",
  "documentNumber": "1234-5678-9012",
  "consent": true
}
```

### Verify PAN

```javascript
POST /api/api-setu/verify
Content-Type: application/json

{
  "documentType": "pan",
  "documentNumber": "ABCDE1234F",
  "consent": true
}
```

## Important Notes

### User Consent

- **All verification requests require explicit user consent**
- Consent is mandatory for privacy compliance
- The application prompts users for consent before verification

### Aadhaar Verification

- Aadhaar verification through API Setu uses **DigiLocker** integration
- Fully compliant with UIDAI guidelines
- Consent-based and privacy-preserving

### Security

- API keys are **secret** - never commit them to version control
- Use environment variables for all sensitive credentials
- Rotate API keys periodically

### Compliance

- Follow UIDAI guidelines for Aadhaar usage
- Comply with Income Tax Act for PAN data
- Adhere to data retention and privacy policies

## Migration from DigiLocker

If you were using DigiLocker integration:

1. **Old endpoint**: `/api/digilocker`
2. **New endpoint**: `/api/api-setu/verify`
3. **Benefits**:
   - Unified gateway for multiple government services
   - Simpler authentication (API key vs OAuth for most services)
   - Broader service coverage (PAN, GSTN, education, etc.)
   - Official government platform

## Support

- **API Setu Documentation**: https://docs.apisetu.gov.in/
- **Developer Portal**: https://apisetu.gov.in/
- **Support**: Contact API Setu support through the portal

## Troubleshooting

### "API_SETU_KEY not configured"
- Add `API_SETU_KEY` to your `.env` file
- Application will use demo mode until configured

### "Verification failed"
- Check if you're subscribed to the required API
- Verify API key is correct
- Ensure user provided consent
- Check API Setu service status

### "Subscription not approved"
- Wait for publisher approval (1-2 business days)
- Check subscription status in API Setu portal
- Contact API Setu support if delayed

## Production Deployment

Before deploying to production:

1. ✅ Register on API Setu with production credentials
2. ✅ Subscribe to required APIs and wait for approval
3. ✅ Configure `API_SETU_KEY` in production environment
4. ✅ Test all verification flows
5. ✅ Implement proper error handling
6. ✅ Set up monitoring and logging
7. ✅ Review compliance requirements
