import React from "react";
import { FooterSection } from "@/components/custom/footer-section";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { footerLinks } from "@/data/footerLinks";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="grid lg:grid-cols-3 bg-secondary pt-4">
        <section>
          <FooterSection title="EXPLORE" links={footerLinks.explore} />
        </section>

        <section className="flex flex-col justify-center items-center">
          <div className="py-5">
            <Image width={100} height={100} className="h-[100px]" src="/" alt="logo" />
          </div>
          <SocialMediaLinks />
        </section>

        <section>
          <FooterSection title="INFORMACION" links={footerLinks.information} />
        </section>
      </div>
      <div className="flex justify-center bg-secondary text-slate-700 py-5 font-poppinsRegular">
        Copyright © 2023 &quot;El Método&quot; Adulma.
      </div>
    </>
  );
}
