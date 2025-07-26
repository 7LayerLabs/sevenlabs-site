
import React from 'react';
import ReactDOM from 'react-dom/client';
import LegalPageLayout from './components/LegalPageLayout';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => <h2 className="text-2xl font-bold text-text mt-6 mb-3">{children}</h2>;
const P: React.FC<{ children: React.ReactNode }> = ({ children }) => <p>{children}</p>;
const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => <ul className="list-disc list-inside space-y-2 pl-4">{children}</ul>;
const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => <li>{children}</li>;

const TOSPage: React.FC = () => (
  <LegalPageLayout title="Terms of Service" lastUpdated="July 26, 2024">
    <P>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Seven Layer Labs website (the "Service") operated by Derek ("us", "we", or "our").</P>
    <P>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</P>
    <P>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</P>

    <H2>1. Website Use</H2>
    <P>This website is provided for informational purposes and as a portfolio of projects and services. The information and content on the Service are subject to change without notice.</P>

    <H2>2. Acceptable Use</H2>
    <P>You agree not to use the Service:</P>
    <UL>
      <LI>In any way that violates any applicable national or international law or regulation.</LI>
      <LI>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm us or users of the Service.</LI>
      <LI>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</LI>
      <LI>To use any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service.</LI>
      <LI>To reverse engineer, decompile, or otherwise attempt to extract the source code of the website or any part thereof.</LI>
    </UL>
    
    <H2>3. Intellectual Property Rights</H2>
    <P>The Service and its original content, features, and functionality are and will remain the exclusive property of Derek and Seven Layer Labs. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</P>
    <P>Our trademarks and trade dress, including the "Seven Layer Labs" name, logo, and the "7-Layer Framework" concept, may not be used in connection with any product or service without our prior written consent.</P>
    <P>Any feedback, comments, or suggestions you may provide regarding the Service is entirely voluntary and we will be free to use such feedback, comments or suggestions as we see fit and without any obligation to you.</P>
    
    <H2>4. Links To Other Web Sites</H2>
    <P>Our Service may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</P>
    
    <H2>5. Disclaimers and Limitation of Liability</H2>
    <P>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</P>
    <P>The content on this website is for general information purposes only and does not constitute professional advice. You are solely responsible for any decisions you make based on the information presented.</P>
    <P>IN NO EVENT SHALL SEVEN LAYER LABS, NOR ITS OWNER, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.</P>
    
    <H2>6. Indemnification</H2>
    <P>You agree to defend, indemnify and hold harmless Seven Layer Labs and its owner from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Service, or a breach of these Terms.</P>

    <H2>7. Governing Law</H2>
    <P>These Terms shall be governed and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.</P>

    <H2>8. Changes</H2>
    <P>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</P>
    <P>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</P>

    <H2>9. Contact Us</H2>
    <P>If you have any questions about these Terms, please contact us at: legal@sevenlayerlabs.com</P>
  </LegalPageLayout>
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TOSPage />
  </React.StrictMode>
);
