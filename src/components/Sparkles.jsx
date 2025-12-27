import { useEffect, useRef } from "react";

const Sparkles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const particles = Array.from({ length: 120 }, () => ({
            x: Math.random() * width,
            y: height / 2 + Math.random() * height / 2,
            r: Math.random() * 1.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: Math.random() * -0.2,
        }));

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.y < height / 2) p.y = height;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255,255,255,0.6)";
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0"
        />
    );
};

export default Sparkles;
