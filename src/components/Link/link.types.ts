export interface ILink {
    children: React.ReactNode;
    linkRef: string | undefined;
    openOnNewWindow?: boolean | undefined,
    handleClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)  => void;
}