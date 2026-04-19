import { useLocation } from "react-router-dom";

const FloralBackground = () => {
  const { pathname } = useLocation();

  // Esconder nas abas de portfólio e certificados
  if (pathname === "/portfolio" || pathname === "/certificados") {
    return null;
  }

  // Suave no currículo, normal no início
  const opacity = pathname === "/curriculo" ? 0.30 : 0.45;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <img
        src="/background3.gif"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "blur(2px) brightness(1.05)",
          opacity,
          transform: "scale(1.05)",
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
};

export default FloralBackground;
