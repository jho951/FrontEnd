import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FooterNav from '@/components/common/accessibility/FooterNav';
import FooterSns from '@/components/common/accessibility/FooterSns';
import { FOOTER_LINK } from '@/constants/link';
import styles from '@/styles/footer/Footer.module.css';
function Footer() {
    return (_jsxs("footer", { className: styles.footer, children: [_jsx("div", { className: styles.columns, children: FOOTER_LINK.map((section, idx) => (_jsx(FooterNav, { title: section.title, links: section.links }, idx))) }), _jsx(FooterSns, {})] }));
}
export default Footer;
