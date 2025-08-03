"use client";

import { Button } from "@/ui/components/Button";
import { Queue } from "@/ui/components/Container";
import { FaGoogle as GoogleIcon } from "react-icons/fa";

export default function GoogleSignIn() {
  const handleGoogleSignIn = async () => {};

  return (
    <Button variant="outline" onClick={handleGoogleSignIn}>
      <Queue itemsCenter justifyBetween fullHeight gap={3}>
        <Queue as="span" center>
          <GoogleIcon />
        </Queue>
        <span>Sign in with Google</span>
      </Queue>
    </Button>
  );
}
