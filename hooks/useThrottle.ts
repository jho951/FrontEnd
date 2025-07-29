import { useMemo, useEffect } from 'react';
import debounce from 'lodash/debounce';

/**
 * useDebounce 훅 - lodash 기반의 디바운스 함수 생성
 *
 * 주어진 콜백 함수의 실행을 지정한 지연 시간만큼 지연시킵니다.
 * 여러 번 호출되는 이벤트(예: 검색 입력, 스크롤 등)의 과도한 실행을 방지할 때 유용합니다.
 *
 * @template T - 디바운스할 콜백 함수 타입
 * @param {T} callback - 디바운스할 콜백 함수
 * @param {number} delay - 지연 시간(ms)
 * @returns {T} 디바운스된 콜백 함수 (타입은 원래 콜백과 동일)
 *
 * @example
 * ```tsx
 * const debouncedLog = useDebounce((value: string) => {
 *   console.log('입력된 값:', value);
 * }, 300);
 *
 * <input onChange={e => debouncedLog(e.target.value)} />
 * ```
 *
 * @note 컴포넌트가 언마운트될 때 `cancel()`을 호출하여 메모리 누수를 방지합니다.
 */
export function useDebounce<T extends (...args: unknown[]) => void>(callback: T, delay: number): T {
  const debounced = useMemo(() => debounce(callback, delay), [callback, delay]);

  useEffect(() => {
    return () => {
      debounced.cancel(); // 컴포넌트 언마운트 시 디바운스 취소
    };
  }, [debounced]);

  // lodash.debounce는 DebouncedFunc<T> 타입을 반환하지만 T로 단언해 사용
  return debounced as unknown as T;
}
