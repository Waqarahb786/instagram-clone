import useGetUserProfile from "@/hooks/useGetUserProfile";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";

const Profile = () => {
  const params = useParams();
  const userId = params.id;
  useGetUserProfile(userId);
  const { userProfile } = useSelector((store) => store.auth);

  const isLoggedInUserProfile = true
  
  return (
    <div className="flex max-w-5xl justify-center mx-auto pl-10">
      <div className="flex flex-col gap-20 p-8">
        <div className="grid grid-cols-2">
          <section className="flex items-center justify-center">
            <Avatar className="h-32 w-32">
              <AvatarImage
                src={userProfile?.profilePicture}
                alt="profilePhoto"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>
          <section>
            <div className="flex flex-col gap-5">
              <div className=" flex items-center gap-2">
                <span>{userProfile?.username}</span>
                {
                  isLoggedInUserProfile ? (
                    <div className="flex gap-2">
                  <Button variant="secondary" className="hover:bg-gray-200 h-8">
                    Edit profile
                  </Button>
                  <Button variant="secondary" className="hover:bg-gray-200 h-8">
                    View archive
                  </Button>
                  <Button variant="secondary" className="hover:bg-gray-200 h-8">
                    Ad tools
                  </Button>
                </div>
                  ):(
                    <Button>Follow</Button>
                  )
                }
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
