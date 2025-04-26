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
      description: "Learn how to build modern websites and web applications using front-end and back-end technologies! Whether it be representing your portfolio or your own passion project, we want to give you the skills create your own website. We would like to explore the most relevant languages and frameworks for web development, including as HTML, CSS, JavaScript, and React. Within these tools, you will get a better understanding on the functional and aesthetic elements of website production.",
      link: "",
    },
    {
      title: "Mobile Development",
      description: "Dive into mobile technology by building apps for both Android and iOS. Create something that you and your friends can use on your phones! We want to explore the most common tools used in mobile app development today, including React Native, Flutter, Android Studio, Java, Swift. Within these tools, we hope to give you a glimpse into what developing an app might look like!",
      link: "",
    },
    {
      title: "Game Development",
      description: "Ever curious how the games you play work? Explore the fundamental elements of creating your own game! We hope to explore user interface (UI) and user experience (UX) design in games to allow you to get a better idea of how to make one of your own!",
      link: "",
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

    <div className="ml-10 w-300">
      <TextAnimate animation="slideLeft" by="character" className="text-4xl font-serif border-b-3 w-fit border-[#a3fa82] pl-2 pr-2">
        About FutureDev
      </TextAnimate>
      <br></br>
      <p>
        We want to help students who are eager to explore and learn about various areas of the technology industry with others who share the same goal. 
        Whether you're looking to dive into web development, mobile app creation, or game production, we want to help you develop the skills necessary to create your own projects.
      </p>
      <br></br>
      <p>
        As we are a tech org solely focused on the development of tech skills, we want to establish a pod-like structure to foster learning!
      </p>
      <section className="ml-10">
        <li>Small groups of students guided by one mentor</li>
        <li>Weekly meetings coordinated based on both your schedule and theirs</li>
        <li className="font-bold">1-2 hour time commitment</li>
      </section>
      <br></br>
      <p>
        In our general meetings, we’re looking to do more fun social stuff and have broader, useful talks, like about GitHub or other similar topics.
      </p>
    </div>

    <section>
      <HoverEffect items={branches} />
    </section>

    <div className="ml-10 w-300">
      <TextAnimate animation="slideLeft" by="character" className="text-4xl font-serif border-b-3 w-fit border-[#a3fa82] pl-2 pr-2">
        Meet the Mentors
      </TextAnimate>
      <br></br>
      <p>
        Our mentors are quarterly volunteers and design their cirriculums to keep pods enganged when learning
      </p>
      <section className="flex gap-5 mt-5">
        {mentors.map((mentor, index) => (
          <Profile key={index} name={mentor.name} group={mentor.description} image={mentor.image} />
        ))}
      </section>
    </div>

    <div className="ml-10 w-300">
      <TextAnimate animation="slideLeft" by="character" className="text-4xl font-serif border-b-3 w-fit border-[#a3fa82] pl-2 pr-2">
        Recent Events
      </TextAnimate>
      <section>
        <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/nufuturedev/?utm_source=ig_embed" data-instgrm-version="14">
        </blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </section>
    </div>

    <div className="ml-10 w-300">
      <TextAnimate animation="slideLeft" by="character" className="text-4xl font-serif border-b-3 w-fit border-[#a3fa82] pl-2 pr-2">
        Executive Board
      </TextAnimate>
      <section className="flex gap-5 mt-5">
        {exec.map((mentor, index) => (
          <Profile key={index} name={mentor.name} group={mentor.description} image={mentor.image} />
        ))}
      </section>
    </div>

    <footer className="bg-black flex items-center">
      <div>
        <h1 className="text-2xl">Join FutureDev</h1>
        <p>FutureDev's spring mentee recruitment is currently closed. Please join our Discord and follow our Instagram to stay up-to-date on events and when the next cycle opens!</p>
        <p>If you would like to join FutureDev as a mentor, please fill out the interest form below!</p>
      </div>
      <img src="/src/assets/future_dev_transparent.png" className='w-[25%] p-2.5 justify-self-center'></img>
    </footer>
    
    </>
  )
}

export default App
