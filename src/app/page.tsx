"use client"

import { differenceInCalendarDays, startOfToday } from "date-fns";
import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";
import Image from "next/image";

export default function Index() {

  const daysUntilMeet = function () {
    return differenceInCalendarDays(new Date(2023, 9, 13), startOfToday());
  }
  
  return (
    <div className="container max-w-lg flex flex-col">
      <div className="bg-dark-indigo h-32 flex flex-row justify-between items-center px-4">
        <div className="">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={125}
            height={0}
          />
        </div>
        <div className="flex flex-row gap-2 justify-end">
          <a className="bg-gradient-to-tr from-hot-pink to-light-pink rounded-full text-dark-indigo py-2 px-3 font-serif w-fit h-fit" href="#cute-pics">
          Cute pics
          </a>
          <a className="bg-gradient-to-tr from-hot-pink to-light-pink rounded-full text-dark-indigo py-2 px-3 font-serif w-fit h-fit" href="#date-ideas">
            Date ideas
          </a>
        </div>
      </div>
      <div className="relative w-full h-96">
        <Image
          src="/img/page_top.png"
          alt="top image"
          fill={true}
        />
      </div>
      <div className="px-5 mt-10">
        <h1 className="font-serif font-extrabold text-4xl">Hey Kelli.</h1>
        <p className="mt-2">I made a sweet website for us.</p>
        <p>Tell me that&apos;s not the most romantic, nerdy thing you&apos;ve ever heard of.</p>
      </div>
      
      <div className="relative h-96">
        <div className="absolute w-48 h-96">
          <Image
            src="/img/sidething_export.svg"
            alt="side image 1"
            fill={true}
          />          
        </div>
        <div className="absolute right-10 top-40 w-48 text-right">
          <h1 className="font-serif font-extrabold text-4xl">{daysUntilMeet()} days.</h1>
          <p className="mt-2">That&apos;s how long until we get to meet in person again!</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-5" id="cute-pics">
        <div className="absolute right-0 translate-y-72 w-36 h-96">
          <Image
            src="/img/sidething2_export.svg"
            alt="side image 2"
            fill={true}
          />
        </div>
        <h1 className="font-serif font-extrabold text-4xl">Nice photos.</h1>
        <p>We&apos;re too cute.</p>
        <Carousel slide={true} slideInterval={5000} className="h-96">
          <Image
            src="/img/carousel/photo_3.png"
            alt="..."
            width={600}
            height={800}
          />
          <Image
            src="/img/carousel/photo_4.png"
            alt="..."
            width={600}
            height={800}
          />
          <Image
            src="/img/carousel/photo_6.png"
            alt="..."
            width={600}
            height={800}
          />
          <Image
            src="/img/carousel/photo_7.png"
            alt="..."
            width={600}
            height={800}
          />
          <Image
            src="/img/carousel/photo_8.png"
            alt="..."
            width={600}
            height={800}
          />
        </Carousel>
        <Carousel slide={true} slideInterval={5000} className="h-64">
          <Image
            src="/img/carousel/photo_2.png"
            alt="..."
            width={800}
            height={600}
          />
          <Image
            src="/img/carousel/photo_5.png"
            alt="..."
            width={800}
            height={600}
          />
          <Image
            src="/img/carousel/photo_9.png"
            alt="..."
            width={800}
            height={600}
          />
          <Image
            src="/img/carousel/photo_10.png"
            alt="..."
            width={800}
            height={600}
          />
          <Image
            src="/img/carousel/photo_1.png"
            alt="..."
            width={800}
            height={600}
          />
        </Carousel>
      </div>

      <div className="flex flex-col gap-4 items-center mt-16 p-5" id="date-ideas">
        <h1 className="font-serif font-extrabold text-4xl">Date ideas.</h1>
        <p>Or anytime we&apos;re feeling bored. We can make this fun!</p>
        <Accordion className="w-full">
          <Accordion.Panel>
            <Accordion.Title className="font-serif">GamePigeon</Accordion.Title>
            <Accordion.Content>This one&apos;s a classic. We&apos;ve got the dots game, penguin brawl, anagrams, you name it.</Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-serif">BoardGameArena</Accordion.Title>
            <Accordion.Content>Maybe a step up from GamePigeon. Our favorite currently is Concept... because that&apos;s the only one we&apos;ve played...</Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-serif">Playlist Making</Accordion.Title>
            <Accordion.Content>What&apos;s the vibe? Throwback? Dance party? Sunday music?? The possibilities are endless.</Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-serif">Remote Baking</Accordion.Title>
            <Accordion.Content>Those chocolate cookies were amazing, I need more. Let&apos;s make something!</Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-serif">Yoga</Accordion.Title>
            <Accordion.Content>I&apos;m feeling stretchy, are you? Honesly this would probably be good for both of us.</Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-serif">Bob Ross Paint Night</Accordion.Title>
            <Accordion.Content>This guy is iconic. It&apos;s like our oragami night, but a little more messy.</Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-serif">Zillow House Hunting</Accordion.Title>
            <Accordion.Content>We might have a practical use for this in our future... hehe...</Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="font-serif">Short Story Reading</Accordion.Title>
            <Accordion.Content>Spooky, romantic, exciting, thought provoking! You can get all the feels with this one.</Accordion.Content>
          </Accordion.Panel>
        </Accordion>
          
      </div>

      <div className="flex flex-col gap-4 items-center mt-20 p-5 bg-dark-indigo">
        <p className="text-purple-cream mb-10">
            Kelli - <br/>
            Okay, the website is a little silly. And my design skills could definitely use some work. And I 100% copied the date list from our shared note, so not a lot of original content there besides my commentary. But I hope we can use this when we&apos;re missing each other and just need a little pick me up! <br/>
            I&apos;m SO GLAD that we took the leap to date long distance. It&apos;s been an amazing ride so far, and there is no one else I would rather have spent it with! I&apos;m excited for the days, months, and years to come! <br/>
            I love you! <br/>
            - Chase
        </p>
      </div>
      
    </div>
  )
}
