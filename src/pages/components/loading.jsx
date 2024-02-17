import React from 'react';
import {Card,CardHeader,CardBody, Skeleton} from "@nextui-org/react";


const loadingPage = ()=>{
  return (
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Skeleton className="w-full mb-1 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full mb-1 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full mb-1 rounded-lg">  
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
      </CardHeader>
      <CardBody className="py-2">
        <Skeleton className="rounded-lg h-300px">
          <div className="h-[200px] rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardBody>
    </Card>
  )
}

export default loadingPage;