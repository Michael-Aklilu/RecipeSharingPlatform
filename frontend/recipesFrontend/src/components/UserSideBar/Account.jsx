import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default function Account({ user }) {
  return (
    <div>
      <div className="border-b mb-4 mt-2 pb-4 border-stone-300 ">
        <div className="flex p-0.5 rounded-md relative gap-2 w-full items-center  ">
          <img
            src="https://api.dicebear.com/9.x/notionists/svg? "
            alt="avatar"
            className="size-8 rounded shrink-0 bg-slate-100 shadow"
          />
          <div className="text-start">
            <span className="text-lg font-bold block text-white">
              {user !== null ? user.name : null}
            </span>

            <span className="text-sm block text-white">User</span>
          </div>
        
        </div>
      </div>
    </div>
  );
}
