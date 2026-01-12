import { motion } from 'framer-motion';

/**
 * Reusable Button Component
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const variants = {
    primary:
      'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/50',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outline:
      'bg-transparent border-2 border-white/20 hover:bg-white/10 text-white',
    ghost: 'bg-white/5 hover:bg-white/10 text-white',
    danger:
      'bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 
        rounded-full font-semibold transition-all
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;



