import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
const MotionChevronDown = motion.create(ChevronDown);

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open ? (
        <MotionChevronDown />
      ) : (
        <MotionChevronDown
          animate={{ rotate: -90 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </AnimatePresence>
  );
}

export default ChevronIcon;
