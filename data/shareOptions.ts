import { Article } from "@/types/article";

export function getShareOptions(article: Article) {
  const encodedTitle = encodeURIComponent(`*${article.title}*`);
  const encodedDescription = encodeURIComponent(article.description);

  const encodedUrl = encodeURIComponent(article.url);

  return [
    {
      name: "WhatsApp",
      url: `https://wa.me/?text=${encodedTitle}%0A%0A${encodedDescription}%0A%0A${encodedUrl}`,
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "Instagram",
      url: `https://www.instagram.com/?url=${encodedUrl}`,
    },
  ];
}
