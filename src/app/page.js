import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { MoveUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <div className='flex flex-col lg:flex-row items-center justify-center h-screen p-6 lg:p-80 '>
        <div className='flex-1 lg:pl-[85px] pt-10 text-left flex flex-col justify-center lg:justify-start'>
          
          {/* <div class="Welcome-box w-box py-[8px] lg:ml-0 px-[7px] border border-indigo-600 opacity-[0.9] m-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="text-indigo-600 mr-[10px] h-5 w-5"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd"></path></svg><h1 class="Welcome-text text-indigo-400 text-[13px]"><a href="/search">Introducing New Sage</a></h1></div> */}
          <h2 className="zero-text pb-0 lg:pb-0 font-semibold lg:text-6xl text-5xl text-white mb-6">
            Introducing
          </h2>
          <h2 className="zero-text pb-0 lg:pb-0 font-semibold	text-5xl lg:text-6xl text-white mb-6">
            Sage
          </h2>
          
          <span className="mb-2">
            Sage is a powerful AI developed by
            <a href="https://xanmoy.me" className='text-white underline'> Xanmoy</a>
            
            .
          
         
            Get answers to your questions, help with programming, and much more.
          
          </span>
          <div className='flex flex-row justify-start lg:justify-start p-6 pl-0 mt-3 lg:mt-0'>
            <Link href="/chat" className='btn try-ai-btn bg-white text-black font-bold text-xl  py-3 px-6 lg:py-4 lg:px-8 hover:bg-zinc-300'>
              Try Sage ↗
            </Link>
          </div>

        </div>



        <div className='flex-1 flex justify-center'>
          <Image
            src={'/sage-cover.jpeg'}
            alt="hero"
            width={400}
            height={400}
            className="object-cover img-br"
          />
        </div>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600 title-font mb-4">
                Supercharge your creativity and productivity
              </h1>
              <p className="text-base text-gray-400 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Boost your creativity and productivity with Sage. Your ultimate ally for inspired ideas and efficient workflows
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-monitor-up"><path d="m9 10 3-3 3 3" /><path d="M12 13V7" /><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M12 17v4" /><path d="M8 21h8" /></svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-lg title-font font-medium mb-3">Interactive Demo</h2>
                  <p className="leading-relaxed text-gray-500 text-base"> Offer visitors an interactive demo where they can directly engage with Sage to experience its capabilities firsthand. This could include a simulated conversation where Sage showcases its ability to understand and respond to various queries or tasks.</p>
                  
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-projector"><path d="M5 7 3 5" /><path d="M9 6V3" /><path d="m13 7 2-2" /><circle cx="9" cy="13" r="3" /><path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" /><path d="M16 16h2" /></svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-lg title-font font-medium mb-3">Feature Highlights</h2>
                  <p className="leading-relaxed text-gray-500 text-base">Provide a concise overview of Sages key features and functionalities. Highlight the aspects that make Sage stand out, such as natural language understanding, personalized recommendations, multi-platform compatibility, or integration with other services.</p>
                  
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open-check"><path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" /><path d="m16 12 2 2 4-4" /><path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" /></svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-300 text-lg title-font font-medium mb-3">Testimonials or Case Studies</h2>
                  <p className="leading-relaxed text-gray-500 text-base">Share testimonials from satisfied users or case studies that demonstrate how Sage has benefited individuals or businesses. Real-world examples can help visitors understand the practical applications of your chatbot and build trust in its effectiveness.</p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="text-gray-500 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed sm:text-md lg:text-lg">Sage embodies a commitment to seamless integration, continuous improvement, and user-centric design. Built on cutting-edge technologies, it empowers users with intelligent capabilities while prioritizing privacy and security. Customizable and flexible, Sage adapts to diverse needs and environments, offering scalable and reliable performance. It serves as an invaluable ally in enhancing creativity, productivity, and efficiency, seamlessly integrating into users workflows and fostering meaningful interactions</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">Tanmoy Ganguly</h2>
            <p className="text-gray-300">Developer</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
