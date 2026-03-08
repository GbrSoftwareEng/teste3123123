import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

const FloatingEmbers = () => {
  const [embers, setEmbers] = useState<{ id: number; left: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 14,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 12,
    }));
    setEmbers(generated);
  }, []);

  return (
    <>
      {embers.map((e) => (
        <Flame
          key={e.id}
          className="floating-heart text-fire opacity-30"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </>
  );
};

export default FloatingEmbers;
