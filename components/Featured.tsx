import Link from "next/link";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";

const queryArtistCard = gql`
  query Posts {
    posts(where: { categoryName: "Artyści" }, first: 3) {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const Featured = () => {
  const { data, loading, error } = useQuery(queryArtistCard);
  console.log(data);

  if (loading) return null;

  return (
    <>
      <div className="flex flex-col bg-gray-100 items-center pt-12">
        <h1 className="text-5xl font-bold pt-12">Nasi artyści</h1>
        <div className="grid grid-flow-row xl:grid-cols-3 justify-items-center xl:grid-flow-cols gap-10 xl:gap-20  pt-10">
          {data.posts.nodes.map((item: any) => (
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
                <h2 className="card-title">{item.title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt ?? {},
                  }}
                />
                <div className="card-actions justify-end">
                  <button className="main-card-btn">więcej...</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
