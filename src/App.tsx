import Media from "./Media";
import Avatar from "./component/Avatar";
import Description from "./component/Description";

interface MediaProps {
  id: number;
  name: string;
}

const App = () => {
  const media: MediaProps[] = [
    {
      id: 1,
      name: "GitHub",
    },
    {
      id: 2,
      name: "Frontend Mentor",
    },
    {
      id: 3,
      name: "LinkedIn",
    },
    {
      id: 4,
      name: "Twitter",
    },
    {
      id: 5,
      name: "Instagram",
    },
  ];

  return (
    <main className="bg-OffBlack w-screen h-screen grid place-items-center text-White">
      <article className="bg-DarkGrey w-[90%] max-w-[385px] h-[100%] max-h-[612px] rounded-[0.8rem]">
        <section className="min-h-[45%] flex flex-col justify-center items-center">
          <Avatar />
          <Description />
        </section>
        <section className="grid gap-4 place-items-center">
          <Media media={media} />
        </section>
      </article>
    </main>
  );
};

export default App;
