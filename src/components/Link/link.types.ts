export interface ILink {
    children: string;
    linkRef: string;
    openOnNewWindow?: boolean | undefined,
    handleClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)  => void;
}