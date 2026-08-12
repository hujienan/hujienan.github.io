"use client";

import LocationIcon from "../components/LocationIcon";
import RoleAnimation from "../components/RoleAnimation";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Home() {
  return (
    <div>
      <div className=" fixed right-0 top-0 z-10 ">
        <ThemeSwitch />
      </div>
      <div className="h-screen relative">
        <div className="h-full flex justify-center items-center">
          <div className="">
            <h1 className=" text-7xl lg:text-9xl font-bold">
              <span className="bg-linear-to-tr from-blue-500 to-sky-500 bg-clip-text text-transparent">
                Jet
              </span>{" "}
              <span className="bg-linear-to-br from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
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
              Hi, I&apos;m Jet Hu, a senior full-stack engineer with more than
              10 years of commercial experience designing and building
              production software.
            </p>
            <p>
              I enjoy taking complex product and engineering problems from idea
              through architecture, user experience, implementation, and into
              production.
            </p>
            <p>
              My recent work focuses on TypeScript, React, Next.js, Node.js,
              PostgreSQL, and cloud platforms. Over the years, I’ve also built
              production systems using PHP and Python, with experience spanning
              SaaS, payments, integrations, and event-driven systems.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-60 px-4">
        <div className=" max-w-2xl mx-auto">
          <h2 className=" uppercase font-bold text-blue-500 mb-10 text-xl">
            Tickeasy
          </h2>
          <div className="prose-lg">
            <p>
              I&apos;m the founder and engineer behind{" "}
              <a
                href="https://tickeasy.com.au"
                className=" text-blue-500 underline"
              >
                Tickeasy
              </a>
              , an Australian event ticketing and operations platform built to
              empower event organisers with greater control, clarity, and
              confidence throughout the entire event lifecycle.
            </p>

            <p>
              From event creation and ticketing to payments, check-in, audience
              management, and reserved seating, I&apos;ve designed and built the
              platform end-to-end with a focus on creating a modern, intuitive
              experience for both organisers and attendees.
            </p>

            <p>
              Building Tickeasy has brought together product thinking, user
              experience, software architecture, frontend and backend
              engineering, cloud infrastructure, and direct feedback from real
              organisers into a product that continues to evolve.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-60 px-4">
        <div className=" max-w-2xl mx-auto">
          <h2 className=" uppercase font-bold text-blue-500 mb-10 text-xl">
            Previous project
          </h2>
          <div className="prose-lg">
            <p>
              <a
                href="https://upupstudy.com.au"
                className=" text-blue-500 underline"
              >
                UpUpStudy
              </a>{" "}
              is an online education platform I designed and built to connect
              learners with tutors. The project gave me hands-on experience
              building a marketplace-style product from concept through
              frontend, backend, and deployment.
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

              <p className=" text-blue-500 font-bold">January 2026 – Present</p>

              <p>Tickeasy Pty Ltd</p>

              <p>Founder & Full-Stack Engineer</p>

              <div className=" flex mb-2 ">
                <LocationIcon className=" w-6 h-6" />
                <span>Perth, Australia</span>
              </div>

              <p>
                Founder and full-stack engineer building and operating an event
                ticketing and operations platform supporting organiser
                workflows, ticket sales, attendee management, and event
                operations.
              </p>

              <ul className="list-disc pl-5 mt-2">
                <li>
                  Built the production platform end-to-end, covering event
                  management, ticketing, payments, check-in, and reserved
                  seating.
                </li>
                <li>
                  Designed payment, inventory, and concurrency workflows
                  supporting real-world ticket sales and organiser operations.
                </li>
                <li>
                  Operate the platform across product development,
                  infrastructure, deployments, and ongoing reliability.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">
                October 2018 – January 2026
              </p>

              <p>SafeSoft Ltd</p>
              <p>Lead Full Stack Engineer</p>

              <div className=" flex mb-2 ">
                <LocationIcon className=" w-6 h-6" />
                <span>Perth, Australia</span>
              </div>

              <p>
                Technical lead and system architect for VCEX, a fintech platform
                supporting share registry management, capital raising, and share
                trading workflows for unlisted companies.
              </p>

              <ul className="list-disc pl-5 mt-2">
                <li>
                  Led the platform from greenfield architecture through
                  production, defining core backend systems, database design,
                  and API standards.
                </li>
                <li>
                  Built banking and ASIC integrations supporting compliant
                  financial and share registry workflows.
                </li>
                <li>
                  Led and mentored a small engineering team while maintaining
                  delivery quality and engineering standards.
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
                  Contributed to a React Native mobile application and helped
                  resolve production issues ahead of release.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">
                June 2018 – August 2018
              </p>
              <p>Colosoul Group Inc</p>
              <p>Web Developer</p>
              <div className=" flex mb-2">
                <LocationIcon className=" w-6 h-6" />
                <span>Perth, Australia</span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Developed a custom WordPress theme and responsive frontend
                  components based on new design requirements.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>
              <p className=" text-blue-500 font-bold">
                May 2016 – October 2016
              </p>
              <p>Hithink Flush Information Network Co Ltd</p>
              <p>PHP Web Developer</p>
              <div className=" flex mb-2">
                <LocationIcon className=" w-6 h-6" />
                <span>Hangzhou, China</span>
              </div>
              <ul className="list-disc pl-5">
                <li>
                  Built backend services and workflow systems for financial
                  information platforms, including monitoring, notifications,
                  and multi-client operations.
                </li>
              </ul>
            </div>
            <div className="relative ">
              <span className=" absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-0"></span>

              <p className=" text-blue-500 font-bold">March 2015 – May 2016</p>

              <p>JR Tech Co</p>

              <p>Frontend Developer → Team Leader</p>

              <div className=" flex mb-2">
                <LocationIcon className=" w-6 h-6" />
                <span>Harbin, China</span>
              </div>

              <ul className="list-disc pl-5">
                <li>
                  Progressed from frontend development into a technical
                  leadership role while contributing to enterprise web
                  applications.
                </li>
                <li>
                  Led development of a construction management system for
                  enterprise clients.
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
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/hujienan/">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
            </svg>{" "}
          </a>
          <a href="mailto:hujienanmoon@gmail.com">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
            </svg>
          </a>
        </div>
      </div>
      <p className=" text-center py-10">
        Copyright © {new Date().getFullYear()} Jet Hu
      </p>
    </div>
  );
}
