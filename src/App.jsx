import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Multilevelnav from "./Component/Multilevelnav";
import { Footer } from "./Component/Footer";

// Lazy Load Pages
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const SMSPricing = lazy(() => import("./Pages/Pricing/SMSPricing"));
const WhatsAppPricing = lazy(() => import("./Pages/Pricing/WhatsAppPricing"));
const RCSPricing = lazy(() => import("./Pages/Pricing/RCSPricing"));
const EmailPricing = lazy(() => import("./Pages/Pricing/EmailPricing"));
const VoicePricing = lazy(() => import("./Pages/Pricing/VoicePricing"));
const Contact = lazy(() => import("./Pages/Contact"));
const ScheduleDemo = lazy(() => import("./Pages/ScheduleDemo"));
const Career = lazy(() => import("./Pages/Career"));
const Error = lazy(() => import("./Pages/Error"));
const RCS = lazy(() => import("./Pages/RCS/RCS"));
const SMS = lazy(() => import("./Pages/SMS/SMS"));
const SMSAPI = lazy(() => import("./Pages/SMS/SMSAPI"));
const BulkSMS = lazy(() => import("./Pages/SMS/BulkSMS"));
const InternationalSMS = lazy(() => import("./Pages/SMS/InternationalSMS"));
const TwoFactorAuthentication = lazy(() => import("./Pages/SMS/TwoFactorAuthentication"));
const Email = lazy(() => import("./Pages/Email/Email"));
const WhatsApp = lazy(() => import("./Pages/WHATSAPP/WhatsApp"));
const TermsOfService = lazy(() => import("./Pages/TermandCondition"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const MainVoicePage = lazy(() => import("./Pages/Voice/Mainvoicepage"));
const CallPatch = lazy(() => import("./Pages/Voice/CallPatch"));
const ContactCenter = lazy(() => import("./Pages/Voice/ContactCenter"));
const IVR = lazy(() => import("./Pages/Voice/IVR"));
const Voice = lazy(() => import("./Pages/Voice/Voice"));
const VoiceOBD = lazy(() => import("./Pages/Voice/VoiceOBD"));
const BulkSmsBlog = lazy(() => import("./Pages/Blog/BulkSmsBlog"));
const BulkEmailBlog = lazy(() => import("./Pages/Blog/BulkEmailBlog"));
const SmsApiBlog = lazy(() => import("./Pages/Blog/SmsApiBlog"));
const Blog=lazy(()=>import("./Pages/Blog/Blog"))
import ScrollToTop from "./ScrollToTop";
// Action Functions
import { handelScheduleDemo } from "./Pages/ScheduleDemo";
import { handleContact } from "./Pages/Contact";
import { handelCareer } from "./Pages/Career";

// Reusable Page Wrapper
const PageWrapper = ({ children }) => (
  
  <>
     <ScrollToTop /> {/* Ensure ScrollToTop is included here */}
    <Multilevelnav />
    <Suspense fallback={<div className="flex items-center justify-center w-screen h-screen">Loading...</div>}>
      {children}
    </Suspense>
    <Footer />
  </>
);

// Routes Configuration
const routes = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
{ path: "/SMSPricing", element: <SMSPricing /> },
  { path: "/WhatsAppPricing", element: <WhatsAppPricing /> },
  { path: "/RCSPricing", element: <RCSPricing /> },
  { path: "/EmailPricing", element: <EmailPricing /> },
  { path: "/VoicePricing", element: <VoicePricing /> },
  { path: "/Contact", element: <Contact />, action: handleContact },
  { path: "/ScheduleDemo", element: <ScheduleDemo />, action: handelScheduleDemo },
  { path: "/Career", element: <Career />, action: handelCareer },
  { path: "/RCS", element: <RCS /> },
  { path: "/SMS", element: <SMS /> },
  { path: "/SMSAPI", element: <SMSAPI /> },
  { path: "/BulkSMS", element: <BulkSMS /> },
  { path: "/InternationalSMS", element: <InternationalSMS /> },
  { path: "/TwoFactorAuthentication", element: <TwoFactorAuthentication /> },
  { path: "/Email", element: <Email /> },
  { path: "/WhatsApp", element: <WhatsApp /> },
  { path: "/TermsOfService", element: <TermsOfService /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/MainVoicePage", element: <MainVoicePage /> },
  { path: "/CallPatch", element: <CallPatch /> },
  { path: "/ContactCenter", element: <ContactCenter /> },
  { path: "/IVR", element: <IVR /> },
  { path: "/Voice", element: <Voice /> },
  { path: "/VoiceOBD", element: <VoiceOBD /> },
  {path: "/Blog", element: <Blog></Blog>},
  { path: "/BulkSmsBlog", element: <BulkSmsBlog /> },
  { path: "/BulkEmailBlog", element: <BulkEmailBlog /> },
  { path: "/SmsApiBlog", element: <SmsApiBlog /> },
  { path: "*", element: <Error /> },
];


// Router Configuration
const router = createBrowserRouter(
  routes.map(({ path, element, action }) => ({
    path,
    element: <PageWrapper>{element}</PageWrapper>,
    action,
  }))
);

// Main App Component
export const App = () => {
  return <>
    <RouterProvider router={router}>
   
    </RouterProvider>
  </>
 
};

