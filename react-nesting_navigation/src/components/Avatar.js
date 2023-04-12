import { Image } from "./Image"
import avatar from "../img/avatar.jpg";

export const Avatar = () => {
    return (
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image className="round-image" src={avatar} alt="avatar" />
        </button>
    )
}