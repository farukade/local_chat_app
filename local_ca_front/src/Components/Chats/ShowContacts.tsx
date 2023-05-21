import { Fragment, useState } from "react";

import MobileNavbarChat from "./MobileNavbarChat";
import { useQuery } from "react-query";
import { fetchUser } from "../../services/users-api";
import { User } from "../../utils/types";
import FullscreenNavbar from "./FullscreenNavbar";

const ShowContacts = () => {
  const [users, setUsers] = useState([]);
  const [isLoad, _set] = useState(true);

  const { isLoading, isFetching, data, isError } = useQuery("users-fetch", fetchUser, {
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
        {/* FullScreen Nav */}
        <FullscreenNavbar />

        {/* Shows Users to Chat with. */}
        <nav>
          {isLoading ? (
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2 bg-gray-200 block py-2.5 px-4 rounded dark:bg-gray-700 max-w-[360px] mb-4" />
              <div className="h-2 bg-gray-200 block py-2.5 px-4 rounded dark:bg-gray-700 max-w-[360px] mb-4" />
              <div className="h-2 bg-gray-200 block py-2.5 px-4 rounded dark:bg-gray-700 max-w-[360px] mb-4" />
              <div className="h-2 bg-gray-200 block py-2.5 px-4 rounded dark:bg-gray-700 max-w-[360px] mb-4" />
              <div className="h-2 bg-gray-200 block py-2.5 px-4 rounded dark:bg-gray-700 max-w-[360px] mb-4" />
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <Fragment>
              {data?.data.result.map((user: User) => (
                <a key={user.id} href="#" className="block py-2.5 px-4 rounded hoverEffect">
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
