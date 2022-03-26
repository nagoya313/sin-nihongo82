import NextLink from 'next/link';
import { useRouter } from 'next/router';

type SideBarLinkProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const SideBarLink = ({ href, title, icon }: SideBarLinkProps) => {
  const { pathname } = useRouter();
  const selected = pathname === href;

  return (
    <li>
      <NextLink href={href}>
        <a href={href} className={`${selected ? 'active' : ''}`}>
          {icon}
          {title}
        </a>
      </NextLink>
    </li>
  );
};

export default SideBarLink;
