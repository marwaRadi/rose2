import { AnimatePresence, motion } from "framer-motion";

function FadeIn({ children ,styling }: { children: React.ReactNode ,styling?:string }) {
  return (
    <AnimatePresence>
      <motion.div 
        className={styling}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default FadeIn;
