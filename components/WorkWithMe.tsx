
import React, { useState } from 'react';
import Button from './Button';

const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 14.81 6.56 6.32C4.2 3.96 4.2 2 6.56 2c2.36 0 2.36 1.96 0 4.32l8.49 8.49Z"/><path d="M14.12 21.21c2.36-2.36 2.36-4.32 0-6.68L6.32 6.74c-2.36-2.36-4.32-2.36-6.68 0L2 9.09l7.06 7.06.35.35Z"/><path d="M22 9.09 12.29 18.8l-2.12-2.12 9.7-9.7.35-.35c2.36-2.36 4.32-2.36 6.68 0l-2.83 2.83Z"/><path d="m2.12 14.12.71.71a4.72 4.72 0 0 0 6.68 0l-2.12-2.12-2.83 2.83-.35.35c-2.36 2.36-2.36 4.32 0 6.68l.71.71"/></svg>
);

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

const HandshakeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/><path d="M13 17a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5"/><path d="m4 12 8 0"/><path d="m12 12 8 0"/></svg>
);


const collaborationTypes = [
  {
    icon: <LightbulbIcon className="h-8 w-8 text-brand-yellow" />,
    title: "Strategy & Naming",
    description: "Got a half-baked idea? I help founders find clarity, choose a powerful name, and build a roadmap for their vision."
  },
  {
    icon: <CodeIcon className="h-8 w-8 text-brand-sky" />,
    title: "Co-Creation & Build",
    description: "Need a technical partner to bring your project to life? I specialize in rapid prototyping and building scalable systems."
  },
  {
    icon: <HandshakeIcon className="h-8 w-8 text-brand-green" />,
    title: "Project Acquisition",
    description: "See a project in the lab you'd like to own? Many of my creations are available for acquisition or partnership."
  }
];

const WorkWithMe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    setStatus('sending');
    // Mock sending form
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
        setMessage('');
      }, 3000);
    }, 1500);
  };

  const buttonText = {
    idle: 'Send Message',
    sending: 'Sending...',
    success: 'Sent!',
    error: 'Try Again'
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-surface rounded-2xl my-16 sm:my-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text">
                            Let's Build Together
                        </h2>
                        <p className="mt-4 text-muted text-lg">
                            Have an idea that needs a home? Let's talk. Here are a few ways we can collaborate.
                        </p>
                    </div>
                    <div className="space-y-6">
                        {collaborationTypes.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-text">{item.title}</h3>
                                    <p className="text-muted/90">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-background p-8 rounded-xl border border-subtle shadow-lg">
                    <h3 className="text-2xl font-bold text-text mb-1">Get in Touch</h3>
                    <p className="text-muted mb-6">Or just say hi. I'll get back to you soon.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2.5 bg-surface border border-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green text-text placeholder-muted/70"
                                placeholder="your.email@example.com"
                                disabled={status === 'sending' || status === 'success'}
                                aria-label="Email address"
                            />
                        </div>
                         <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2.5 bg-surface border border-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green text-text placeholder-muted/70"
                                placeholder="Tell me about your project..."
                                disabled={status === 'sending' || status === 'success'}
                                aria-label="Message"
                            />
                        </div>
                        <div>
                            <Button type="submit" variant="primary" className="w-full" disabled={status === 'sending' || status === 'success'}>
                                {buttonText[status]}
                            </Button>
                        </div>
                    </form>
                    {status === 'success' && <p className="mt-4 text-sm text-center text-brand-green">Message sent successfully! I'll be in touch.</p>}
                    {status === 'error' && <p className="mt-4 text-sm text-center text-brand-red">Please fill out all fields.</p>}
                </div>
            </div>
        </div>
    </section>
  );
};

export default WorkWithMe;
