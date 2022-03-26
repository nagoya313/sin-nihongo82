type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link link-primary link-hover mx-1">
    {children}
  </a>
);
