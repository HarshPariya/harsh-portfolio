import NextLink, { LinkProps as NextLinkProps } from "next/link"

export const Link: React.FC<NextLinkProps & { children: React.ReactNode; className?: string; target?: string; download?: boolean | string; rel?: string }> = ({
  children,
  className,
  target,
  download,
  rel,
  ...props
}) => {
  return (
    <NextLink {...props} data-vt className={className} target={target ?? undefined} download={download as any} rel={rel}>
      {children}
    </NextLink>
  )
}
