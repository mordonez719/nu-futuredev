import { FlickeringGrid } from "./components/magicui/flickering-grid"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button"

function App() {

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
        <section className="ml-10">
          <li>Small groups of students guided by one mentor</li>
          <li>Weekly meetings coordinated based on both your schedule and theirs</li>
          <li className="font-bold">1-2 hour time commitment</li>
        </section>
      </p>
      <br></br>
      <p>
        In our general meetings, we’re looking to do more fun social stuff and have broader, useful talks, like about GitHub or other similar topics.
      </p>
    </div>
    </>
  )
}

export default App
