"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter()
  const { data: session } = useSession()


  const [submiting, setSubmiting] = useState(false);
  const [posts, setPosts] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {

    e.preventDefault();

    setSubmiting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: posts.prompt,
          userId: session?.user.id,
          tag: posts.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <Form
      type="Create"
      posts={posts}
      setPosts={setPosts}
      submiting={submiting}
      handleSubmit={createPrompt}
      setSubmiting={setSubmiting}
    />
  );
};

export default CreatePrompt;
