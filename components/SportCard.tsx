import Image from "next/image";

type Props = {
  collection: {
    pic: string; name: string; totalEvents: string; Sports: string;
  };
};

const Card = ({ collection }: Props) => {
  return (
    <div className="max-w-[237px] shadow-lg h-auto dark:bg-[#3B3E47] p-5 bg-[#FFFFFF] relative flex flex-col items-center text-black dark:text-white">
      <div className=" bg-black relative">
        <Image
          src={collection.pic}
          alt="pic"
          width={100}
          height={100}
          className="w-[217px] h-[385px] object-cover"
        />
      </div>

      <h1 className="text-lg font-medium text-center my-2">
        {collection.name}
      </h1>

      <div
        className="dark:bg-[#292B32] bg-[#F7F7F8] flex gap-4 p-2 rounded-md justify-between w-[217px]"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-[#525965] dark:text-[#DFDFDF]">Total Events</h2>
          <p className="font-medium">{collection.totalEvents}</p>
        </div>
        <div className="flex flex-col gap-2"> 
          <h2 className="text-[#525965] dark:text-[#DFDFDF]">Sports</h2>
          <p className="font-medium">{collection.Sports}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
