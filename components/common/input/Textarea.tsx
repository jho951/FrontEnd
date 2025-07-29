'use client';

import { forwardRef, useRef, useEffect } from 'react';
import type { ForwardedRef } from 'react';

import type { TextareaProps } from '@/types';
import styles from '@/styles/input/input.module.css';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ autoResize = true, className = '', ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (autoResize && internalRef.current) {
        const el = internalRef.current;
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
      }
    }, [props.value, autoResize]);

    const setRefs = (el: HTMLTextAreaElement | null) => {
      internalRef.current = el;

      if (typeof ref === 'function') {
        ref(el);
      } else if (ref && typeof ref === 'object' && ref !== null) {
        ref.current = el;
      }
    };

    return <textarea ref={setRefs} className={`${styles.input} ${className}`} {...props} />;
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
