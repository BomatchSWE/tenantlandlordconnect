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
            Find Your Perfect Match in Rental Housing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Connect with verified tenants and trusted landlords. Make rental matching simpler and more reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Link
              to="/tenant-signup"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
            >
              I'm a Tenant <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/landlord-signup"
              className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors inline-flex items-center justify-center"
            >
              I'm a Landlord <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose RentMatch?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fadeIn">
              <div className="text-primary mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">
                Every tenant and landlord profile is carefully verified for your peace of mind.
              </p>
            </Card>
            <Card className="animate-fadeIn [animation-delay:200ms]">
              <div className="text-primary mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                Our intelligent system matches tenants with properties based on preferences and requirements.
              </p>
            </Card>
            <Card className="animate-fadeIn [animation-delay:400ms]">
              <div className="text-primary mb-4">
                <Home size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Listings</h3>
              <p className="text-gray-600">
                Access high-quality property listings from verified landlords in your desired area.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy tenants and landlords who have found their perfect match.
          </p>
          <Link
            to="/signup"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
          >
            Get Started Now <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;