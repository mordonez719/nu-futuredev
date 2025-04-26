import { FlickeringGrid } from "./components/magicui/flickering-grid"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Profile from "@/components/profile";

function App() {

  function enableInstagramScroll() {
    // Target all Instagram iframes
    const igFrames = document.querySelectorAll('.instagram-media iframe, .instagram-media-rendered') as NodeListOf<HTMLIFrameElement>;
    
    igFrames.forEach(iframe => {
      // 1. Set scrolling attribute
      iframe.setAttribute('scrolling', 'yes');
      
      // 2. Force enable scrolling via CSS
      iframe.style.overflow = 'auto';
      iframe.style.overflowY = 'scroll';
      
      // 3. Ensure scrollbars are visible
      iframe.style.scrollbarWidth = 'auto'; // Firefox
      // Ensure scrollbars are visible for older browsers
      iframe.style.cssText += 'overflow: auto; overflow-y: scroll; scrollbar-width: auto;';
    });
  }
  
  // Run immediately in case iframe exists
  enableInstagramScroll();
  
  // Set up observer for dynamically loaded embeds
  const observer = new MutationObserver(enableInstagramScroll);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  });
  
  // Optional: Periodic check as fallback
  const scrollCheck = setInterval(enableInstagramScroll, 1000);
  setTimeout(() => clearInterval(scrollCheck), 10000); // Stop after 10s
  
  const mentors = [
    {
      name: "Ege",
      image: "/src/assets/ege.png",
      description: "Game Development - Beginner",
      link: "",
    },
    {
      name: "Christian",
      image: "/src/assets/christian_fd.png",
      description: "Game Development - Beginner",
      link: "",
    },
    {
      name: "Ethan",
      image: "/src/assets/ethan.png",
      description: "Moble Development - Advanced",
      link: "",
    },
    {
      name: "Brock",
      image: "/src/assets/brock_fd.jpg",
      description: "Web Development - Beginner",
      link: "",
    }
  ]

  const exec = [
    {
      name: "Chris",
      image: "/src/assets/chris.png",
      description: "President",
      link: "",
    },
    {
      name: "Jack",
      image: "/src/assets/jack.png",
      description: "Treasurer",
      link: "",
    },
    {
      name: "Melanie",
      image: "/src/assets/melanie.png",
      description: "Dir. of Community",
      link: "",
    },
    {
      name: "Joanna",
      image: "/src/assets/joanna.png",
      description: "Co-Dir. of Education",
      link: "",
    },
    {
      name: "Mariana",
      image: "/src/assets/mariana.jpg",
      description: "Co-Dir. of Education",
      link: "",
    }
  ]

  const branches = [
      {
        title: "Web Development",
        description: "Build modern websites and apps with front-end and back-end technologies. Learn HTML, CSS, JavaScript, and React to create portfolio sites or passion projects. Master both functional and aesthetic elements of web design.",
        link: "",
        picture: "/src/assets/web_dev_img.png"
      },
      {
        title: "Mobile Development",
        description: "Create Android and iOS apps using popular tools like React Native, Flutter, and Android Studio. Learn Java and Swift to build apps you can use on your phone with friends. Discover the mobile development process from start to finish.",
        link: "",
        picture: "/src/assets/mobile_dev.png"
      },
      {
        title: "Game Development",
        description: "Explore how games are made through UI/UX design principles. Learn the fundamentals of creating your own games, from concept to implementation. Discover what makes games engaging and fun to play.",
        link: "",
        picture: "/src/assets/game-dev.png"
      }
  ]

  return (
    <>
    <header className='bg-black flex items-center justify-between'>
      <img src="/src/assets/future_dev_transparent.png" className='h-25 p-2.5 animate-wiggle will-change-filter transition-filter duration-300 hover:drop-shadow-[0_0_1.25em_#646cffaa]'></img>
      <section className='bg-[#121212] flex rounded-2xl h-fit p-2.5 mr-4 gap-3'>
        <p className="p-2 rounded-sm hover:bg-zinc-700 transition-colors duration-300">Home</p>
        <p className="p-2 rounded-sm hover:bg-zinc-700 transition-colors duration-300">Mentors</p>
        <p className="p-2 rounded-sm hover:bg-zinc-700 transition-colors duration-300">Events</p>
        <p className="p-2 rounded-sm hover:bg-zinc-700 transition-colors duration-300">Executive Board</p>
        <p className="p-2 pl-4 pr-4 rounded-2xl bg-white text-black hover:scale-110 transition-transform duration-300">Join</p>
      </section>
    </header>

    <div className="relative min-h-[550px]">
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        squareSize={5}
        gridGap={6}
        color="#646cffaa"
        maxOpacity={0.65}
        flickerChance={0.1}
        height={550}
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center flex-col">
        <TypingAnimation className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg" duration={150} delay={10}>
          FutureDev
        </TypingAnimation>
        <TextAnimate animation="blurInUp" by="word" delay={1.6} className="font-thin w-200 text-center pt-3">
          Creating a community centered around mentorship in technology. 
          With a combination of social events and learning-focused group sessions, 
          we want to enrich your journey in the tech industry!
        </TextAnimate>
        <section className="p-5">
          <Button variant="default" className="p-5 m-2 rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#54db4b] before:to-[#a4f59f] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-black">Join Now</Button>
          <Button variant="secondary" className="p-5 m-2">Become a Mentor</Button>
        </section>
      </div>
    </div>

    <div className="flex">
    <div className="ml-10 w-[60%]">
      <TextAnimate animation="slideLeft" by="character" className="text-4xl font-serif border-b-3 w-fit border-[#a3fa82] pl-2 pr-2">
        About FutureDev
      </TextAnimate>
      <br></br>
      <p className="text-lg">
        We want to help students who are eager to explore and learn about various areas of the technology industry with others who share the same goal. 
        Whether you're looking to dive into web development, mobile app creation, or game production, we want to help you develop the skills necessary to create your own projects.
      </p>
      <br></br>
      <p className="text-lg">
        As we are a tech org solely focused on the development of tech skills, we want to establish a pod-like structure to foster learning!
      </p>
      <section className="ml-10 text-lg">
        <li>Small groups of students guided by one mentor</li>
        <li>Weekly meetings coordinated based on both your schedule and theirs</li>
        <li className="font-bold text-lg">1-2 hour time commitment</li>
      </section>
      <br></br>
      <p className="text-lg">
        In our general meetings, we’re looking to do more fun social stuff and have broader, useful talks, like about GitHub or other similar topics.
      </p>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-[30%] ml-10">
    <div className="row-span-2">
      <img 
        className="w-full h-full object-cover rounded-lg" 
        src="src/assets/fd_event_ade.jpg" 
        alt="Ade at event"
      />
    </div>
      <div>
      <img 
        className="w-full h-48 md:h-64 object-cover rounded-lg row-span-1" 
        src="src/assets/fd_event_christina.jpg" 
        alt="Christina at event" 
      />
    </div>
    <div>
      <img 
        className="w-full h-48 object-cover rounded-lg" 
        src="src/assets/fd_event_group.jpg" 
        alt="Edward at event" 
      />
    </div>
  </div>

    </div>

    <section>
      <HoverEffect items={branches} />
    </section>

    <div className="ml-10 w-full">
      <TextAnimate animation="slideLeft" by="character" className="text-4xl font-serif border-b-3 w-fit border-[#a3fa82] pl-2 pr-2">
        Meet the Mentors
      </TextAnimate>
      <br></br>
      <p>
        Our mentors are quarterly volunteers and design their cirriculums to keep pods enganged when learning
      </p>
      <section className="flex gap-5 m-5 justify-center">
        {mentors.map((mentor, index) => (
          <Profile key={index} name={mentor.name} group={mentor.description} image={mentor.image} />
        ))}
      </section>
    </div>

    <div className="m-10 w-full">
      <TextAnimate animation="slideLeft" by="character" className="text-4xl font-serif border-b-3 w-fit border-[#a3fa82] pl-2 pr-2">
        Recent Events
      </TextAnimate>
      <section className="m-10 flex justify-center">
        <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/nufuturedev/?utm_source=ig_embed" data-instgrm-version="14">
        </blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </section>
    </div>

    <div className="w-full">
      <TextAnimate animation="slideLeft" by="character" className="text-4xl font-serif border-b-3 w-fit border-[#a3fa82] pl-2 pr-2 ml-10">
        Executive Board
      </TextAnimate>
      <section className="flex gap-5 m-10">
        {exec.map((mentor, index) => (
          <Profile key={index} name={mentor.name} group={mentor.description} image={mentor.image} />
        ))}
      </section>
    </div>


<footer className="bg-white dark:bg-black">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src="/src/assets/future_dev_transparent.png" className="h-8 me-3" alt="FutureDev Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FutureDev</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Join</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Mentors</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Mentees</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2025 FutureDev @ Northwestern University
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                  </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="https://www.instagram.com/nufuturedev/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                  <span className="sr-only">Instagram page</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    
    </>
  )
}

export default App
