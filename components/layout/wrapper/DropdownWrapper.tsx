import { useEffect, useRef, useState } from 'react';
import { DropdownProps } from '@/types';
import styles from '@/styles/wrapper/DropdownAnimation.module.css';

export default function DropdownWrapper({ id, isOpen, children }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const resize = () => {
      const scrollHeight = el.scrollHeight;
      setHeight(`${scrollHeight}px`);
    };

    if (isOpen) {
      resize();

      observerRef.current = new ResizeObserver(resize);
      observerRef.current.observe(el);
    } else {
      setHeight('0px');
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [isOpen]);

  return (
    <div
      id={id}
      role="region"
      aria-hidden={!isOpen}
      className={`${styles.dropdownWrapper} ${isOpen ? styles.dropdownWrapperOpen : ''}`}
      style={{
        maxHeight: height,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
}
