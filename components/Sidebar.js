import Image from "next/image";
import SidebarLinks from "../components/SidebarLinks";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import avatar from "/public/assets/man.png";

const Sidebar = () => {
  return (
    <div
      className="hidden sm:flex flex-col items-center xl:items-start
    xl:w-[340px] p-1 fixed h-full"
    >
      <div
        className="flex items-center justify-center w-14 h-14 p-0 
      hoverAnimation xl:ml-10 "
      >
        <Image
          src="https://rb.gy/ogau5a"
          width={30}
          height={30}
          objectFit="contain"
        />
      </div>
      <div className="space-y-0 mt-4 mb-2.5 xl:ml-10">
        <SidebarLinks text="Home" Icon={HomeIcon} active />
        <SidebarLinks text="Explore" Icon={HashtagIcon} />
        <SidebarLinks text="Notifications" Icon={BellIcon} />
        <SidebarLinks text="Messages" Icon={InboxIcon} />
        <SidebarLinks text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLinks text="Lists" Icon={ClipboardListIcon} />
        <SidebarLinks text="Profile" Icon={UserIcon} />
        <SidebarLinks text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      <button
        className="hidden xl:inline ml-16 bg-[#1d9bf0] text-white rounded-full
      w-48 h-[48px] text-xl hover:bg-[#1a8cd8]"
      >
        Tweet
      </button>

      <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation">
        <Image src={avatar} width={40} height={40} objectFit="contain" />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold text-sm">Nabin Dhami</h4>
          <p className="text-[#6e767d] text-sm">NabinDhami14</p>
        </div>
        <DotsHorizontalIcon className="hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
