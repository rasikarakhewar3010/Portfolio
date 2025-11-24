import React from 'react';
import { Button } from '@/components/ui/button';

const ContactMe = () => {
    return (
        <section id="contact" className="relative w-full py-20 px-4 md:px-16 lg:px-24 bg-[#fffaf5]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#0f172a]">
                        Contact <span className="text-[#f7bea7]">Me</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl">
                    <form className="space-y-6" action="mailto:rasika@example.com" method="POST" encType="text/plain">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#f7bea7] focus:border-transparent transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#f7bea7] focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#f7bea7] focus:border-transparent transition-all"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#f7bea7] focus:border-transparent transition-all resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full md:w-auto px-8 py-6 text-lg bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
