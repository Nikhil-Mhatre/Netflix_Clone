import { FAQITEMS } from "@/libs/constant";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Faq = () => {
    return (
      <section className="flex flex-col items-center justify-center gap-12 bg-black
        p-6 text-white">
         <h1 className="text-2xl font-bold lg:text-5xl">
            Frequently Asked Questions
        </h1>
        <div className="h-full w-full lg:w-6/12">
              {FAQITEMS.map(({ quest, answer, id }) => (
                <Accordion key={id} type="single" collapsible className="px-12">
                  <AccordionItem
                    value={`item-${id}`}
                    className="border-b-8 border-b-black
                    bg-gray-800 px-12 transition ease-in-out hover:bg-gray-600"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      {quest}
                    </AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
        </section>
    );
  };

  export default Faq

  