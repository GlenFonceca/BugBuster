import { motion } from "framer-motion";

export default function BottomToTopReveal({ children, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
