export default function Home() {
  return (
    <main>
      <div className="video-overlay relative">
        <video className="w-full object-cover aspect-[1/1.4] -mt-(--header-height) sm:aspect-16/7 sm:object-top" muted autoPlay loop preload="auto">
          <source src="/desk-vid.mp4" type="video/mp4" media="(min-width: 640px)" />
          <source src="/mob-vid.mp4" type="video/mp4" />
        </video>
        <div className="video-gradient z-1 absolute top-0 left-0 right-0 bottom-0" />
      </div>
    </main>
  );
}
