import { Fragment, useState } from "react";
import { VideoCameraIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

import DisplayImage from "./DisplayImage";
import ThemeToggler from "../../utils/ThemeToggler";
import MobileNavbarChat from "./MobileNavbarChat";
import { useQuery } from "react-query";
import { fetchUser } from "../../services/users-api";
import { User } from "../../utils/types";

const ShowContacts = () => {
  const [users, setUsers] = useState([]);

  const { isLoading, isFetching, data, isError, error } = useQuery("users-fetch", fetchUser, {
    cacheTime: 9000,
    staleTime: 9000,
    refetchOnWindowFocus: false,
  });

  const fetchAvailableContacts = () => {};

  console.log(data?.data);

  return (
    <Fragment>
      <MobileNavbarChat />

      {/* SideBar */}
      <div className="bg-slate-300 text-slate-900 dark:bg-slate-800 dark:text-blue-100  w-64 space-y-4 py-2 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <DisplayImage />
          <div className="flex flex-row gap-4 px-8">
            <VideoCameraIcon className="Top-Icon w-5 h-5" />
            <ChatBubbleLeftRightIcon className="Top-Icon w-5 h-5" />
            <ThemeToggler />
          </div>
        </div>

        {/* Nav */}
        <nav>
          {isLoading || isFetching ? (
            <a href="#" className="block py-2.5 px-4 rounded hoverEffect">
              Loading.....
            </a>
          ) : (
            <Fragment>
              {data?.data.result.map((user: User) => (
                <a href="#" className="block py-2.5 px-4 rounded hoverEffect">
                  {user.username}
                </a>
              ))}
            </Fragment>
          )}
        </nav>
      </div>
    </Fragment>
  );
};

export default ShowContacts;
