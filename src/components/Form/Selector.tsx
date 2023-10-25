import { useFormDispatch } from "@/app/page";
import { setShelter } from "@/state/reducers";
import React, { createRef, useEffect, useState } from "react";

export interface SelectorProps {
  label: string;
  required: boolean;
  value?: number;
}

export const Selector = (props: SelectorProps) => {
  const { label } = props;
  const dropButton = createRef<HTMLButtonElement>();
  const [shelterList, setShelterList] =
    useState<{ id: number; name: string }[]>();
  const dispatch = useFormDispatch();
  useEffect(() => {
    fetch("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters")
      .then(async (response) => {
        const data: any = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        let shelters: { id: number; name: string }[] = data.shelters;

        setShelterList(shelters);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        return error.toString();
      });
  }, []);
  return (
    <div className="flex flex-col items-start w-full py-2 px-8 bg-white rounded-md transition-all ease-in-out relative border-[0.5px] border-greyText">
      <label className="leading-[138%] text-black" htmlFor="button">
        {label}
      </label>
      <button
        ref={dropButton}
        className="absolute no repeat] w-4 py-2 px-3 border-none right-[1.5rem] top-[calc(50% - (3px))] z-2 cursor-pointer text-black"
      >
        {/* <svg
        fill="none"
          className="w-full h-full"
          viewBox="0 0 14 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#9F9F9F"
            d="M12.9393 1L7.30164 6L1.664 1"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg> */}
      </button>
      <select
        className="w-full font-medium leading-[138%] pt-[1rem] mt-[-1rem] border-none outline-none bg-[transparent] text-greyText appearance-none relative z-4 cursor-pointer"
        onMouseDown={() =>
          dropButton.current?.classList.add("transform-[rotate(180deg)]")
        }
        onMouseOut={() =>
          dropButton.current?.classList.remove("transform-[rotate(180deg)]")
        }
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(setShelter(Number(e.target.value)));
          dropButton.current?.classList.remove("transform-[rotate(180deg)]");
        }}
        onBlur={() =>
          dropButton.current?.classList.remove("transform-[rotate(180deg)]")
        }
        defaultValue={"Vyberte útulok zo zoznamu"}
      >
        <option hidden>{"Vyberte útulok zo zoznamu"}</option>
        {shelterList?.map((shelter: { id: number; name: string }) => {
          return (
            <option
              key={shelter.id}
              onChange={() => {
                dropButton.current?.classList.remove(
                  "transform-[rotate(180deg)]"
                );
              }}
              className="w-full font-medium leading-[131%] text-greyText"
              value={shelter.id}
            >
              {shelter.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
