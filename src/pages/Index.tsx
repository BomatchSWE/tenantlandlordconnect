import { ArrowRight, Home, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Card from "@/components/Card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Hitta Din Perfekta Match i Hyresboende
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Koppla samman med verifierade hyresgäster och pålitliga hyresvärdar. Gör hyresmatching enklare och mer tillförlitligt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Link
              to="/tenant-signup"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
            >
              Jag är Hyresgäst <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/landlord-signup"
              className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center justify-center"
            >
              Jag är Hyresvärd <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Varför Välja HyresMatch?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fadeIn">
              <div className="text-primary mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verifierade Profiler</h3>
              <p className="text-gray-600">
                Varje hyresgäst- och hyresvärdsprofil verifieras noggrant för din trygghet.
              </p>
            </Card>
            <Card className="animate-fadeIn [animation-delay:200ms]">
              <div className="text-primary mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Matchning</h3>
              <p className="text-gray-600">
                Vårt intelligenta system matchar hyresgäster med bostäder baserat på preferenser och krav.
              </p>
            </Card>
            <Card className="animate-fadeIn [animation-delay:400ms]">
              <div className="text-primary mb-4">
                <Home size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kvalitetsannonser</h3>
              <p className="text-gray-600">
                Få tillgång till högkvalitativa bostadsannonser från verifierade hyresvärdar i ditt önskade område.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Redo att Hitta Din Perfekta Match?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Gå med tusentals nöjda hyresgäster och hyresvärdar som har hittat sin perfekta match.
          </p>
          <Link
            to="/signup"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
          >
            Kom Igång Nu <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;