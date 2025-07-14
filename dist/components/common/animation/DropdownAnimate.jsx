'use client';
import { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
function DropdownAnimate({ children }) {
    const innerRef = useRef(null);
    const [height, setHeight] = useState(0);
    useLayoutEffect(() => {
        if (innerRef.current) {
            setHeight(innerRef.current.scrollHeight);
        }
    }, [children]);
    return (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height, opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
      <div ref={innerRef}>{children}</div>
    </motion.div>);
}
export default DropdownAnimate;
