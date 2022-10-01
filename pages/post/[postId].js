import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { BASE_URL, postService } from "../../services/post";

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;

  const [postDetail, setPostDetail] = useState();

  useEffect(() => {
    postService
      .getPostDetail(postId)
      .then((res) => {
        console.log(res.data.post);
        setPostDetail(res.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    !!postDetail && (
      <>
        <MainLayout>
          <div className="container mx-auto">
            <h2 className="font-bold text-xl my-5">{postDetail.title}</h2>
            <p>Created at: {postDetail.createdAt}</p>
            <p>Creator: {postDetail.creator.name}</p>
            <div className="mx-auto w-1/3 h-96 relative">
              <Image
                loader={() => `${BASE_URL}/${postDetail.imageUrl}`}
                src={`${BASE_URL}/${postDetail.imageUrl}`}
                alt={postDetail.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <p>{postDetail.content}</p>
          </div>
        </MainLayout>
      </>
    )
  );
};

export default Post;
