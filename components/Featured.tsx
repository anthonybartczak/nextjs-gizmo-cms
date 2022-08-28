import Link from "next/link";
import Image from "next/image";

export default function Featured({ posts }: any) {
  return (
    <>
      <div className="flex flex-col bg-gray-100 items-center xl:pt-12 2xl:pt-24 px-4">
        <h1 className="text-black text-5xl font-bold pt-12">
          Nasi promowani artyści
        </h1>
        <div className="featured-section">
          {posts.map((item: any) => (
            <div key={item.id} className="card w-96 shadow-xl image-full">
              <figure>
                <Image
                  src={item.featuredImage.node.mediaItemUrl}
                  width={400}
                  height={400}
                  alt="Artists thumbnail image"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-gray-300 card-title">{item.title}</h2>
                <div
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt ?? {},
                  }}
                />
                <div className="card-actions justify-end absolute bottom-8 right-4">
                  <Link href="/" passHref>
                    <button className="main-card-btn">więcej</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
