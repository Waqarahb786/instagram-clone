import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const CommentDialog = ({ open, setOpen }) => {
    const [text,setText] = useState("")
    const changeEventHandler=(e)=>{
        const inputText=e.target.value
        if(inputText.trim()){
            setText(inputText)
        }else{
            setText("")
        }
    }

    const sendMessageHandler=async()=>{
        alert(text)
    }
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="max-w-5xl p-0 flex flex-col"
      >
        <div className="flex flex-1">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
              alt="image"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex items-center justify-between p-4">
              <div className="flex gap-3 items-center">
                <Link>
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <Link className="font-semibold text-xs">username</Link>
                  {/* <span className="text-gray-600 text-sm">Bio here...</span> */}
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <MoreHorizontal className="cursor-pointer"/>
                </DialogTrigger>
                <DialogContent className="flex flex-col items-center text-sm text-center">
                    <div className="cursor-pointer w-full text-[#ED4956] font-bold">
                        Unfollow
                    </div>
                    <div className="cursor-pointer w-full ">
                        Add To favorites
                    </div>
                </DialogContent>
              </Dialog>
            </div>
            <hr/>
            <div className="flex-1 overflow-y-auto max-h-96 p-4">
                all comments
            </div>
            <div className="flex items-center gap-2 m-2">
                <input value={text} onChange={changeEventHandler} type="text" placeholder="Add a comment..." className="w-full outline-none border border-gray-300 p-2  rounded" />
                <Button disabled={!text.trim()} onClick={sendMessageHandler} variant="outline">Send</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDialog;
