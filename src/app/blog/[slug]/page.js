"use client";
import { blogData } from "@/components/common/Helper";
import {
  CalenderIcon,
  FbIcon,
  InstaIcon,
  LinkedinIcon,
  UserIcon,
} from "@/components/common/Icons";
import InnerPagesHero from "@/components/common/InnerPagesHero";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  console.log(params, "params");
  return (
    <div>
      <InnerPagesHero title="Single Blog" />
      <section className="container" >
        <div className="flex  px-38 py-32 gap-6">
          <div className="leftContent shadow-[0_2px_40px_2px_rgba(0,0,0,0.05)] bg-white p-3 rounded-[20px]">
            <Image src={"/images/single-blog-1.png"} width={735} height={509} />
            <h1 className="font-archivo text-[24px] font-semibold leading-7 mt-4 mb-6">
              Why You Need Virtual Assistant for Your Company
            </h1>
            {blogData
              .filter((item) => item.slug === params.slug)
              .map((item, index) => (
                <div>
                  {blogData
                    .filter((item) => item.slug === params.slug)
                    .map((item, index) => (
                      <div>
                        <div className="flex gap-3 mb-4.5">
                          <p className="flex items-center gap-2">
                            <UserIcon /> By : {item.author}
                          </p>
                          <p className="flex items-center gap-2">
                            <CalenderIcon /> {item.publishDate}
                          </p>
                        </div>
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                      </div>
                    ))}
                 
                </div>
              ))}
          </div>
          <div className="rightFilters shadow-[0_2px_40px_2px_rgba(0,0,0,0.05)] bg-white p-3 rounded-[20px] w-[33.33%] min-w-[33.33%]"></div>
        </div>
      </section>
    </div>
  );
};

export default page;
