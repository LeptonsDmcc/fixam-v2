"use client";

import { loginWithGoogleAction } from "@/actions/auth";
import HiddenInput from "@/app/components/Inputs/HiddenInput";
import { GoogleLogin } from "@react-oauth/google";
import { useSearchParams } from "next/navigation";

const GoogleAuthButton = () => {
  const searchParams = useSearchParams();
  const toValue = searchParams.get("to") || "";
  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          await loginWithGoogleAction.bind(null, {
            access_token: credentialResponse.credential,
            id_token: credentialResponse.credential,
            redirectTo: toValue,
          });
        }}
        onError={() => {}}
      />
    </div>
  );
};

export default GoogleAuthButton;
