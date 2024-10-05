import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const PageTransitionWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className='page-transition-wrapper'
        >
            {children}
        </motion.div>
    )
}
    
PageTransitionWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageTransitionWrapper
