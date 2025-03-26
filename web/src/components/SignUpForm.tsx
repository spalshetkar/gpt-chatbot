"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../lib/supabaseClient";

export default function SignUpForm() {
  return (
    <div className="space-y-4 py-2 pb-4">
      <Auth
        supabaseClient={supabase}
        view="sign_up"
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#2563eb",
                brandAccent: "#1d4ed8",
              },
            },
          },
        }}
        localization={{
          variables: {
            sign_up: {
              social_provider_text: "Sign up with Google",
            },
          },
        }}
        providers={["google"]}
        onlyThirdPartyProviders={false}
        redirectTo={`${window.location.origin}/app/`}
        additionalData={{
          full_name: "",
        }}
      />
    </div>
  );
}
