import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className="w-auto h-auto px-10 py-5 md:px-10 lg:px-80 flex items-center flex-col gap-10 bg-slate-900">
    <h1 className="text-white md:text-blue-500  lg:text-red-500 text-5xl">About Me</h1>
    <Image src={'https://avatars.githubusercontent.com/u/138115900?s=400&u=e606ccf85ca2ea8fce549592761719edf89af96f&v=4'} alt="profile" width={100} height={100} className="rounded-full" />
    <p className="text-red-500 md:text-blue-500  lg:text-white">
      Hey there! I&apos;m Clint Elson Soriano, a 19-year-old aspiring web developer🧑‍💻. Welcome to my corner of the internet!  
    </p>
    <p className="text-red-500 md:text-blue-500  lg:text-white">
    Ever since I can remember, I&apos;ve been fascinated by coding. Whether it&apos;s delving into the world of reading manwha, exploring the depths of playing guitar, or simply soaking in the beauty of nature, I find joy and inspiration in the little things.
    </p>
    <p className="text-red-500 md:text-blue-500  lg:text-white">
    Currently, I&apos;m studying NextJS, but my journey is just beginning. I believe in the power of continuous learning and growth, and I&apos;m always seeking out new opportunities to expand my horizons.
    </p>
    <p className="text-red-500 md:text-blue-500  lg:text-white">
    When I&apos;m not studying, you can usually find me coding or reading manwha. I&apos;m passionate about learning NextJS, and I&apos;m always eager to connect with like-minded individuals who share my enthusiasm.
    </p>
    <p className="text-red-500 md:text-blue-500  lg:text-white">
    This website serves as a platform for me to share my thoughts, experiences, and creative endeavors with the world. So take a look around, and feel free to reach out if you&apos;d like to connect or collaborate!
    </p>
    <p className="text-red-500 md:text-blue-500  lg:text-white">
    Thanks for stopping by, and I hope you enjoy your stay!
    </p>

<p>
  Social Media
</p>
<div className="flex gap-10">
<Link className="flex gap-2" href={'https://github.com/Clintelson'}>
            <Image src={"/git.png"} alt="githublogo" width={30} height={30}/>
</Link>
<Link className="flex gap-2" href={'https://web.facebook.com/elsonclint.soriano/'}>
            <Image src={"/fb.png"} alt="fblogo" width={30} height={30} className="rounded-full"/>
</Link>
</div>
   </main>
   
  );
}
