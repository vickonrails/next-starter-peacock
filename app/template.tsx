'use client'

import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 }
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: 'linear' }}
        >
            {children}
        </motion.main>
    );
}