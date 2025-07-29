import React from 'react';
import Icon from '@/components/common/icon/Icon';
import styles from '@/styles/features/SignIn.module.css';
import { ActionButton, LinkButton } from '@/components/common/button';
import { BasicInput } from '@/components/common/input';

export default function SignInPage() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <Icon name="logo" size={70} />
            <h1 className={styles.title}>SB에 오신 것을 환영합니다</h1>
            <p className={styles.subtitle}>로그인 또는 가입하시려면 이메일을 입력해주세요. </p>
          </div>
          <form className={styles.form}>
            <BasicInput type="email" placeholder="귀하의 이메일" className={styles.input} />
            <ActionButton type="submit" className={styles.continueButton}>
              <span>계속하기</span>
            </ActionButton>
          </form>
          <span className={styles.dividerText}>또는</span>
          <div className={styles.socialButtons}>
            <ActionButton
              className={styles.oauth}
              leftIcon={<Icon name="google" size={20} />}
              variant="ghost"
            >
              Google 계정으로 계속하기
            </ActionButton>
            <ActionButton
              className={styles.oauth}
              leftIcon={<Icon name="apple" size={20} />}
              variant="ghost"
            >
              Apple로 계속하기
            </ActionButton>
            <ActionButton
              className={styles.oauth}
              leftIcon={<Icon name="kakao" size={20} />}
              variant="ghost"
            >
              kakao 계정으로 계속하기
            </ActionButton>
          </div>
          <p className={styles.disclaimer}>
            계속을 클릭하면
            <LinkButton className={styles.link} href="#" size="sm" variant="text">
              약관
            </LinkButton>
            및
            <LinkButton className={styles.link} href="#" size="sm" variant="text">
              개인 정보 정책
            </LinkButton>
            에 동의하는 것입니다.
          </p>
        </div>
      </div>
    </main>
  );
}
