import { FaPlus } from "react-icons/fa";
import commentService from "../../services/comments";

export default function AddComment({ open, setOpen, commentedRecipe }) {
  if (!open) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentText = event.target.comment.value;
    console.log(commentedRecipe);
    const commentDetails = {
      comment: commentText,
      RegisteredUser: commentedRecipe.RegisteredUser.id,
      Recipe: commentedRecipe.id,
      date: new Date(),
    };

    try {
      const addedComment = await commentService.addComment(commentDetails);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
    setOpen(false);
  };
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4"
      style={{ zIndex: 60 }}
    >
      <div className="flex justify-center items-center bg-center border border-white">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <form onSubmit={handleSubmit}>
            <h1 className=" flex text-3xl justify-center gap-2 text-center font-semibold text-white ">
              <FaPlus /> Add Comment
            </h1>
            <hr className="mt-3" />

            <div className="mt-3">
              <label
                htmlFor="recipe"
                className="text-white block text-base mb-2"
              >
                Comment
              </label>

              <input
                type="text"
                name="comment"
                id="comment"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 "
                placeholder="Enter comment..."
              />
            </div>

            <div className="mt-5 flex justify-evenly">
              <button
                onClick={(e) => {
                  setOpen(false);
                  e.stopPropagation();
                }}
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
