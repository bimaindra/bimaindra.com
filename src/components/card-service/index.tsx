'use client';

import { Card, CardHeader } from '@heroui/react';
import { motion } from 'motion/react';
import type { CardServicePropsType } from '@/types/components';

const CardService = ({ title, icon }: CardServicePropsType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeInOut' },
      }}
      className="h-full"
    >
      <Card className="group h-full border border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-700">
        <CardHeader className="flex-col items-center pb-4 pt-6">
          <motion.div
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-teal-400 to-cyan-300 text-white"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
          >
            {icon}
          </motion.div>
          <motion.h3
            className="text-center text-sm font-title text-gray-900 dark:text-white lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {title}
          </motion.h3>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default CardService;
