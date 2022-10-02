import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import SpinnerComponent from "../../components/Loading";
import { useLoadingContext } from "../../context/loading";
import { BASE_URL, postService } from "../../services/post";

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;

  const [loading, setLoading] = useLoadingContext();

  const [postDetail, setPostDetail] = useState();

  useEffect(() => {
    setLoading(true);
    postService
      .getPostDetail(postId)
      .then((res) => {
        console.log(res.data.post);
        setPostDetail(res.data.post);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [postId]);

  return (
    !!postDetail && (
      <>
        <MainLayout>
          <div className="container mx-auto my-10">
            <h2 className="font-bold text-2xl my-5">{postDetail.title}</h2>
            <p>Created at: {postDetail.createdAt}</p>
            <p>Creator: {postDetail.creator.name}</p>
            <div className="mx-auto w-2/3 h-auto">
              {/* <Image
                loader={() => `${BASE_URL}/${postDetail.imageUrl}`}
                src={`${BASE_URL}/${postDetail.imageUrl}`}
                alt={postDetail.title}
                layout="fill"
                objectFit="cover"
                priority
              /> */}
              <img className="rounded-lg my-5"
                src={`${BASE_URL}/${postDetail.imageUrl}`}
                alt={postDetail.title}
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
