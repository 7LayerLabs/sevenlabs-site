
import React from 'react';
import ReactDOM from 'react-dom/client';
import LegalPageLayout from './components/LegalPageLayout';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => <h2 className="text-2xl font-bold text-text mt-6 mb-3">{children}</h2>;
const P: React.FC<{ children: React.ReactNode }> = ({ children }) => <p>{children}</p>;
const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => <ul className="list-disc list-inside space-y-2 pl-4">{children}</ul>;
const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => <li>{children}</li>;

const PrivacyPolicyPage: React.FC = () => (
  <LegalPageLayout title="Privacy Policy" lastUpdated="July 26, 2024">
    <P>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</P>
    <P>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</P>

    <H2>1. Information We Collect</H2>
    <P>We may collect information in the following ways:</P>
    <UL>
      <LI><strong>Information You Provide:</strong> When you use our contact form, you may provide us with personal information such as your name, email address, and the content of your message. We use this information solely to respond to your inquiries.</LI>
      <LI><strong>Automatically Collected Data:</strong> Like most websites, our servers may automatically log standard data provided by your web browser. This data may include your device's IP address, browser type and version, the pages you visit, the time and date of your visit, and other details about your visit. This information is used for analytical purposes to improve our website.</LI>
    </UL>
    
    <H2>2. How We Use Your Information</H2>
    <P>We use the information we collect to:</P>
    <UL>
        <LI>Provide, operate, and maintain our website.</LI>
        <LI>Respond to your comments, questions, and requests.</LI>
        <LI>Monitor and analyze trends, usage, and activities in connection with our Service to improve it.</LI>
    </UL>

    <H2>3. Sharing Of Your Information</H2>
    <P>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential (e.g., our hosting provider).</P>
    <P>We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</P>
    
    <H2>4. Data Security</H2>
    <P>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</P>
    
    <H2>5. Your Data Protection Rights</H2>
    <P>Depending on your location, you may have the right to access, correct, update, or request deletion of your personal information. If you wish to exercise any of these rights, please contact us.</P>
    
    <H2>6. Children's Privacy</H2>
    <P>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.</P>

    <H2>7. Changes to This Privacy Policy</H2>
    <P>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</P>

    <H2>8. Contact Us</H2>
    <P>If you have any questions about this Privacy Policy, you can contact us at: legal@sevenlayerlabs.com</P>
  </LegalPageLayout>
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PrivacyPolicyPage />
  </React.StrictMode>
);
