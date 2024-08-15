"use client";
import SpotlingCard from "@/components/SpotlightCard";
import { api } from "@/http/api";
import useSWR from "swr";
import CategoriesCard from "@/components/CategoriesCard";

export default function Home() {
  const { data: spotlightCollectionCard } = useSWR(
    api.spotlightCollectionCard,
    { suspense: true }
  );
  const { data } = useSWR(api.categoriesLikeCard, { suspense: true });
  return (
    <main>
      <section className="container mx-auto w-[1441px] flex flex-wrap mt-14 gap-3">
        {spotlightCollectionCard &&
          spotlightCollectionCard.map((el: any, index: number) => (
            <SpotlingCard
              key={index}
              title={el.title}
              price={el.price}
              image={el.image}
            />
          ))}
      </section>
      <section className="container mx-auto w-[1441px] flex flex-wrap mt-14 gap-7">
        {data &&
          data.map((el: any, index: number) => (
            <CategoriesCard key={index} title={el.title} image={el.image} />
          ))}
      </section>
    </main>
  );
}
