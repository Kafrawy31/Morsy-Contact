"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  IconPhone,
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandFacebook,
  IconBrandX,
  IconWorld,
  IconDeviceLandlinePhone
} from "@tabler/icons-react";
import Image from "next/image";
import LoadingPage from "../components/LoadingPage";

const FloatingDockDemo = () => {
  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(message);
    });
  };

const links = [
  {
    title: "Phone",
    icon: <IconPhone className="h-full w-full" />,
    onClick: () => {
      copyToClipboard("+201288887378", "Phone copied");
      window.location.href = "tel:+201288887378";
    },
  },
  {
    title: "Landline",
    icon: <IconDeviceLandlinePhone className="h-full w-full" />,
    onClick: () => {
      copyToClipboard("+20235362925", "Landline copied");
      window.location.href = "tel:+20235362925";
    },
  },
  {
    title: "Email",
    icon: <IconMail className="h-full w-full" />,
    onClick: () => {
      copyToClipboard("mmorsy@encorp.com.eg", "Email copied");
      window.location.href = "mailto:mmorsy@encorp.com.eg";
    },
  },
  {
    title: "Whatsapp",
    icon: <IconBrandWhatsapp className="h-full w-full" />,
    onClick: () =>
      window.open("https://wa.me/201288887378?text=Hello", "_blank"),
  },
  {
    title: "Location",
    icon: <IconMapPin className="h-full w-full" />,
    onClick: () =>
      window.open(
        "https://www.google.com/maps/dir//Encorp+International+E%26C,+Al+Prince,+Kafr+Nassar,+Al+Haram,+Giza+Governorate+3550601/@29.9761664,31.0214656,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x145845477e4f766d:0xed6c58d384272f34!2m2!1d31.1280348!2d29.9949164?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",
        "_blank"
      ),
  },
];
    const companyLinks = [
  {
    title: "Website",
    icon: <IconWorld className="h-full w-full" />,
    onClick: () => window.open("https://encorp.com.eg", "_blank"),
  },
  {
    title: "Email",
    icon: <IconMail className="h-full w-full" />,
    onClick: () => {
      copyToClipboard("info@encorp.com.eg", "Company email copied");
      window.location.href = "mailto:info@encorp.com.eg";
    },
  },
  {
    title: "Phone",
    icon: <IconPhone className="h-full w-full" />,
    onClick: () => {
      copyToClipboard("+20236054213", "Company phone copied");
      window.location.href = "tel:+20236054213";
    },
  },
];

  return (
    <>
      <LoadingPage />

      <div className="relative flex h-screen flex-col">
        {/* Top section */}
        <div className="flex-[6] bg-[#4DBAA9] flex flex-col items-center justify-center px-6 pb-12 text-center">

  {/* Company Logo (back on top) */}
  <Image
    src="/encorp-logo.png"
    alt="Encorp Logo"
    width={180}
    height={100}
    className="mb-6 mt-6 object-contain"
  />

  {/* Smaller Profile Image */}
  <Image
    src="/morsy-profile-picture.jpeg"
    alt="Mohammed Morsy"
    width={130}
    height={130}
    className="mb-4 h-30 w-30 rounded-full object-cover object-[center_18%] shadow-lg"
  />

  {/* Info */}
  <div className="text-white">
    <h1 className="text-3xl font-medium tracking-[0.05em]">
      Mohammed Morsy
    </h1>

    <p className="mt-2 text-base font-normal tracking-[0.05em] opacity-90">
      MEP Projects Director
    </p>

    <p className="mt-3 max-w-xs text-sm font-light tracking-[0.05em] opacity-80">
      8 Mansouria Road, Floor 3, Giza, Egypt
    </p>
  </div>
</div>
        {/* Bottom section */}
        <div className="flex-[4] bg-white flex flex-col items-center justify-center px-6 pt-12 text-center">

  {/* Label */}
  <p className="mb-3 text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
    Company Links
  </p>

  {/* Description */}
  <p className="max-w-xs text-sm font-light tracking-[0.05em] text-neutral-600">
    Engineering & construction services
  </p>

  {/* Icons */}
  <div className="mt-5 flex gap-5">
    {companyLinks.map((item) => (
      <button
        key={item.title}
        onClick={item.onClick}
        aria-label={item.title}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4DBAA9]/10 transition active:scale-90"
      >
        <div className="h-5 w-5 text-[#4DBAA9]">
          {item.icon}
        </div>
      </button>
    ))}
  </div>
</div>
        {/* Icon buttons — PERFECTLY centered */}
        <div className="absolute left-1/2 top-[59vh] flex -translate-x-1/2 -translate-y-1/2 gap-5 px-6">
          {links.map((item) => (
            <button
              key={item.title}
              onClick={item.onClick}
              aria-label={item.title}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 active:scale-90 active:shadow-sm"
            >
              <div className="h-6 w-6 text-[#4DBAA9]">
                {item.icon}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Toast */}
      <ToastContainer
        position="bottom-center"
        autoClose={1200}
        hideProgressBar
        closeButton={false}
        pauseOnHover={false}
        theme="light"
        toastClassName="rounded-full text-sm shadow-md"
      />
    </>
  );
};

export default FloatingDockDemo;