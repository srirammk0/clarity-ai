"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send, Target, Radar, Flame, Bot, ShieldAlert, ArrowUpRight, Crosshair, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-red-500/30 overflow-x-hidden">
      
      {/* Navbar Aggressive */}
      <nav className="w-full flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5 relative z-50">
        <div className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase text-white">
          <Crosshair className="w-6 h-6 text-red-500" />
          CLARITY.AI
        </div>
        <button className="px-6 py-2.5 bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-red-500/50 transition-all rounded-sm text-slate-300">
          Sign In
        </button>
      </nav>

      {/* Hero Section Hacker/Growth */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <motion.div {...fadeInUp} className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 text-[10px] font-black tracking-[0.2em] uppercase mb-8 text-red-400 rounded-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>Beta v2.0 Live</span>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-[0.9]">
            DOMINATE<br/>REDDIT LEADS.
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
            Stop burning cash on generic SaaS ads. Clarity is an autonomous agent that scrapes subreddits 24/7, scores user intent, and drafts highly-converting native replies that steal customers from your competitors.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER EMAIL" 
                className="flex-1 bg-black/50 border border-slate-800 px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-500 font-bold tracking-wider text-sm transition-all rounded-sm uppercase"
                required
              />
              <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-10 py-5 bg-red-600 text-white font-black tracking-widest uppercase text-sm hover:bg-red-500 transition-colors shadow-[0_0_40px_rgba(220,38,38,0.3)] rounded-sm">
                Deploy <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 px-6 py-5 bg-green-500/10 border border-green-500/30 text-green-400 font-bold text-sm uppercase tracking-widest rounded-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>Agent Deployed. Check Inbox.</span>
            </div>
          )}
        </motion.div>

        {/* Aggressive Glass UI Mockup */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full relative z-20 mt-12 lg:mt-0">
          <div className="absolute -inset-1 bg-gradient-to-br from-red-500/30 to-slate-900/50 blur-xl opacity-50 rounded-xl" />
          <div className="relative w-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
            
            <div className="flex justify-between items-center px-4 py-3 border-b border-slate-800 bg-black/50 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Radar className="w-4 h-4 text-red-500 animate-spin-slow" />
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Live Stream • r/SaaS</span>
              </div>
              <span className="px-2 py-1 bg-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest rounded-sm border border-red-500/20">Intent: High</span>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                  <span className="text-white">u/founder404</span> • 2m ago
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">"I'm so sick of keyword-matching lead gen tools. They're basically just spam bots."</h3>
                <p className="text-slate-400 text-sm">Does anyone have a tool that actually uses AI to check if the user is asking for a solution before replying?</p>
              </div>

              <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-sm relative group">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-sm" />
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-[10px] font-black text-red-400 uppercase tracking-widest">
                    <Bot className="w-3.5 h-3.5" /> AI Draft Generated
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded-sm border border-slate-800">Match: 94%</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">I built exactly this. It's called Clarity.ai — it uses Gemini to semantically score intent before drafting replies. You review it, then post natively so you don't get banned.</p>
                <button className="w-full py-2.5 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-500/50 hover:border-red-600 transition-all text-xs font-black uppercase tracking-widest rounded-sm">
                  1-Click Copy & Reply Natively
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Feature Blocks */}
      <section className="w-full py-32 border-t border-slate-800/50 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 md:flex justify-between items-end">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">Weaponized<br/><span className="text-slate-500">Growth.</span></h2>
              <p className="text-slate-400 text-lg">Keyword matching is dead. We use deep semantic scoring to find people practically begging for your product.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Semantic Scoring", desc: "If the post intent score is under 80/100, we skip it. No more replying to useless threads." },
              { icon: ShieldAlert, title: "Ban Protection", desc: "API posting gets you shadowbanned. We draft the reply, you click copy, and post it natively from your own account." },
              { icon: Flame, title: "Competitor Hijacking", desc: "Track mentions of your rivals. When their users complain, our agent drafts a reply explaining why you're better." }
            ].map((feature, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="p-8 bg-black border border-slate-800 hover:border-red-500/50 transition-all rounded-sm group relative overflow-hidden">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center mb-8 border border-slate-800 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all rounded-sm">
                  <feature.icon className="w-6 h-6 text-slate-400 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-32 bg-red-600 text-center relative overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-6xl md:text-[7rem] font-black mb-10 tracking-tighter uppercase text-white leading-none">
            Scale <br/> Ruthlessly.
          </h2>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-12 py-6 bg-black text-white font-black tracking-widest uppercase text-sm hover:bg-slate-900 transition-colors shadow-2xl rounded-sm flex items-center gap-3">
            Get The Beta <ArrowUpRight className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </section>
      
      <footer className="w-full py-8 text-center text-[10px] font-black tracking-[0.2em] uppercase text-slate-600 bg-black">
        <p>© 2026 CLARITY.AI // ALL SYSTEMS OPERATIONAL</p>
      </footer>
    </main>
  );
}