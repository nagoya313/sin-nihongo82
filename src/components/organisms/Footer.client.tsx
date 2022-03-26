import GithubIcon from '../icons/GithubIcon.client';

const Footer = () => (
  <footer className="footer flex items-center text-base-content justify-end p-4 border-t">
    <a
      href="https://github.com/nagoya313/sin-nihongo82"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-ghost btn-xs text-gray-400 items-center"
      color="gray.400"
    >
      <GithubIcon />
    </a>
    <p className="font-xs">2682 新日本語漢字形制定委員会</p>
  </footer>
);

export default Footer;
