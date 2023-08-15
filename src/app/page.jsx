import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="text-center">
      <Image
        src="/seven.webp"
        className="mx-auto my-10 rounded"
        width={1000}
        height={800}
      />
      <Link
        className="my-5 text-blue-700 uppercase text-xl font-medium underline"
        href="/blogs"
      >
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          EXPLORE BLOGS
        </button>
      </Link>
    </div>
  );
};

export default Page;
