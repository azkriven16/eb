import Typewriter from "typewriter-effect";

export default function Terminal() {
  return (
    <div
      className="coding inverse-toggle px-5 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-black  pb-6 pt-4 rounded-lg leading-normal overflow-hidden my-2"
    >
      <div className="top mb-2 flex">
        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="flex">
        <span className="text-green-400">computer:~$</span>
        <p className="flex-1 typing items-center pl-2">
          <Typewriter
            options={{
              strings: [
                "Greetings, fellow humans! 👋😃",
                "Welcome to my portfolio! 🌐👨‍💻",
                "I'm excited to have you here! 🎉",
                "Let's explore my work together! 🚀",
                "Passionate about code and design. ❤️",
                "Building web experiences since 2010. 🕒",
                "Let's create something amazing! 🌟",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
    </div>
  );
}
