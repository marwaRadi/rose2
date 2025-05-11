"use client"

import { AnimatePresence, motion } from "framer-motion";

function Overlay({

  children,
}: {
  showOverlay?: boolean;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Overlay;

// initial={{ transform: "translateY(100%)" }}
//   animate={{ transform: `${showOverlay ? "translateY(0%)":"translateY(100%)"}` }}
