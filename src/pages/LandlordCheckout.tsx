import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import { z } from "zod";

const landlordSchema = z.object({
  name: z.string().min(2, "Namnet måste vara minst 2 tecken"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().min(6, "Telefonnumret måste vara minst 6 siffror"),
  company: z.string().optional(),
  propertyCount: z.string().min(1, "Ange antal fastigheter"),
});

const LandlordCheckout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    propertyCount: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      landlordSchema.parse(formData);
      
      // Here you would typically send the data to your backend
      toast({
        title: "Registrering lyckades!",
        description: "Vi kontaktar dig snart med mer information.",
      });

      // Redirect to home page after successful submission
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Ett fel uppstod",
          description: error.errors[0].message,
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 px-4 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Registrera dig som Hyresvärd
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Namn *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ditt fullständiga namn"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-post *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="din.epost@exempel.se"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Telefon *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0701234567"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Företag (valfritt)
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Ditt företagsnamn"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="propertyCount" className="text-sm font-medium">
              Antal fastigheter *
            </label>
            <Input
              id="propertyCount"
              name="propertyCount"
              type="number"
              value={formData.propertyCount}
              onChange={handleChange}
              placeholder="1"
              min="1"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Slutför Registrering
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          * Obligatoriska fält
        </p>
      </div>
    </div>
  );
};

export default LandlordCheckout;