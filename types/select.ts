// 옵션 한 개의 타입
interface SelectOption {
  label: string;
  value: string;
}

// 공통 Select Props (DropdownSelect 등에서 사용)
interface SelectProps<T extends SelectOption> {
  /** 드롭다운에 표시될 옵션 리스트 */
  options: T[];
  /** 현재 선택된 값 (T['value']) */
  value: T['value'];
  /** 선택 변경 핸들러 */
  onChange: (value: T['value']) => void;
  /** 커스텀 클래스 */
  className?: string;
  /** 비어있을 때 또는 선택 전 표시할 플레이스홀더 */
  placeholder?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';
  /** 옵션 표시 방법 커스터마이징 */
  renderOptionLabel?: (option: T) => React.ReactNode;
}

interface MultiSelectProps<T extends SelectOption> {
  options: T[];
  values: T['value'][];
  onChange: (values: T['value'][]) => void;
  className?: string;
  placeholder?: React.ReactNode;
  renderOptionLabel?: (option: T) => React.ReactNode;
}

interface InlineSelectProps<T extends SelectOption> {
  options: T[];
  value: T['value'];
  onChange: (value: T['value']) => void;
  className?: string;
  placeholder?: React.ReactNode;
  renderOptionLabel?: (option: T) => React.ReactNode;
}

interface CompactSelectProps<T extends SelectOption> {
  options: T[];
  value: T['value'];
  onChange: (value: T['value']) => void;
  className?: string;
  placeholder?: React.ReactNode;
  renderOptionLabel?: (option: T) => React.ReactNode;
}

/**
 * PopoverSelect Props
 */
interface PopoverSelectProps<T extends SelectOption> {
  options: T[];
  value: T['value'];
  onChange: (value: T['value']) => void;
  placeholder?: React.ReactNode;
  renderOptionLabel?: (option: T) => React.ReactNode;
}

interface SearchableSelectProps<T extends SelectOption> {
  options: T[];
  value: T['value'];
  onChange: (value: T['value']) => void;
  placeholder?: React.ReactNode;
  renderOptionLabel?: (option: T) => React.ReactNode;
}

interface SegmentedSelectProps<T extends SelectOption> {
  options: T[];
  value: T['value'];
  onChange: (value: T['value']) => void;
  disabled?: boolean;
  iconMapper?: (option: T) => React.ReactNode;
}

/**
 * 비동기 옵션을 검색해서 렌더링하는 Select 컴포넌트
 *
 * @template T - SelectOption을 확장한 제네릭 타입
 * @param {T['value']} value - 현재 선택된 값
 * @param {(value: T['value']) => void} onChange - 선택 시 호출되는 콜백
 * @param {(input: string) => Promise<T[]>} fetchOptions - 입력값 기반으로 옵션 목록을 가져오는 함수
 * @param {string} [placeholder] - 입력창 placeholder 텍스트
 * @param {string} [loadingText] - 로딩 중 텍스트
 * @param {string} [noOptionsText] - 결과 없음 텍스트
 * @param {(option: T) => React.ReactNode} [renderOptionLabel] - 옵션 커스터마이징 렌더 함수
 * @param {string} [className] - 추가 클래스 이름
 */
interface AsyncSelectProps<T extends SelectOption> {
  value: T['value'];
  onChange: (value: T['value']) => void;
  fetchOptions: (input: string) => Promise<T[]>;
  placeholder?: string;
  loadingText?: string;
  noOptionsText?: string;
  renderOptionLabel?: (option: T) => React.ReactNode;
  className?: string;
}

export type {
  SelectProps,
  SelectOption,
  MultiSelectProps,
  AsyncSelectProps,
  CompactSelectProps,
  InlineSelectProps,
  PopoverSelectProps,
  SearchableSelectProps,
  SegmentedSelectProps,
};
