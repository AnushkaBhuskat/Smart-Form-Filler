import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        login: "Login",
        logout: "Logout",
        dashboard: "Dashboard",
        forms: "Forms",
        documents: "Documents",
        profile: "Profile"
      },
      auth: {
        login: "Login",
        logout: "Logout",
        register: "Register",
        username: "Username",
        password: "Password",
        fullName: "Full Name",
        email: "Email",
        phoneNumber: "Phone Number",
        welcomeBack: "Welcome Back",
        createAccount: "Create Account",
        alreadyHaveAccount: "Already have an account?",
        dontHaveAccount: "Don't have an account?",
        signIn: "Sign In",
        signUp: "Sign Up"
      },
      dashboard: {
        title: "Available Forms",
        welcome: "Welcome to Government Forms Portal",
        selectForm: "Select a form to get started",
        mySubmissions: "My Submissions",
        myDocuments: "My Documents"
      },
      forms: {
        passport: "Passport Application",
        panCard: "PAN Card Application",
        drivingLicense: "Driving License",
        voterID: "Voter ID Card",
        aadhaar: "Aadhaar Update",
        fillForm: "Fill Form",
        submit: "Submit",
        save: "Save",
        cancel: "Cancel",
        preview: "Preview",
        download: "Download"
      },
      documents: {
        upload: "Upload Document",
        photoID: "Photo ID",
        signature: "Signature",
        addressProof: "Address Proof",
        dragDrop: "Drag and drop files here, or click to browse",
        supportedFormats: "Supported formats: JPG, PNG, PDF (Max 5MB)",
        uploaded: "Uploaded",
        remove: "Remove",
        clear: "Clear",
        capture: "Capture Signature"
      },
      common: {
        loading: "Loading...",
        error: "Error",
        success: "Success",
        submit: "Submit",
        cancel: "Cancel",
        close: "Close",
        save: "Save",
        edit: "Edit",
        delete: "Delete",
        view: "View",
        download: "Download",
        status: "Status",
        pending: "Pending",
        approved: "Approved",
        rejected: "Rejected"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        login: "लॉगिन",
        logout: "लॉगआउट",
        dashboard: "डैशबोर्ड",
        forms: "फॉर्म",
        documents: "दस्तावेज़",
        profile: "प्रोफ़ाइल"
      },
      auth: {
        login: "लॉगिन",
        logout: "लॉगआउट",
        register: "रजिस्टर करें",
        username: "उपयोगकर्ता नाम",
        password: "पासवर्ड",
        fullName: "पूरा नाम",
        email: "ईमेल",
        phoneNumber: "फ़ोन नंबर",
        welcomeBack: "वापसी पर स्वागत है",
        createAccount: "खाता बनाएं",
        alreadyHaveAccount: "क्या आपके पास पहले से खाता है?",
        dontHaveAccount: "क्या आपके पास खाता नहीं है?",
        signIn: "साइन इन करें",
        signUp: "साइन अप करें"
      },
      dashboard: {
        title: "उपलब्ध फॉर्म",
        welcome: "सरकारी फॉर्म पोर्टल में आपका स्वागत है",
        selectForm: "शुरू करने के लिए एक फॉर्म चुनें",
        mySubmissions: "मेरे सबमिशन",
        myDocuments: "मेरे दस्तावेज़"
      },
      forms: {
        passport: "पासपोर्ट आवेदन",
        panCard: "पैन कार्ड आवेदन",
        drivingLicense: "ड्राइविंग लाइसेंस",
        voterID: "वोटर आईडी कार्ड",
        aadhaar: "आधार अपडेट",
        fillForm: "फॉर्म भरें",
        submit: "जमा करें",
        save: "सहेजें",
        cancel: "रद्द करें",
        preview: "पूर्वावलोकन",
        download: "डाउनलोड करें"
      },
      documents: {
        upload: "दस्तावेज़ अपलोड करें",
        photoID: "फोटो आईडी",
        signature: "हस्ताक्षर",
        addressProof: "पता प्रमाण",
        dragDrop: "फाइलें यहां खींचें और छोड़ें, या ब्राउज़ करने के लिए क्लिक करें",
        supportedFormats: "समर्थित प्रारूप: JPG, PNG, PDF (अधिकतम 5MB)",
        uploaded: "अपलोड किया गया",
        remove: "हटाएं",
        clear: "साफ करें",
        capture: "हस्ताक्षर कैप्चर करें"
      },
      common: {
        loading: "लोड हो रहा है...",
        error: "त्रुटि",
        success: "सफलता",
        submit: "जमा करें",
        cancel: "रद्द करें",
        close: "बंद करें",
        save: "सहेजें",
        edit: "संपादित करें",
        delete: "हटाएं",
        view: "देखें",
        download: "डाउनलोड करें",
        status: "स्थिति",
        pending: "लंबित",
        approved: "स्वीकृत",
        rejected: "अस्वीकृत"
      }
    }
  },
  mr: {
    translation: {
      nav: {
        login: "लॉगिन",
        logout: "लॉगआउट",
        dashboard: "डॅशबोर्ड",
        forms: "फॉर्म",
        documents: "कागदपत्रे",
        profile: "प्रोफाइल"
      },
      auth: {
        login: "लॉगिन",
        logout: "लॉगआउट",
        register: "नोंदणी करा",
        username: "वापरकर्तानाव",
        password: "पासवर्ड",
        fullName: "पूर्ण नाव",
        email: "ईमेल",
        phoneNumber: "फोन नंबर",
        welcomeBack: "परत स्वागत आहे",
        createAccount: "खाते तयार करा",
        alreadyHaveAccount: "आधीच खाते आहे?",
        dontHaveAccount: "खाते नाही?",
        signIn: "साइन इन करा",
        signUp: "साइन अप करा"
      },
      dashboard: {
        title: "उपलब्ध फॉर्म",
        welcome: "सरकारी फॉर्म पोर्टलवर आपले स्वागत आहे",
        selectForm: "सुरू करण्यासाठी फॉर्म निवडा",
        mySubmissions: "माझे सबमिशन",
        myDocuments: "माझे कागदपत्रे"
      },
      forms: {
        passport: "पासपोर्ट अर्ज",
        panCard: "पॅन कार्ड अर्ज",
        drivingLicense: "ड्रायव्हिंग लायसन्स",
        voterID: "मतदार ओळखपत्र",
        aadhaar: "आधार अपडेट",
        fillForm: "फॉर्म भरा",
        submit: "सबमिट करा",
        save: "जतन करा",
        cancel: "रद्द करा",
        preview: "पूर्वावलोकन",
        download: "डाउनलोड करा"
      },
      documents: {
        upload: "कागदपत्र अपलोड करा",
        photoID: "फोटो आयडी",
        signature: "स्वाक्षरी",
        addressProof: "पत्ता पुरावा",
        dragDrop: "फायली येथे ड्रॅग आणि ड्रॉप करा किंवा ब्राउझ करण्यासाठी क्लिक करा",
        supportedFormats: "समर्थित स्वरूप: JPG, PNG, PDF (कमाल 5MB)",
        uploaded: "अपलोड केले",
        remove: "काढा",
        clear: "साफ करा",
        capture: "स्वाक्षरी कॅप्चर करा"
      },
      common: {
        loading: "लोड होत आहे...",
        error: "त्रुटी",
        success: "यश",
        submit: "सबमिट करा",
        cancel: "रद्द करा",
        close: "बंद करा",
        save: "जतन करा",
        edit: "संपादित करा",
        delete: "हटवा",
        view: "पहा",
        download: "डाउनलोड करा",
        status: "स्थिती",
        pending: "प्रलंबित",
        approved: "मंजूर",
        rejected: "नाकारले"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
