import { NewspaperIcon } from "@heroicons/react/24/solid";

const SidebarChats = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-white">
      <NewspaperIcon className="sidebar-icon w-10 h-10" />
      <hr />
      <NewspaperIcon className="sidebar-icon w-10 h-10" />
      <NewspaperIcon className="sidebar-icon w-10 h-10" />
      <NewspaperIcon className="sidebar-icon w-10 h-10" />
      <NewspaperIcon className="sidebar-icon w-10 h-10" />
      <NewspaperIcon className="sidebar-icon w-10 h-10" />
    </div>
  );
};

export default SidebarChats;
