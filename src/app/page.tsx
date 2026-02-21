"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send, Target, Radar, Flame, CheckCircle2, Bot } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-fuchsia-500/30 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter uppercase text-white">
          <Target className="w-6 h-6 text-fuchsia-500" />
          Clarity.AI
        </div>
        <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">
          Log In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center max-w-5xl mx-auto relative z-10">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fuchsia-600/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-bold tracking-widest uppercase mb-8 text-fuchsia-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Intent Scoring Engine</span>
        </motion.div>
        
        <motion.h1 {...fadeInUp} className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-600 leading-none">
          Stop burning cash<br/>on FB Ads.
        </motion.h1>
        
        <motion.p {...fadeInUp} className="text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-medium">
          Clarity is an autonomous agent that scans Reddit 24/7 for high-intent complaints about problems you solve, and drafts native, non-spammy replies that drive paying customers.
        </motion.p>

        <motion.div {...fadeInUp} className="w-full max-w-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-2 p-1 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none font-bold tracking-wider text-sm transition-all"
                required
              />
              <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-fuchsia-600 text-white font-bold tracking-widest uppercase text-xs hover:bg-fuchsia-500 transition-colors shadow-[0_0_30px_rgba(192,38,211,0.4)]">
                Access <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 font-bold text-sm justify-center uppercase tracking-widest">
              <CheckCircle2 className="w-5 h-5" />
              <span>Access Requested</span>
            </div>
          )}
        </motion.div>
      </section>

      {/* Dashboard Mockup UI */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-32 relative z-20">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full rounded-2xl bg-zinc-900/50 border border-white/10 p-2 backdrop-blur-3xl shadow-2xl">
          <div className="w-full rounded-xl bg-[#09090b] border border-white/5 overflow-hidden">
            
            {/* Mock Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/5">
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-zinc-400 font-bold text-xs uppercase tracking-wider"><Radar className="w-4 h-4 text-fuchsia-500" /> Scanning r/SaaS</div>
                <div className="flex items-center gap-2 text-zinc-400 font-bold text-xs uppercase tracking-wider"><Flame className="w-4 h-4 text-orange-500" /> 14 Leads Found</div>
              </div>
            </div>

            {/* Mock Lead Card */}
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-medium text-sm">u/founder404 • 2h ago</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20 flex gap-2 items-center"><Target className="w-3 h-3"/> Intent Score: 94</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">I am so sick of paying agencies for content marketing that looks like it was generated by ChatGPT in 5 seconds.</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Does anyone have a tool or a workflow that actually repurposes my technical documentation into something human-readable for LinkedIn?</p>
              </div>

              <div className="p-6 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/20 relative">
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="px-3 py-1 rounded bg-zinc-800 text-xs font-bold text-zinc-400 hover:text-white uppercase">Skip</button>
                  <button className="px-3 py-1 rounded bg-fuchsia-600 text-xs font-bold text-white uppercase shadow-lg shadow-fuchsia-500/20">Copy Natively</button>
                </div>
                <p className="text-fuchsia-400 font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-2"><Bot className="w-4 h-4"/> AI Draft (Gemini 3 Pro)</p>
                <p className="text-zinc-300 text-sm leading-relaxed">I feel this pain completely. I actually built a tool specifically for devs that hooks into GitHub webhooks and Notion APIs, taking your raw commit messages/docs and generating formatted threads. It doesn't use the generic ChatGPT prompt. Happy to share a beta link if you want to try it out?</p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Metric Highlights */}
      <section className="w-full border-y border-white/5 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <div className="text-center md:px-8 pt-8 md:pt-0">
            <h4 className="text-5xl font-black text-fuchsia-500 mb-2">24/7</h4>
            <p className="text-zinc-400 font-bold tracking-widest uppercase text-xs">Continuous Scraping</p>
          </div>
          <div className="text-center md:px-8 pt-8 md:pt-0">
            <h4 className="text-5xl font-black text-white mb-2">&gt;80</h4>
            <p className="text-zinc-400 font-bold tracking-widest uppercase text-xs">Minimum Intent Score</p>
          </div>
          <div className="text-center md:px-8 pt-8 md:pt-0">
            <h4 className="text-5xl font-black text-emerald-400 mb-2">0%</h4>
            <p className="text-zinc-400 font-bold tracking-widest uppercase text-xs">API Ban Risk (Native Posting)</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-32 bg-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-fuchsia-900/10 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-black mb-8 tracking-tighter">Get your first 100 customers.</h2>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-10 py-5 rounded-xl bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Request Access
          </button>
        </div>
      </section>
      
      {/* Footer Mini */}
      <footer className="w-full py-8 text-center text-xs font-bold tracking-widest uppercase text-zinc-600 border-t border-white/5">
        <p>© 2026 Clarity.AI. Built with OpenClaw.</p>
      </footer>
    </main>
  );
}