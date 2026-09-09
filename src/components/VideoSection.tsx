interface Video {
  src: string;
  title: string;
}

interface VideoSectionProps {
  videos: Video[];
}

const VideoSection = ({ videos }: VideoSectionProps) => (
  <section className="py-12 md:py-20 bg-muted">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-fredoka">
        Zabava uživo 🎉
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-card border border-border"
          >
            <div className="aspect-video relative">
              <video
                src={video.src}
                title={video.title}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-bold font-fredoka">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
