import { motion } from 'framer-motion';

/**
 * Reusable Card Component
 */
export const Card = ({
  children,
  className = '',
  hoverable = false,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4 } : {}}
      className={`
        bg-gray-800/50 backdrop-blur-sm 
        border border-white/10 rounded-xl 
        overflow-hidden transition-all
        ${hoverable ? 'hover:border-white/20 hover:shadow-xl' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;



