import Link from "next/link";
import Image from "next/image";

export default function Featured({ posts }: any) {
  return (
    <>
      <div className="flex flex-col bg-gray-100 items-center pt-12">
        <h1 className="text-black text-5xl font-bold pt-12">Nasi artyści</h1>
        <div className="grid grid-flow-row xl:grid-cols-3 justify-items-center xl:grid-flow-cols gap-10 xl:gap-20 pt-10">
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
                <h2 className="text-gray-100 card-title">{item.title}</h2>
                <div
                  className="text-gray-200"
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt ?? {},
                  }}
                />
                <div className="card-actions justify-end">
                  <button className="main-card-btn">więcej</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
