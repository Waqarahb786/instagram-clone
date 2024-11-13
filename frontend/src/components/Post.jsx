import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar, AvatarFallback } from "./ui/avatar"


const Post = () => {
  return (
    <div className="my-8 w-full max-w-sm mx-auto">
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
        <Avatar>
            <AvatarImage src="" alt="post_image"/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>username</h1>
        </div>
        </div>
        
        
    </div>
  )
}

export default Post