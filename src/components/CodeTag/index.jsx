import React from 'react';
import styles from './index.less';

const CodeTag = (props) => {
  const { bg } = props;
  const st = { backgroundColor: '#F9F2F4' };
  if (bg) {
    st.backgroundColor = bg;
  }
  return (
    <span className={styles.code} style={st}>
      {props.children}
    </span>
  );
};
export default CodeTag;
