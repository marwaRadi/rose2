import { motion } from "framer-motion";
type ScaleWhileTopProps = {
  children: React.ReactNode;
  styling?: string;
  isValid?: boolean;
};
function ScaleWhileTap({ children, styling, isValid }: ScaleWhileTopProps) {
  return (
    <motion.button
      disabled={!isValid}
      className={styling}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
}

export default ScaleWhileTap;
