import moment from "moment";

const date = moment();
const formattedDate = date.format("dddd, MMMM D, YYYY");

export default function TopBar({ user }) {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-300">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-lg font-bold block">{`Hello, ${
            user !== null ? user.username : null
          }`}</span>
          <span className="text-md block text-stone-500">{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
