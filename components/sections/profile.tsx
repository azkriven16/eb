"use client";

import Lanyard from "../ui/lanyard";

export function ProfileSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row h-full w-full">
      <div className="flex-1 pt-[300px] md:pt-20">
        <div className="space-y-5">
          <h1 className="heading">
            A short <strong>introduction</strong>
          </h1>
          <p className="subheading">
            I thrive on learning, leading, and solving complex challenges —
            always reflecting on how each experience contributes to personal and
            team growth.
          </p>

          <div>
            <h3 className="text-xl font-bold">Bio</h3>
            <div className="flex gap-5 subheading">
              <p className="font-semibold">1984</p>
              <p>Born in Osaka (大阪), Japan.</p>
            </div>

            <div className="flex gap-5 subheading">
              <p className="font-semibold">2010</p>
              <p>
                Completed the Master&apos;s Program in the Graduate School of
                Information Science at Nara Institute of Science and Technology
                (奈良先端科学技術大学院大学情報科学研究科修士課程)
              </p>
            </div>
            <div className="flex gap-5 subheading">
              <p className="font-semibold">1984</p>
              <p>Worked at Yahoo! Japan (ヤフー株式会社入社)</p>
            </div>
            <div className="flex gap-5 subheading">
              <p className="font-semibold">1984</p>
              <p>Working as a freelancer</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">On the web</h3>
            <div className="flex gap-5 subheading">
              <p className="font-semibold">1984</p>
              <p>Born in Osaka (大阪), Japan.</p>
            </div>

            <div className="flex gap-5 subheading">
              <p className="font-semibold">1984</p>
              <p>Working as a freelancer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Lanyard />
      </div>
    </section>
  );
}
