import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Apple, Facebook, Mail } from "lucide-react";

const TenantLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (provider: 'google' | 'facebook' | 'apple') => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });

      if (error) {
        toast.error("Ett fel uppstod vid inloggning");
      }
    } catch (error) {
      toast.error("Ett fel uppstod vid inloggning");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Logga in som Hyresgäst</h2>
          <p className="text-muted-foreground mt-2">
            Välj hur du vill logga in nedan
          </p>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSocialLogin('google')}
            disabled={isLoading}
          >
            <Mail className="mr-2 h-4 w-4" />
            Fortsätt med Google
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSocialLogin('facebook')}
            disabled={isLoading}
          >
            <Facebook className="mr-2 h-4 w-4" />
            Fortsätt med Facebook
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleSocialLogin('apple')}
            disabled={isLoading}
          >
            <Apple className="mr-2 h-4 w-4" />
            Fortsätt med Apple
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Genom att fortsätta godkänner du våra{" "}
          <a href="/terms" className="underline hover:text-primary">
            användarvillkor
          </a>{" "}
          och{" "}
          <a href="/privacy" className="underline hover:text-primary">
            integritetspolicy
          </a>
        </p>
      </div>
    </div>
  );
};

export default TenantLogin;