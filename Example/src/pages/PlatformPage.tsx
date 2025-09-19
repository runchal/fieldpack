import { websiteContent } from '../../../content/sections/website-content';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Activity, Code, CreditCard, LayoutDashboard } from 'lucide-react';

const iconMap = {
  dashboard: LayoutDashboard,
  activity: Activity,
  'credit-card': CreditCard,
  code: Code
};

export function PlatformPage() {
  const { platform } = websiteContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {platform.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {platform.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              {platform.description}
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Get a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {platform.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Code;
              return (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-black rounded-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{feature.name}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshot Section (Placeholder) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">See it in action</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-500">[Platform screenshot placeholder]</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold">Real-time monitoring</p>
                <p className="text-sm text-gray-600">Track every asset live</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold">Automated billing</p>
                <p className="text-sm text-gray-600">Metered usage tracking</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold">Smart alerts</p>
                <p className="text-sm text-gray-600">Never miss an issue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to modernize your field operations?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            See how Fieldpack can transform your mobile power management
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              View API docs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}