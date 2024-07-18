import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Avatar from "./Avatar";
import { HiChevronDown } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type TopBarProps = {
  size?: "md" | "lg" | "full";
  onLogout?: () => void;
  user?: any;
  hamburgerEvent?: () => void;
  hidden?: boolean;
};

/* eslint-disable no-unused-vars*/
enum TopBarSize {
  md = "w-[934px]",
  lg = "w-[1173px]",
  full = "w-full",
}

const TopBar: FC<TopBarProps> = ({
  size = "full",
  user,
  onLogout = () => {},
  hamburgerEvent = () => {},
  hidden,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line no-undef

  return (
    <div
      className={`${
        TopBarSize[size]
      } flex justify-between p-8 border-b border-mediumGray ${
        hidden && "hidden"
      }`}
    >
      <div className="flex items-center justify-center sm:block">
        <div className="sm:flex justify-center items-center hidden">
          <Link href="/">
            <Image
              src="/logo-eco-2.png"
              alt="Icon-ecomunidad"
              width={80}
              height={80}
            />
          </Link>
        </div>

        <button className="sm:hidden block" onClick={hamburgerEvent}>
          <GiHamburgerMenu size={25} />
        </button>
      </div>
      <div className="flex items-center gap-8">
        <div className="relative flex items-center gap-10">
          <ul className="md:flex items-center justify-center gap-4 hidden">
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/aboutus"}>Nosotros</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contacto</Link>
            </li>
          </ul>

          {user ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              onBlur={() => setIsOpen(false)}
              className="flex items-center gap-2"
            >
              <Avatar type="text" name={user.nombre} size="md" />

              <HiChevronDown
                size={20}
                className={`transition duration-300 ${
                  isOpen ? "-rotate-180" : ""
                } `}
              />
            </button>
          ) : (
            <Button
              id="Sesion"
              type="secondary"
              color="blue"
              onClick={() => router.push("/auth")}
            >
              Iniciar sesión
            </Button>
          )}

          {isOpen ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 14px",
                width: "auto",
                alignItems: "center",
              }}
              className={`z-10 text-xs absolute top-10 right-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
            >
              <div
                className="py-1 flex flex-col"
                style={{ alignItems: "center" }}
              >
                <span className="py-1 font-medium">
                  {user.nombre} {user.apellido}
                </span>
                <span className="py-1">{user.email}</span>
              </div>

              <div className="py-1">
                <button
                  className="px-[10px] py-[8px] font-medium transition duration-300 rounded-[15px] focus-visible:outline-nonebg-white hover:bg-red-50 text-error border-error border hover:border-red-700 active:text-red-700 active:bg-white"
                  id="logout-btn"
                  onMouseDown={(e) => e.preventDefault()}
                  color="gray"
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
