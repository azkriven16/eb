import { InView } from "@/components/ui/in-view";
import { PropsWithChildren } from "react";
import { fadeIn } from "./variants";

export const FadeIn = ({ children }: PropsWithChildren) => {
  return (
    <InView
      variants={fadeIn}
      viewOptions={{
        margin: "0px 0px -150px 0px",
        // once: true,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
    >
      {children}
    </InView>
  );
};
