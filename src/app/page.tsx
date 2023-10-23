"use client";

import {
  useSelector,
  useDispatch,
  Provider,
  TypedUseSelectorHook,
} from "react-redux";
import Image from "next/image";
import { AppDispatch, RootState, store } from "@/state/store";
import { Form } from "@/components/Form/Form";
import { ServicesProvider } from "./components/ServicesProvider";

export const useFormDispatch = () => useDispatch<AppDispatch>();
export const useFormSelector: TypedUseSelectorHook<RootState> = useSelector;

const Home: React.FC = () => {
  return (
    <ServicesProvider>
      <section className="relative grid grid-cols-2 w-full md:grid-cols-3 gap-6  py-9 md:py-20">
        <Form />
        <div className="col-span-1 relative w-full h-[80vh]">
          <Image
            src="/dog.png"
            alt="Dog photo"
            fill
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </section>
    </ServicesProvider>
  );
};

export default Home;
