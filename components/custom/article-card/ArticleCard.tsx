// components/ArticleCard.tsx
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Article } from "@/types/article";
import { ShareButton } from "@/components/custom/share-button/ShareButton";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card key={article.id} className="flex flex-col bg-outline my-4">
      <CardHeader>
        <Image
          width={300}
          height={300}
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <Badge>{article.category}</Badge>
        <CardTitle className="mt-2 mb-2">{article.title}</CardTitle>
        <p className="text-muted-foreground">{article.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          <p>{article.author}</p>
          <p>{new Date(article.date).toLocaleDateString()}</p>
        </div>
        <ShareButton article={article} />
      </CardFooter>
    </Card>
  );
}
