"use client";
import { FacebookProvider, Comments } from "react-facebook";

export default function Comment() {
  return (
    <>
      <div>
        <FacebookProvider appId="fb-root">
          <Comments
            href="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v19.0&appId=1078175146632889"
            nonce="bZp7PUI9"
          />
        </FacebookProvider>
      </div>
    </>
  );
}
