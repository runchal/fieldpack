import { websiteContent } from '../../../content/sections/website-content';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Film, Calendar, Building, HardHat } from 'lucide-react';

const iconMap = {
  'film-tv': Film,
  'events': Calendar,
  'municipal': Building,
  'contractors': HardHat
};

export function UseCasesPage() {
  const { useCases } = websiteContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {useCases.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {useCases.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.industries.map((industry, index) => {
              const IconComponent = iconMap[industry.slug as keyof typeof iconMap] || Building;
              return (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-black rounded-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{industry.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">The Problem</h4>
                        <p className="text-gray-600">{industry.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">The Solution</h4>
                        <p className="text-gray-600">{industry.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {industry.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {industry.testimonial !== "[TBD]" && (
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                          {industry.testimonial}
                        </blockquote>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon: Real Field Results</CardTitle>
              <CardDescription>
                We're currently running pilots with select partners in Los Angeles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded p-6 text-center">
                <p className="text-gray-600 mb-4">
                  Case studies and metrics from our pilot programs will be available soon
                </p>
                <Button>Join our pilot program</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Book</h3>
                <p className="text-gray-600">Tell us when/where, estimated load, and runtime</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Deploy</h3>
                <p className="text-gray-600">Drop-off, quick safety check, plug and go</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Manage</h3>
                <p className="text-gray-600">Live SOC and alerts; metered billing; simple pickup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find your use case
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how Fieldpack fits your specific needs
          </p>
          <Button size="lg" variant="secondary">
            Talk to our team
          </Button>
        </div>
      </section>
    </div>
  );
}