"use client";

import { useReadField } from "@/hooks/useReadField";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import Image from "next/image";

export default function Login() {
  const email = useReadField({ type: "text" });
  const password = useReadField({ type: "text" });

  const handleUserData = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signIn("credentials", {
        email: email.value,
        password: password.value,
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div className="w-full md:flex items-center justify-center gap-20 max-w-[1114px] m-auto mt-[90px md:p-0 p-8">
      {/* rigth side */}

      <div className="md:w-1/2 w-full">
        <div className="flex justify-center items-center">
          <Image src="/logotipo.png" alt="Logo" width={250} height={50} />
        </div>
        <div className="mb-[20px] mt-[20px]">
          <p className="font-sans text-xl font-normal text-center text-background">
            Ingresa tus credenciales
          </p>
        </div>
        {/* Form componente */}
        <form onSubmit={handleUserData}>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-background font-ligth">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email.value}
              onChange={email.onChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-background font-ligth">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password.value}
              onChange={password.onChange}
            />
            <a
              href="#"
              className="block text-right text-[14px] font-ligth text-blue-500 mt-2 hover:text-blue-200"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r hover:to-blue-300 from-blue-300 to-blue-500 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
          >
            login
          </button>
        </form>
        <p className="text-md text-blue-400 text-center mt-10 font-ligth">
          &copy; 2024 Ecomunidad | Ingenieria
        </p>
      </div>

      {/* left side */}
      <div className="md:w-1/2 rounded-[30px] md:block hidden">
        <Image
          src="/earth-3d-bg.png"
          alt="icon"
          className="w-[900px] h-auto object-cover cursor-pointer"
          id="banner-image"
          width={900}
          height={900}
          loading="lazy"
        />
      </div>
    </div>
  );
}
