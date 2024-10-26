// components/custom/share-button/ShareButton.tsx
import { useState, useEffect, useRef } from "react";
import { Article } from "@/types/article";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { ShareMenu } from "@/components/custom/share-menu/ShareMenu";
import { getShareOptions } from "@/data/shareOptions";

interface ShareButtonProps {
  article: Article;
}

export function ShareButton({ article }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  // Meta Open Graph dinámico para cada artículo
  useEffect(() => {
    const metaTags = [
      { name: "og:title", content: article.title },
      { name: "og:description", content: article.description },
      { name: "og:image", content: article.image },
      { name: "og:url", content: window.location.href },
      { name: "twitter:card", content: "summary_large_image" },
    ];

    metaTags.forEach((tag) => {
      const element = document.createElement("meta");
      element.setAttribute("property", tag.name);
      element.content = tag.content;
      document.head.appendChild(element);
    });

    return () => {
      metaTags.forEach((tag) => {
        const element = document.querySelector(`meta[property="${tag.name}"]`);
        if (element) document.head.removeChild(element);
      });
    };
  }, [article]);

  const shareOptions = getShareOptions(article);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="relative" ref={menuRef}>
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full">
        <Share2 className="h-4 w-4" />
        <span className="sr-only">Compartir artículo</span>
      </Button>

      {showMenu && (
        <ShareMenu
          options={shareOptions}
          onOptionSelect={() => setShowMenu(false)}
        />
      )}
    </div>
  );
}
