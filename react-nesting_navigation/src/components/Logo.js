import logo from "../img/logo.jpg";
import { Image } from "./Image";

export const Logo = () => {
    return (
        <a href="#">
          <Image className="round-image" src={logo} alt="logo" />
        </a>
    )
}