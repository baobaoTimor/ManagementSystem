import {HeartTwoTone} from '@ant-design/icons';
import {  HelmetProvider } from 'react-helmet-async';
import { Link, connect } from 'umi';
import React from 'react';
import logo from '../assets/timor.jpeg';
import styles from './UserLayout.less';

const UserLayout = props => {
  const {
    children,
  } = props;

  return (
    <HelmetProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                {/* <img alt="logo" className={styles.logo} src={logo} /> */}
                <span className={styles.title}>Management Heaven</span>
              </Link>
            </div>
            <div className={styles.desc}>日复一日,年复一年</div>
          </div>
          {children}
        </div>
        <div className={styles.footer}>2020 <HeartTwoTone twoToneColor="#1890ff" className={styles.love}/> Timor</div>
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
