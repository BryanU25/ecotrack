import Textarea from "@/components/Textarea";
import React from "react";

export default function page() {
  return (
    <main className="flex min-h-screen max-w-[1114px] m-auto flex-col items-center gap-5 md:p-24 p-8">
      <h1 className="font-semibold text-2xl">Ponte en contacto</h1>

      <form
        className="md:w-[500px] w-full flex flex-col gap-5"
        action="https://formsubmit.co/brayaneillo2.7182@gmail.com"
        method="POST"
      >
        <div className="w-full">
          <label className="block w-full font-semibold text-md">Email</label>
          <input
            className="px-4 py-2 border rounded-md w-full"
            placeholder="ecomunidad@gmail.com"
          />
        </div>
        <div>
          <label className="block w-full font-semibold text-md">Nombre</label>
          <input
            className="px-4 py-2 border rounded-md w-full"
            placeholder="Ecomunidad SAS"
          />
        </div>

        <div>
          <label className="block w-full font-semibold text-md">Mensaje</label>
          <Textarea
            id="text-area-contact"
            placeholder="Escribenos tu Mensaje"
          />
        </div>
      </form>
    </main>
  );
}
