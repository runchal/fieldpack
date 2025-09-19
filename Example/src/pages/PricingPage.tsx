import { websiteContent } from '../../../content/sections/website-content';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Check } from 'lucide-react';

export function PricingPage() {
  const { pricing } = websiteContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {pricing.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {pricing.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              {pricing.description}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-black shadow-xl' : 'border-gray-200'}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <p className="text-3xl font-bold">{plan.pricing}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlighted ? 'bg-black hover:bg-gray-800' : ''}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            {pricing.note}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {websiteContent.faq.slice(0, 3).map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-gray-900 to-black text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need a custom solution?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Let's build a package that fits your exact needs
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Volume Discounts</h3>
                  <p className="text-sm text-gray-400">Special rates for large fleets</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Custom Integrations</h3>
                  <p className="text-sm text-gray-400">Connect to your existing systems</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-sm text-gray-400">24/7 priority assistance</p>
                </div>
              </div>
              <Button size="lg" variant="secondary">
                Contact sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start with a pilot
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Try Fieldpack risk-free with our pilot program
          </p>
          <Button size="lg" variant="secondary">
            Join pilot program
          </Button>
        </div>
      </section>
    </div>
  );
}