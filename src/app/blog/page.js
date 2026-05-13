"use client";
import { blogData } from "@/components/common/Helper";
import InnerPagesHero from "@/components/common/InnerPagesHero";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const categories = [
    "All",
    ...new Set(blogData.map((item, index) => item.postCategory)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const filterBlog =
    activeCategory === "All"
      ? blogData
      : blogData.filter((item) => item.postCategory === activeCategory);
  return (
    <div>
      <InnerPagesHero title="Blog" />
      <div className="container">
        <div className="flex mt-25 mb-9 xl:px-32">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[20px] cursor-pointer leading-8 ${
                activeCategory === cat ? "bg-secondary text-white" : " "
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="mb-25 flex  flex-wrap gap-8 sm:flex-row    flex-col xl:px-32">
          {filterBlog.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-[20px]   sm:w-[calc(50%-2rem)] w-full"
            >
              <Image
                src={item.img}
                width={540}
                height={285}
                alt="Icecream"
                className="w-full h-auto rounded-tr-[20px] rounded-tl-[20px] "
              />
              <div className="p-8">
                <div className="flex justify-between">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={"/images/user.png"}
                      width={15}
                      height={15}
                      alt="user"
                    />{" "}
                    Posted by {item.postedBy}
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image
                      src={"/images/calender.png"}
                      width={15}
                      height={15}
                      alt="calender"
                    />
                    {item.postDate}
                  </div>
                </div>
                <p className="text-[20px] font-bold mb-3 mt-6">{item.title}</p>
                <p className="text-[16px] text-text-tertiary leading-6 mb-8">
                  {item.summary}
                </p>
                <div>
                  <Link
                    href={`/blog/${item.slug}/`}
                    className="text-[14px] font-bold leading-5 relative after:absolute after:content[' '] after:w-5 after:h-1 after:bg-black after:-bottom-3 after:left-0"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

<div class="abmContent">
  <p>
    You already use Ocrolus to streamline document review. Manual condition
    creation is the last manual step in your workflow.
  </p>
  <p>With automated conditions, your team can:</p>{" "}
  <ul class="dalac">
    <li>
      <p>
        Automatically generate selling-guide-aligned conditions using borrower
        asset, income and credit data alongside AUS findings
      </p>
    </li>
    <li>
      <p>
        Match borrower documents to the appropriate condition automatically as
        new documents arrive
      </p>
    </li>
    <li>
      <p>
        Manage the full condition lifecycle in one place, including Encompass
        sync and document placeholders
      </p>
    </li>
  </ul>{" "}
  <p class="gbbp">
    By centralizing condition oversight within Ocrolus, underwriting teams gain
    a more auditable and scalable process that helps accelerate time-to-close
    and deliver a smoother path to the closing table.
  </p>
</div>;
