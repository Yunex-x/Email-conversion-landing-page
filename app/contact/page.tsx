'use client';
export default function ContactPage() {
  const emailAddress = "hello@flowsolo.com";
  const subject = "FlowSolo Inquiry";
  const body = "Hi FlowSolo team,\n\nI'm interested in learning more about FlowSolo.\n\n";
  
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copyEmail = () => {
    navigator. clipboard.writeText(emailAddress);
    alert('Email copied to clipboard!');
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-950">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <section className="flex flex-col items-center justify-center text-center">
          <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight px-4">
              Get in touch with{" "}
              <span className="text-yellow-400">FlowSolo</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              Have questions about FlowSolo? Want to join our early access program?
              We'd love to hear from you.
            </p>
          </div>

          {/* Email Contact Box */}
          <div className="w-full max-w-2xl rounded-2xl bg-blue-900/40 backdrop-blur-sm border border-white/10 p-8 md:p-12 hover:bg-blue-900/60 transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-6 bg-yellow-400/20 rounded-full flex items-center justify-center">
              <span className="text-5xl">📧</span>
            </div>
            
            <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">
              Email Us
            </h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Send us an email and we'll get back to you within 24 hours
            </p>
            
            {/* Email Action */}
            <div className="space-y-4">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-yellow-400 text-blue-950 font-bold text-lg px-8 py-5 rounded-xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 group"
              >
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M24 5.457v13.909c0 . 904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                <span>Compose in Gmail</span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-gray-400 text-sm">or</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-3 w-full bg-transparent text-yellow-400 font-semibold text-base px-6 py-4 rounded-xl hover:bg-yellow-400/10 transition-all duration-300 border-2 border-yellow-400/40 hover:border-yellow-400 group"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="font-mono">{emailAddress}</span>
                <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">(Copy)</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}