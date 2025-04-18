'use client';
import { Card, CardBody, Link, CardFooter, Button, Image } from '@heroui/react';

import { Meme } from '../utils/memes';

const MemeCard = ({ name, image, likes }: Meme) => {
  return (
    <Card as="li" className="p-4 text-secondary bg-primary">
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt={name}
          className="object-cover rounded-xl"
          src={image}
          width="100%"
          height="100%"
        />
      </CardBody>
      <CardFooter className="absolute bg-white/30 left-0 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between block">
        <h2 className="font-bold text-large">{name}</h2>
        <div className="flex justify-between items-center">
          <small> {likes} Likes</small>
          <Button
            showAnchorIcon
            as={Link}
            color="primary"
            href={image}
            variant="solid"
            target="blank"
            className="text-tiny uppercase font-bold"
          >
            View
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MemeCard;
