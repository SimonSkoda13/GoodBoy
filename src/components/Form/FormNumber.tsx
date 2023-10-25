import { useFormSelector } from "@/app/page";

export const FormNumber = () => {
  const number = useFormSelector((state) => state.form.formNumber);
  let boxes: any[] = [];

  for (let i = 1; i < 4; i++) {
    boxes.push(
      <div
        key={"formNumberBox" + i}
        className={
          number === i
            ? "w-[60px] h-2 mx-1 rounded-md bg-gradient-to-r from-primary-900 to-primary-800"
            : "w-[40px] h-2 mx-1 rounded-md bg-greyText opacity-[0.36]"
        }
      ></div>
    );
  }
  return (
    <div className="flex flex-row content-center w-max mb-7 md:mb-11 p-0">
      {boxes}
    </div>
  );
};
