import Image from "next/image";
import { SectionHeader } from "../section-header";

export const OthersSection = () => {
  return (
    <div>
      <div className="space-y-5">
        <SectionHeader
          icon="🎧"
          title="My Hobbies & Interests"
          highlight="free time"
          description="In my free time, I enjoy exploring new coding projects, listening to music, watching anime, and getting lost in books that spark creativity and inspiration."
        />

        <div className="flex flex-col gap-5">
          <div className="flex-1 flex items-center justify-center bg-secondary rounded-2xl">
            <Image
              src="https://media.tenor.com/lVhFnY9tc94AAAAj/anime-dance.gif"
              alt="Dancing Gif"
              width={120}
              height={120}
              className="grayscale object-cover"
              draggable={false}
            />
            <Image
              src="https://media.tenor.com/tGy32ceKovQAAAAj/%E3%81%82.gif"
              alt="Dancing Gif"
              width={200}
              height={200}
              className="grayscale object-cover"
              draggable={false}
            />
            <Image
              src="https://media.tenor.com/_1NYmn8RuWAAAAAj/goku-fortnite-goku.gif"
              alt="Dancing Gif"
              width={120}
              height={120}
              className="grayscale object-cover"
              draggable={false}
            />
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-5">
            {/* Books */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Currently Reading</h3>
              <ResourceLink
                href="https://www.goodreads.com/series/49075-the-stormlight-archive"
                label="The Stormlight Archive — Brandon Sanderson"
              />
              <ResourceLink
                href="https://www.goodreads.com/series/117100-red-rising-saga"
                label="Red Rising Saga — Pierce Brown"
              />
              <ResourceLink
                href="https://www.goodreads.com/series/45935-dune"
                label="Dune Series — Frank Herbert"
              />
            </div>

            {/* Anime */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Anime I&apos;m Into</h3>
              <ResourceLink
                href="https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch"
                label="Code Geass: Lelouch of the Rebellion"
              />
              <ResourceLink
                href="https://myanimelist.net/anime/1535/Death_Note"
                label="Death Note"
              />
              <ResourceLink
                href="https://myanimelist.net/anime/10793/Guilty_Crown"
                label="Guilty Crown"
              />
              <ResourceLink
                href="https://myanimelist.net/anime/9253/Steins_Gate"
                label="Steins;Gate"
              />
            </div>

            {/* Groups & Podcasts */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Groups & Podcasts</h3>
              <ResourceLink
                href="https://www.reddit.com/r/PinoyProgrammer/"
                label="r/PinoyProgrammer"
              />
              <ResourceLink
                href="https://www.facebook.com/groups/reactjsphilippines"
                label="ReactJS Philippines"
              />
              <ResourceLink
                href="https://open.spotify.com/show/34U0tp1tNHJyhtmY0tUlm7"
                label="KakaComputer"
              />
            </div>
          </div>
        </div>
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
            <p className="absolute top-4 left-4 text-xs">my favorite quote</p>
            <div className="text-4xl leading-relaxed tracking-wide">
              L̴͈̻̆̈̎͜͝ḯ̸͉̼̔̀f̶̜̭̘͖̹͆͋́̊̓͗̈́̋̕ͅe̶̯̦̮̙̹̰̎̌̿͛͊̚͜ ̸͕̮͖͐̄̈́̾͐͛ḅ̴̨̏͒ȇ̵̢̻̱̋̉͂̉͆͝͝͝f̴̢̥̼͓͍͍̳̘̌͒̓o̶̭̮̺͔͕͎̍͌͌͜͝ͅͅŕ̴̨͚͎̹̮̠̙̲̾̈̓̋̓̕e̵̛͚̪̘͇̗͓͕̗͆̓͊̿̃͘ ̸̛͉̮̬̿̽͒͑̂̍͝d̴̹̟͓̑̈́͌̑̀͐̇̚͝͝ê̷͇̣͌̍a̶̡͙͗͛̒͊̏̍t̶̥͖͔̰̋̐̿̔̊̈́h̵̹͈̬̥̮͇͙̑͊̑̇͛͘͜͝,̶̡̛̣̗̠͕̗̦̠̈ ̵̧̦͈̜͇̥̩͔̯̮̄͋͌̄̌̔s̶̡͖̩̝͚̖̔͛͋̉̓͒̔̈͑͐t̸̰̩̄̌ͅr̶̲͉͉͔̬͓͑̎̅̐̈́e̴͎̓̐̓̀̽̃̕ͅn̸͖̣̼͕͒͋g̵̻̱̭̟͋̐͑͗̈́͝t̷̙͙̍̈̕͜h̷̜̭̗̞͊͆̀̀́̀ ̷̬͍͚̗̩̭̺̤̮͖͂̐͋̇͌b̵̨͉͙̝̱͖̤̋̉́͑̓̓̐̆̑͘ͅe̵͖̤̱̙̲͓͚͖̱̱͌̄ḟ̵̰̋̈́̀o̷͖̲̟̍͐͊̇͂̍̚ͅr̸̗͈̈́̇̌̑̒͒͘͠è̷̘̮̻͖̹̔̋͋̽̋͘͜͝ ̴̟̠̭̟͇̼͔̤̹͒́̋̇̎̓̈́̑̕ẅ̴̡̨͍̙̙̱̪̼̱͔́͂̓̅́͌̂͌̃͠e̸̡̥͂̋̌̾͝a̸̘̬̪̻̫̳̻̮̩͐̇̈́̅͋ķ̴̝̣̖̗̮̊̽n̵̡̧̪͖̼̆̋͐̈́͊̏̌̄͘͜͝ë̴̦́͛̍̓͛̈́̋̚͝ş̸̦͚͓̩͇͚̩̟͔̔̍s̴͙̦̩̬͝,̶̟̻͂̌͋͒̈̉͆͠͝ ̷̨̪͎͔̠͋͆̿́͑͛͋̏j̸͓̳̺̝͍̩̅o̸͔̹̩̾̉̒͌̈́̏̈́͜ṷ̷̧͙̹̎́͘r̵̨̯̆͛͌̋n̸̢̛̪̯̊̄ȩ̷̨̧̘̤͍̲̘͇͔̈́y̴̥̙̪͇̎̊͗̈̎̀̈́̋ͅ ̷̘͍̰̭̳̮̉̽͊̆̐̆̏̓͠b̶͕̯̮͂͂͒̔́͐̓̔̕é̷͎̱̻̦ͅf̷̧̡̳̺̗̟̥͇͔̳͋̈͆̊̈͊̓͂͝͝ő̷̧̧͓̼̜̖̤̳r̸̰̤̈́̌̂̑ȩ̵̝̺̬͔̈́͛́̀̐͠ͅ ̷̛̖̬̀̉̾̈́͊̓͝ ̶̱̗̪̽̔̇̉̅ ̷̛̖̯͍̈́̈́̈͠͠͠ ̵̦͔̥͙̉̎̐̋̓͒̐͛ ̸̖͉̞̥̠̖̂͂͑̋̏͑͋̚̕ ̵̬͙͑̇̈́̿͋̾̒̋̕͠ ̴̧̪̙̀
              ̷̡̫͖̳̗̀͛͂̌̐̏͝ ̷͎̹̟̀̉͐͆͠ ̷̧̱̠̦̞̻̺͉̳̒͑͋͝ͅ ̸̠̋̋̓̉̉͘ ̸̱͈̝͎̻̱̯̖͈̏̾̑̎̊̊́̏͐ ̶̢̳̖̖̱͙͓͖̬̋̓̈́̐̈́͠ ̷̡̲̥̟͖͈̩̅̊̐͜ ̶̢̧͖͇̰̼͕̘̎̾̉͊̋͊̽̍d̸̬͎̝̲̘̞̠͖̗̂̑̌̒̚̚͠͝ḛ̴̛̗̰̭̊̿s̷̘̘̳̭̺̖̽̈̀̈́̐̌̕͠t̸͍̉̓̉̈͊͝i̶̥̐͒̈́̽̍̋̊͑̚͝n̴̜̖͚̝͛͜ͅà̴̹̎͐t̵̨̤̜͇̦͇̩̮̞̥̏̓̎́i̴̢̧͓̎o̵̹̊͝n̸̦͉͈̤̖̣̖̱̿̂͌͋͗͂̿̇̕͝
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ResourceLinkProps {
  href?: string;
  label: string;
}

function ResourceLink({ href, label }: ResourceLinkProps) {
  // If href is provided, render anchor, else render just text
  return (
    <div className="flex gap-5 subheading">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-blue-500 font-semibold cursor-pointer"
        >
          {label}
        </a>
      ) : (
        <p className="font-semibold">{label}</p>
      )}
    </div>
  );
}
