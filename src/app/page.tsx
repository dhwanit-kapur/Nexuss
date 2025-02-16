"use client";

import { useEffect } from "react";
import { useCurrent } from "./features/auth/api/useCurrent";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLogout } from "./features/auth/api/useLogout";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();

  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  return (
    <div>
      <h2>Only visible to authorised users</h2>
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
}
