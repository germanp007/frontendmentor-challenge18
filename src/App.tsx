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
          <figure>
            <img
              src="../images/avatar-jessica.jpeg"
              alt="avatar"
              className="rounded-full w-[88px] h-[88px] mb-[27px] mt-10"
            />
          </figure>
          <h1 className="font-semibold text-2xl mb-[6px]">Jessica Randall</h1>
          <h2 className="font-medium text-sm text-Green mb-[24px]">
            London, United Kingdom
          </h2>
          <h3 className="font-extralight text-[14px] mb-[26px] tracking-wide">
            "Front-end developer and avid reader."
          </h3>
        </section>
        <section className="grid gap-4 place-items-center">
          {media.map((ele) => (
            <div
              className="bg-Grey w-[304px] h-[45px] flex justify-center items-center rounded-[.5rem] cursor-pointer hover:bg-Green hover:text-black transition ease-in-out duration-500"
              key={ele.id}
            >
              <p className="font-semibold ">{ele.name}</p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
};

export default App;
