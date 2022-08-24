import Link from "next/link";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";

const queryArtistCard = gql`
  query Posts (limit: 2){
    posts(where: { categoryName: "Artyści" }) {
      nodes {
        title
      }
    }
  }
`;

export const Featured = () => (
  <>
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </>
);
