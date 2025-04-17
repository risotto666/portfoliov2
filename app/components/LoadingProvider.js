"use client";

import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingContext = createContext({ loading: false });

export function LoadingProvider({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pathname !== "/nd") {
      // Csak ha nem a kezdőlap
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ loading }}>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ scale: 1.2, opacity: 1, filter: "blur(0px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(10px)" }}
            exit={{ scale: 1, opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0, ease: "easeInOut" }}
          >
            <motion.div
              className="text-5xl font-bold text-white tracking-widest"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.8] }}
              exit={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="text-slate-700"
              >
                LOADING...
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}
