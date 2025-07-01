import { useEffect, useRef, useState } from 'react';
import styles from '@/global/component/logo/Logo.module.css';

interface LogoIconProps {
  size?: number;
}

export default function LogoIcon({ size }: LogoIconProps) {
  const fullText = 'hello';
  const [displayText, setDisplayText] = useState('</>');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMounted = useRef(true);

  const clearTyping = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const typeText = (i: number) => {
    if (i >= fullText.length) return;

    timeoutRef.current = setTimeout(() => {
      if (!isMounted.current) return;
      setDisplayText(fullText.slice(0, i + 1));
      typeText(i + 1);
    }, 100);
  };

  const handleMouseEnter = () => {
    clearTyping();
    setDisplayText('');
    typeText(0);
  };

  const handleMouseLeave = () => {
    clearTyping();
    setDisplayText('</>');
  };

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      clearTyping();
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      className={`${styles.logoIcon} ${size ? styles.fixed : ''}`}
      style={size ? { width: size, height: size } : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <rect
        x="8"
        y="12"
        width="48"
        height="32"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect x="28" y="46" width="8" height="6" fill="currentColor" />
      <rect x="20" y="52" width="24" height="2" fill="currentColor" />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        fontSize="14"
        fill="currentColor"
        fontFamily="monospace"
        pointerEvents="none"
      >
        {displayText}
      </text>
    </svg>
  );
}
