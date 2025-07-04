import { LogoIconProps } from '@/global/type/IconType';

export default function LogoIcon({ text = '</>' }: LogoIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor">
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
        {text}
      </text>
    </svg>
  );
}
