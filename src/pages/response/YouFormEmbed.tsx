import React, { useEffect, useRef } from "react";

interface YouFormEmbedProps {
  formId: string;
  width?: string;
  height?: string;
}

declare global {
  interface Window {
    YouformEmbed?: {
      init: () => void;
    };
  }
}

const YouFormEmbed: React.FC<YouFormEmbedProps> = ({
  formId,
  width = "100%",
  height = "700",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Kontrollera om scriptet redan finns
    const scriptId = "youform-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://app.youform.com/embed.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
      script.onload = () => {
        window.YouformEmbed?.init?.();
      };
    } else {
      // Initiera om scriptet redan laddats
      window.YouformEmbed?.init?.();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      data-youform-embed
      data-form={formId}
      data-width={width}
      data-height={height}
    />
  );
};

export default YouFormEmbed;
