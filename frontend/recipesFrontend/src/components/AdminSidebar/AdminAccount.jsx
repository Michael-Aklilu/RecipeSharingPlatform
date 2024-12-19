
const AdminAccount = () => {
    return (
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
          <button className="flex p-0.5 rounded-md relative gap-2 w-full items-center">
            <img src="https://api.dicebear.com/9.x/notionists/svg? "alt="avatar" className="size-8 rounded shrink-0 bg-slate-100 shadow"/>
            <div className="text-start">
              <span className="text-sm font-bold block text-white"> Michael Aklilu</span>
              <span className="text-xs block text-white">Administrator</span>
            </div>
           
          </button>
       
        </div>
    )
}

export default AdminAccount