"use client";

import React, { createContext, useContext, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Copy, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstallModalContextType {
  open: () => void;
  close: () => void;
}

const InstallModalContext = createContext<InstallModalContextType | undefined>(undefined);

export const InstallModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install -g gdraft";

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <InstallModalContext.Provider value={{ open, close }}>
      {children}
      <Modal isOpen={isOpen} onClose={close} title="Install g-draft">
        <div className="flex flex-col gap-6">
          <p className="text-zinc-400 text-sm leading-relaxed">
            Get started by installing the g-draft CLI globally. You&apos;ll need Node.js 18 or higher.
          </p>
          
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-black border border-white/5 relative group">
            <Terminal className="w-5 h-5 text-red-500 shrink-0" />
            <code className="text-sm font-mono text-zinc-300 flex-1">{installCmd}</code>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-zinc-100 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex flex-col gap-3">
             <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
               Verification
             </div>
             <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.03]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs text-zinc-400 font-mono">gdraft --version</span>
             </div>
          </div>

          <Button 
            variant="primary" 
            className="w-full h-14 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-base mt-2"
            onClick={close}
          >
            I&apos;ve installed it
          </Button>
        </div>
      </Modal>
    </InstallModalContext.Provider>
  );
};

export const useInstallModal = () => {
  const context = useContext(InstallModalContext);
  if (!context) {
    throw new Error("useInstallModal must be used within an InstallModalProvider");
  }
  return context;
};
