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
      <div className="">
        {data.posts.nodes.map((item: any) => (
          <div
            key={item.id}
            className="card w-96 bg-base-100 shadow-xl image-full"
          >
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
              <p className="">{item.excerpt}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
