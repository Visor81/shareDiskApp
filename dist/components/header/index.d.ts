export interface HeaderProps {
    onSearch: (value: string) => void;
    onClose: () => void;
    locale?: 'en' | 'ru' | 'th';
}
export declare function Header({ onSearch, onClose, locale }: HeaderProps): import("react/jsx-runtime").JSX.Element;
