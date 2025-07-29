import * as React from 'react';

import styles from '@/styles/skeleton/Spinner.module.css';

function Spinner() {
  return <span className={styles.spinner} aria-hidden="true" />;
}

export default Spinner;
