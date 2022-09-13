import {
  SiApplemusic,
  SiSpotify,
  SiFacebook,
  SiYoutube,
  SiTidal,
} from "react-icons/si";

export default function SocialLinks({ post }: any) {
  return (
    <>
      <div className="flex gap-2">
        {post.postFacebook ? (
          <a href={post.postFacebook} target="_blank" rel="noopener noreferrer">
            <SiFacebook target="_blank" className="detail-social-links" />
          </a>
        ) : null}
        {post.postSpotify ? (
          <a href={post.postSpotify} target="_blank" rel="noopener noreferrer">
            <SiSpotify target="_blank" className="detail-social-links" />
          </a>
        ) : null}
        {post.postYoutube ? (
          <a href={post.postYoutube} target="_blank" rel="noopener noreferrer">
            <SiYoutube target="_blank" className="detail-social-links" />
          </a>
        ) : null}
        {post.postAppleMusic ? (
          <a
            href={post.postAppleMusic}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiApplemusic target="_blank" className="detail-social-links" />
          </a>
        ) : null}
        {post.postTidal ? (
          <a href={post.postTidal} target="_blank" rel="noopener noreferrer">
            <SiTidal target="_blank" className="detail-social-links" />
          </a>
        ) : null}
      </div>
    </>
  );
}
