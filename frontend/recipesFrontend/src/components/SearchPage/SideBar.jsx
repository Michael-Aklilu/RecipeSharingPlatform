import { Home,LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { useSideBarContext } from "../../context/SideBar";

export default function SideBar() {
  const { isLargeOpen, isSmallOpen } = useSideBarContext();
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 text-white ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSideBarItem Icon={Home} url="/" title="Home" />
        <SmallSideBarItem Icon={LogIn} url="/Login" title="Login" />
        <SmallSideBarItem Icon={UserPlus} url="/Register" title="SignUp" />
        
      </aside>

      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2  hidden ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : ""}`}
      >
        <LargeSideBarSection>
          <LargeSideBarItem Icon={Home} title="Home" url="/LandingPage" />
        </LargeSideBarSection>
        <LargeSideBarSection>
          <LargeSideBarItem Icon={LogIn} title="Login" url="/Login" />
        </LargeSideBarSection>
        <LargeSideBarSection>
          <LargeSideBarItem Icon={UserPlus} title="Register" url="/SignUp" />
        </LargeSideBarSection>
       
      </aside>
    </>
  );
}

const LargeSideBarSection = ({ children }) => {
  return children;
};

const LargeSideBarItem = ({ url, Icon, title }) => {
  return (
    <a
      href={url}
      className="w-full flex items-center  rounded-lg gap-4 p-4 mt-5 text-lg text-white hover:bg-stone-200 hover:text-black"
    >
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
};

const SmallSideBarItem = ({ url, Icon, title }) => {
  return (
    <a
      href={url}
      className="py-4 px-1 flex flex-col items-center rounded-lg gap-1 hover:bg-stone-200 hover:text-black "
    >
      <Icon className="w-6 h-6 mr-2" />
      <div className="text-sm mr-2">{title}</div>
    </a>
  );
};
