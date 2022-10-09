import Link from "next/link";
import Image from "next/image";

export const FeaturedArtists = ({ posts }: any) => (
  <>
    <div className="flex flex-col bg-gray-100 items-center">
      <div className="featured-section">
        <Link href="/artysci/" passHref>
          <a className="card w-84 h-80 2xl:h-96 min-w-full">
            <div>
              <div className="featured-artist-link">
                <h1>Nasi</h1>
                <h1>artyści</h1>
              </div>
            </div>
          </a>
        </Link>

        {posts.map((item: any) => (
          <div
            key={item.id}
            className="card shadow-xl image-full  h-80 2xl:h-96"
          >
            <figure className="card-image">
              <Image
                src={item.featuredImage.node.mediaItemUrl}
                layout="fill"
                objectFit="cover"
                alt="Artists thumbnail image"
              />
            </figure>
            <div className="card-body gap-1">
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
          </div>
        ))}
      </div>
    </div>
  </>
);
