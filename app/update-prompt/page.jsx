"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [submiting, setSubmiting] = useState(false);
  const [posts, setPosts] = useState({
    prompt: "",
    tag: "",
  });

  const promptId = searchParams.get("id");

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPosts({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();

    if (!promptId) return alert(`Prompt ID incorect.`);

    try {
      const response = await fetch(`api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt : posts.prompt,
          tag    : posts.tag,
        }),
      });

      if(response.ok) router.push('/');
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <Form
      type="Edit"
      posts={posts}
      setPosts={setPosts}
      submiting={submiting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
