import { motion } from 'framer-motion';
import { FiFilm } from 'react-icons/fi';

export const Loading = ({ message = 'Loading...' }) => (
  <div className="flex flex-col items-center justify-center py-32">
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full"
      />
      <FiFilm className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-400" />
    </div>
    <p className="text-gray-400 text-sm mt-6 animate-pulse">{message}</p>
  </div>
);

export const EmptyState = ({
  icon: Icon = FiFilm,
  title = 'No Results',
  message = 'No items found',
  action,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-32"
  >
    <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center mb-6 border-4 border-gray-700/50">
      <Icon className="w-16 h-16 text-gray-600" />
    </div>
    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
    <p className="text-gray-400 text-center max-w-md mb-6">{message}</p>
    {action}
  </motion.div>
);
