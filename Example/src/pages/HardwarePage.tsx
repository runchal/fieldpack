import { websiteContent } from '../../../content/sections/website-content';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Battery, Shield, Zap, Lock } from 'lucide-react';

export function HardwarePage() {
  const { hardware } = websiteContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {hardware.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {hardware.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              {hardware.description}
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Request specs
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {hardware.products.map((product, index) => (
            <Card key={index} className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Specifications</h3>
                    <dl className="space-y-2">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b">
                          <dt className="text-gray-600 capitalize">{key.replace('_', ' ')}</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Zap className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Ideal for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.idealFor.map((use, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 mx-auto mb-4 text-black" />
            <h2 className="text-3xl font-bold">{hardware.safety.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardware.safety.features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-gray-700">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Image Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-200 rounded-lg p-16 text-center">
            <Battery className="h-24 w-24 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">[Product images coming soon]</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to go electric?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's build the right power solution for your field operations
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get a quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Download specs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}