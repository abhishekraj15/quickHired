import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
        <section className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="flex flex-col items-center justify-center gradient-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter py-4 leading-tight">
            Discover Your Dream Job{" "}
            <span className="flex flex-col md:flex-row items-center gap-2 sm:gap-4">
              and get hired with{" "}
              {/* Uncomment the image if you want to include the logo */}
              {/* <img
        src="/NewLogo.png"
        alt="Hired Logo"
        className="h-12 sm:h-14 md:h-20 lg:h-24 xl:h-32 md:mt-12"
      /> */}
              {/* <h2 className="uppercase gradient-title ">Hired</h2> */}
              <img
                src="/logo.png"
                alt="HirredLogo"
                className="h-10 sm:h-14 md:h-18 lg:h-24 xl:h-32"
              />
            </span>
          </h1>

          <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl">
            Browse countless job opportunities or discover the ideal candidate.
          </p>
        </section>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/jobs">
            <Button variant="blue" size="xl">
              Find a Job
            </Button>
          </Link>
          <Link to="/post-job">
            <Button size="xl" variant="destructive">
              Post a Job
            </Button>
          </Link>
        </div>

        {/* Crasuael */}
        <Carousel
          plugins={[
            emblaCarouselAutoplay({ delay: 2000, stopOnInteraction: true }),
          ]}
          className="w-full py-10 -z-10"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* banner */}
        <img src="/banner.jpeg" className="w-full"></img>

        {/* Crid Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>For Candidates</CardTitle>
            </CardHeader>
            <CardContent>
              Explore jobs, submit applications, and monitor your progress
              effortlessly.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Hiring Managers</CardTitle>
            </CardHeader>
            <CardContent>
              List opportunities, oversee applications, and find top-notch
              talent with ease.
            </CardContent>
          </Card>
        </section>

        {/* accordiand */}
        <Accordion type="multiple" collapsible>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </main>
    </>
  );
};

export default LandingPage;
