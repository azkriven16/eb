import Link from "next/link";
import TiltedCard from "./ui/tilted-card";

export const ChatbotCard = () => {
  return (
    <Link
      href="/chatbot"
      className="flex-1 flex flex-col items-center justify-center rounded-xl grayscale"
    >
      <TiltedCard
        imageSrc="https://media.tenor.com/JqjtUxrkuzsAAAAi/robot-dance.gif"
        altText="Euger's Chatbot powered by Gemini"
        captionText="Euger's Chatbot 🤖 - Powered by Gemini"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      />
    </Link>
  );
};
