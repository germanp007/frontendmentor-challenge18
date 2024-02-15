interface MediaProps {
  id: number;
  name: string;
}

interface MediaComponentProps {
  media: MediaProps[];
}

const Media = ({ media }: MediaComponentProps) => {
  return (
    <>
      {media.map((ele) => (
        <div
          className="bg-Grey w-[304px] h-[45px] flex justify-center items-center rounded-[.5rem] cursor-pointer hover:bg-Green hover:text-black transition ease-in-out duration-500"
          key={ele.id}
        >
          <p className="font-semibold ">{ele.name}</p>
        </div>
      ))}
    </>
  );
};

export default Media;
