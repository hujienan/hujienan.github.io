"use client";

import Image from "next/image";
import LocationIcon from "../components/LocationIcon";
import RoleAnimation from "../components/RoleAnimation";
import EmailSvg from "@/public/email.svg";
import GitHubSvg from "@/public/github.svg";
import LinkedInSvg from "@/public/linkedin.svg";

export default function Home() {
  return (
    <div>
      <div className="h-screen relative">
        <div className="h-full flex justify-center items-center">
          <div className="">
            <h1 className=" text-6xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-tr from-blue-500 via- to-sky-500 bg-clip-text text-transparent">
                Jet
              </span>
              <span className="bg-gradient-to-br from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                Hu
              </span>
            </h1>
            <RoleAnimation className=" text-purple-500 text-2xl lg:text-4xl " />
          </div>
        </div>
        <div className=" absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-500 animate-bounce  " // You can adjust the size using Tailwind CSS classes
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
      </div>

      <div className=" py-60 px-4">
        <div className=" max-w-2xl mx-auto">
          <h2 className=" uppercase font-bold text-blue-500 mb-10 text-xl">
            About me
          </h2>
          <div className="prose-lg">
            <p>
              Hi, I&apos;m Jet Hu, an enthusiastic lead full-stack developer
              with 9 years of commercial experience.
            </p>
            <p>
              My expertise spans a full stack environment, including JavaScript,
              PHP, and Python, among other technologies. I&apos;m highly
              passionate about modern technology and am constantly seeking
              opportunities for self-development.
            </p>
            <p>
              I take pride in my proven ability to reduce delivery deadlines by
              20%, showcasing my commitment to efficiency and excellence in
              every project I undertake.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-60 px-4">
        <div className=" max-w-2xl mx-auto">
          <h2 className=" uppercase font-bold text-blue-500 mb-10 text-xl">
            upupstudy
          </h2>
          <div className="prose-lg">
            <p>
              <a
                href="https://upupstudy.com.au"
                className=" text-blue-500 underline"
              >
                UpUpStudy.com.au
              </a>{" "}
              is a cutting-edge online education platform that I&apos;ve
              personally created. It&apos;s dedicated to connecting learners and
              tutors, offering a seamless digital space for education.
            </p>
            <p>
              At UpUpStudy, we believe in the transformative power of knowledge.
              We&apos;re here to connect learners and tutors, enabling a world
              of endless possibilities. Whether you&apos;re eager to explore new
              horizons or share your expertise, our platform is your gateway to
              success.
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="max-w-2xl mx-auto">
          <h2 className=" uppercase font-bold text-blue-500 mb-10 text-xl px-4">
            Work Experience
          </h2>
          <div className=" border-l-2 ml-4 p-4 flex gap-16 flex-col border-zinc-600">
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">October 2018 – Present</p>
              <p>SafeSoft Ltd</p>
              <p>Lead Full Stack Developer</p>
              <div className=" flex mb-2 ">
                <LocationIcon className=" w-6 h-6" />
                <span>Perth, Australia</span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Prototyped project from scratch, determined technology stack,
                  and built development lifecycle infrastructure. Led the
                  analysis of requirements and development of the entire system.
                </li>
                <li>
                  Implemented Banking API and ASIC API to build a
                  subscription-included payment system and enable the system
                  with share registry and share trading-related abilities.
                </li>
                <li>
                  Developed marketplace sub-system, increasing traffic by 200%
                  in 1 week through customized promotion content.
                </li>
                <li>
                  Successfully launched vcex.com.au 2 months ahead of the
                  deadline.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">
                August 2018 – August 2018
              </p>
              <p>Meercat Pty Ltd</p>
              <p>Frontend Developer</p>
              <div className=" flex mb-2">
                <LocationIcon className=" w-6 h-6" />
                <span>Perth, Australia</span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Quickly familiarized with project code and personnel,
                  efficiently resolved software issues, and completed project
                  release one week ahead of schedule.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">
                June 2018 – August 2018
              </p>
              <p>Colosoul Group Inc</p>
              <p>Web Developer (Volunteer)</p>
              <div className=" flex mb-2">
                <LocationIcon className=" w-6 h-6" />
                <span>Perth, Australia</span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Collaborated closely with the team leader to develop a
                  WordPress theme with a new design.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">
                May 2016 – October 2016
              </p>
              <p>Hithink Flush Information Network Co Ltd</p>
              <p>PHP Web Developer (Paid Internship)</p>
              <div className=" flex mb-2">
                <LocationIcon className=" w-6 h-6" />
                <span>Hangzhou, China</span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Monitored comments keywords web project, automatically
                  notifying related persons via email and SMS when keywords were
                  detected according to pre-set rules. Increased user
                  satisfaction by 15%.
                </li>
                <li>
                  Developed an advertisement configuration web project to
                  streamline the process for the advertising department,
                  resulting in a 35% time savings.
                </li>
                <li>
                  Led the stock&apos;s information dynamic analysis project,
                  providing better information services to special clients
                  through dynamic analysis of stocks.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">June 2015 – May 2016</p>
              <p>JR Tech Co</p>
              <p>Team Leader</p>
              <div className=" flex mb-2">
                <LocationIcon className=" w-6 h-6" />
                <span>Harbin, China</span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Led a team to engineer the construction management system,
                  utilizing excellent communication skills and task assignment
                  abilities to shorten development time by 20%. This resulted in
                  a 12% cost savings for clients using the system.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">March 2015 – June 2015</p>
              <p>JR Tech Co</p>
              <p>Frontend Developer</p>
              <div className=" flex mb-2">
                <LocationIcon className=" w-6 h-6" />
                <span>Harbin, China</span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Designed and coded a products presentation web project,
                  resulting in a 40% increase in products visibility.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-60 mb-20 px-4 max-w-2xl mx-auto">
        <h2 className=" uppercase font-bold text-blue-500 text-xl">Contact</h2>
        <div className=" flex justify-center items-center gap-4 mt-4">
          <a href="https://github.com/hujienan">
            <Image src={GitHubSvg} alt="email" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/hujienan/">
            <Image src={LinkedInSvg} alt="email" width={28} height={28} />
          </a>
          <a href="mailto:hujienanmoon@gmail.com">
            <Image src={EmailSvg} alt="email" width={24} height={24} />
          </a>
        </div>
      </div>
      <p className=" text-center my-10">
        Copyright © {new Date().getFullYear()} Jet Hu
      </p>
    </div>
  );
}
