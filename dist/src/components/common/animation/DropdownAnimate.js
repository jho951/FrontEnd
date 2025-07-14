'use client';
import { jsx as _jsx } from "react/jsx-runtime";
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
    return (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height, opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.25, ease: 'easeInOut' }, style: { overflow: 'hidden' }, children: _jsx("div", { ref: innerRef, children: children }) }));
}
export default DropdownAnimate;
