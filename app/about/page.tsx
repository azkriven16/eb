import { CtaSection } from "@/components/sections/cta";
import { ProfileSection } from "@/components/sections/profile";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="shell pt-10">
      <ProfileSection />
      <div className="space-y-5 pt-10 md:pt-20">
        <p className="subheading max-w-2xl">
          Places I learn from, stay updated, and discover fresh ideas—whether
          it’s blogs, YouTube channels, or podcasts.
        </p>

        <div className="flex flex-col-reverse gap-10 md:flex-row md:mt-20">
          <div className="flex-1 flex items-center justify-center bg-secondary rounded-2xl">
            <Image
              src="https://media.tenor.com/Qm68f5zQrakAAAAj/dance-cute.gif"
              alt="Dancing Gif"
              width={200}
              height={200}
              className="grayscale object-contain"
              draggable={false}
            />
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-5">
            {/* Blogs */}
            <div className="flex-1">
              <h3 className="text-xl font-bold">Blogs</h3>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">CSS-Tricks</p>
              </div>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Smashing Magazine</p>
              </div>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Dev.to</p>
              </div>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Hashnode</p>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex-1">
              <h3 className="text-xl font-bold">YouTube</h3>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Fireship</p>
              </div>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Theo - t3.gg</p>
              </div>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Web Dev Simplified</p>
              </div>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Traversy Media</p>
              </div>
            </div>

            {/* Other */}
            <div className="flex-1">
              <h3 className="text-xl font-bold">Groups & More</h3>
              <div className="flex gap-5 subheading">
                <a
                  href="https://www.reddit.com/r/PinoyProgrammer/"
                  target="_blank"
                  className="external-link cursor-target"
                >
                  r/PinoyProgrammer
                </a>
              </div>
              <div className="flex gap-5 subheading">
                <a
                  href="https://www.facebook.com/groups/reactjsphilippines"
                  className="external-link cursor-target"
                >
                  ReactJS Philippines
                </a>
              </div>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Reddit r/webdev</p>
              </div>
              <div className="flex gap-5 subheading">
                <p className="font-semibold">Twitter / X Devs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="subheading max-w-2xl mb-10 mt-20">
        I also like to code with calming music or listen to programming
        podcasts. Every now and then, I mix in some J-Pop for a little extra
        energy.
      </p>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Calming Playlist */}
        <div className="bg-secondary p-5 rounded-2xl shadow-lg w-full max-w-md space-y-4">
          <iframe
            className="rounded-xl w-full"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* Programming Podcast */}
        <div className="p-5 rounded-2xl bg-secondary shadow-lg w-full space-y-4 items-center justify-center relative text-muted-foreground hidden md:flex">
          <p className="absolute top-4 left-4 text-xs">
            just some random text ❓
          </p>
          <div className="text-4xl leading-relaxed tracking-wide">
            L̴͈̻̆̈̎͜͝ḯ̸͉̼̔̀f̶̜̭̘͖̹͆͋́̊̓͗̈́̋̕ͅe̶̯̦̮̙̹̰̎̌̿͛͊̚͜ ̸͕̮͖͐̄̈́̾͐͛ḅ̴̨̏͒ȇ̵̢̻̱̋̉͂̉͆͝͝͝f̴̢̥̼͓͍͍̳̘̌͒̓o̶̭̮̺͔͕͎̍͌͌͜͝ͅͅŕ̴̨͚͎̹̮̠̙̲̾̈̓̋̓̕e̵̛͚̪̘͇̗͓͕̗͆̓͊̿̃͘ ̸̛͉̮̬̿̽͒͑̂̍͝d̴̹̟͓̑̈́͌̑̀͐̇̚͝͝ê̷͇̣͌̍a̶̡͙͗͛̒͊̏̍t̶̥͖͔̰̋̐̿̔̊̈́h̵̹͈̬̥̮͇͙̑͊̑̇͛͘͜͝,̶̡̛̣̗̠͕̗̦̠̈ ̵̧̦͈̜͇̥̩͔̯̮̄͋͌̄̌̔s̶̡͖̩̝͚̖̔͛͋̉̓͒̔̈͑͐t̸̰̩̄̌ͅr̶̲͉͉͔̬͓͑̎̅̐̈́e̴͎̓̐̓̀̽̃̕ͅn̸͖̣̼͕͒͋g̵̻̱̭̟͋̐͑͗̈́͝t̷̙͙̍̈̕͜h̷̜̭̗̞͊͆̀̀́̀ ̷̬͍͚̗̩̭̺̤̮͖͂̐͋̇͌b̵̨͉͙̝̱͖̤̋̉́͑̓̓̐̆̑͘ͅe̵͖̤̱̙̲͓͚͖̱̱͌̄ḟ̵̰̋̈́̀o̷͖̲̟̍͐͊̇͂̍̚ͅr̸̗͈̈́̇̌̑̒͒͘͠è̷̘̮̻͖̹̔̋͋̽̋͘͜͝ ̴̟̠̭̟͇̼͔̤̹͒́̋̇̎̓̈́̑̕ẅ̴̡̨͍̙̙̱̪̼̱͔́͂̓̅́͌̂͌̃͠e̸̡̥͂̋̌̾͝a̸̘̬̪̻̫̳̻̮̩͐̇̈́̅͋ķ̴̝̣̖̗̮̊̽n̵̡̧̪͖̼̆̋͐̈́͊̏̌̄͘͜͝ë̴̦́͛̍̓͛̈́̋̚͝ş̸̦͚͓̩͇͚̩̟͔̔̍s̴͙̦̩̬͝,̶̟̻͂̌͋͒̈̉͆͠͝ ̷̨̪͎͔̠͋͆̿́͑͛͋̏j̸͓̳̺̝͍̩̅o̸͔̹̩̾̉̒͌̈́̏̈́͜ṷ̷̧͙̹̎́͘r̵̨̯̆͛͌̋n̸̢̛̪̯̊̄ȩ̷̨̧̘̤͍̲̘͇͔̈́y̴̥̙̪͇̎̊͗̈̎̀̈́̋ͅ ̷̘͍̰̭̳̮̉̽͊̆̐̆̏̓͠b̶͕̯̮͂͂͒̔́͐̓̔̕é̷͎̱̻̦ͅf̷̧̡̳̺̗̟̥͇͔̳͋̈͆̊̈͊̓͂͝͝ő̷̧̧͓̼̜̖̤̳r̸̰̤̈́̌̂̑ȩ̵̝̺̬͔̈́͛́̀̐͠ͅ ̷̛̖̬̀̉̾̈́͊̓͝ ̶̱̗̪̽̔̇̉̅ ̷̛̖̯͍̈́̈́̈͠͠͠ ̵̦͔̥͙̉̎̐̋̓͒̐͛ ̸̖͉̞̥̠̖̂͂͑̋̏͑͋̚̕ ̵̬͙͑̇̈́̿͋̾̒̋̕͠ ̴̧̪̙̀ ̷̡̫͖̳̗̀͛͂̌̐̏͝ ̷͎̹̟̀̉͐͆͠
            ̷̧̱̠̦̞̻̺͉̳̒͑͋͝ͅ ̸̠̋̋̓̉̉͘ ̸̱͈̝͎̻̱̯̖͈̏̾̑̎̊̊́̏͐ ̶̢̳̖̖̱͙͓͖̬̋̓̈́̐̈́͠ ̷̡̲̥̟͖͈̩̅̊̐͜ ̶̢̧͖͇̰̼͕̘̎̾̉͊̋͊̽̍d̸̬͎̝̲̘̞̠͖̗̂̑̌̒̚̚͠͝ḛ̴̛̗̰̭̊̿s̷̘̘̳̭̺̖̽̈̀̈́̐̌̕͠t̸͍̉̓̉̈͊͝i̶̥̐͒̈́̽̍̋̊͑̚͝n̴̜̖͚̝͛͜ͅà̴̹̎͐t̵̨̤̜͇̦͇̩̮̞̥̏̓̎́i̴̢̧͓̎o̵̹̊͝n̸̦͉͈̤̖̣̖̱̿̂͌͋͗͂̿̇̕͝
          </div>
        </div>
      </div>
      <CtaSection />
    </main>
  );
}
