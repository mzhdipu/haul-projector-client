import React from "react";
import useTitle from "../../Hooks/useTitle";

const About = () => {
  useTitle('About')
  return (
    <section class="py-10 sm:py-16 lg:py-24 section-container">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div class="">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-left">
              About us
            </h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600 text-left">
              Halu Projector is a Projector hardware, software & service
              supplier company established in August, 2016. We have grown
              consistently since inception and today we offer a wide range of
              computing services, products and Solutions. We trade as “Halu
              Project” under License Number: HALU/DSSW/59683265. BIN Number:
              059456458-0201. TIN Number: 225583691. We understand the role
              computers play today. Computer systems are vital for both business
              and personal needs. We are specialists in providing the most
              advanced and reliable computer systems, in installing effective
              software, and in providing ongoing, top-notch service. Our
              systems, service, and consulting capabilities are key to providing
              high performance and reliability; thus insuring maximum
              productivity, profitability, and peace of mind.
            </p>
          </div>

          <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
            <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
              <img
                class="ml-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                alt=""
              />

              <img
                class="absolute -top-4 -left-12"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                alt=""
              />

              <div class="absolute -bottom-10 -left-16">
                <div class="bg-yellow-300">
                  <div class="px-8 py-10">
                    <span class="block text-4xl font-bold text-black lg:text-5xl">
                      {" "}
                      53%{" "}
                    </span>
                    <span class="block mt-2 text-base leading-tight text-black">
                      {" "}
                      Black Friday
                      <br />
                      Everything{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
