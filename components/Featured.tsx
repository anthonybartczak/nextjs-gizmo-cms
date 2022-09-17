import Link from "next/link";
import Image from "next/image";

export const Featured = ({ posts }: any) => (
  <>
    <div className="flex flex-col bg-gray-100 items-center xl:pt-12 2xl:pt-24">
      <h2 className="text-black text-4xl font-bold pt-12">Nasi artyści...</h2>
      <ul className="featured-section">
        {posts.map((item: any) => (
          <li
            key={item.id}
            className="card w-96 shadow-xl image-full xl:mx-auto "
          >
            <figure>
              <Image
                src={item.featuredImage.node.mediaItemUrl}
                width={400}
                height={400}
                alt="Artists thumbnail image"
              />
            </figure>
            <div className="card-body gap-0.5">
              <h2 className="text-gray-100 card-title">{item.title}</h2>
              <div className="divider before:bg-rose-600 after:bg-rose-600 my-0.5 h-3"></div>
              <div
                className="text-gray-200 text-sm text-justify"
                dangerouslySetInnerHTML={{
                  __html: item.excerpt ?? {},
                }}
              />
              <div className="card-actions justify-end absolute bottom-8 right-4">
                <Link href={"/artysci/" + item.slug} passHref>
                  <button className="featured-card-btn">więcej</button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
);
