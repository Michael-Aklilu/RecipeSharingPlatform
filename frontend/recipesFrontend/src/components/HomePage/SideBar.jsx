import { Home } from "lucide-react";

export default function SideBar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto pb-4 flex flex-col ml-1 lg:hidden text-white">
        <SmallSideBarItem Icon={Home} url="/" title="Home" />
        <SmallSideBarItem Icon={Home} url="/" title="Home" />
        <SmallSideBarItem Icon={Home} url="/" title="Home" />
        <SmallSideBarItem Icon={Home} url="/" title="Home" />
        <SmallSideBarItem Icon={Home} url="/" title="Home" />
      </aside>

      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2" flex>

      </aside>
    </>
  );
}

const SmallSideBarItem = ({ url, Icon, title }) => {
  return (
    <div>
      <a
        href={url}
        className="py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      >
        <Icon className="w-6 h-6 mr-2" />
        <div className="text-sm mr-2">{title}</div>
      </a>
    </div>
  );
};
