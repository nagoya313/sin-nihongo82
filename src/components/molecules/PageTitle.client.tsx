type PageTitleProps = {
  avatar: React.ReactNode;
  title: string;
};

const PageTitle = ({ avatar, title }: PageTitleProps) => {
  console.log(avatar);

  return (
    <div className="flex flex-row items-center">
      <div className="avatar placeholder">
        <div className="rounded-full w-12 h-12 text-white bg-accent">{avatar}</div>
      </div>
      <h1 className="ml-4 mb-0">{title}</h1>
    </div>
  );
};

export default PageTitle;
