import React, { useEffect } from "react";

const StarsBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("stars-canvas");
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars = [];

    canvas.width = width;
    canvas.height = height;

    function createStars() {
      stars = [];
      for (let i = 0; i < 120; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          speed: 0.15 + Math.random() * 0.3, // Add speed for movement
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      for (let star of stars) {
        // Move star downward
        star.y += star.speed;
        // Twinkle effect
        star.alpha += (Math.random() - 0.5) * 0.02;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 1) star.alpha = 1;
        // If star goes off screen, reset to top
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      }
      drawStars();
      requestAnimationFrame(animate);
    }

    createStars();
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="stars-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default StarsBackground;