import { motion } from "framer-motion";

interface VideoSectionProps {
  videos: { src: string; title: string }[];
}

const VideoSection = ({ videos }: VideoSectionProps) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Pogledajte <span className="text-primary">uživo</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Pogledajte kako izgleda zabava s našim uslugama!
        </p>
      </motion.div>
      <div className={`grid grid-cols-1 ${videos.length > 1 ? "md:grid-cols-2" : "max-w-2xl mx-auto"} gap-8`}>
        {videos.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <video
              src={v.src}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-center text-sm font-semibold text-muted-foreground mt-3">{v.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
