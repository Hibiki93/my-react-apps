import React from "react";
import {Card, CardHeader,Image} from "@nextui-org/react";

export default function commentCard({comment}) {
  return (
    <Card className="max-w-[400px] mb-3">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{comment.Source}</p>
          <p className="text-small text-default-500">{comment.Value}</p>
        </div>
      </CardHeader>
    </Card>
  );
}
