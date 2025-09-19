import { websiteContent } from '../../../content/sections/website-content';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, FileText, Download, CheckCircle } from 'lucide-react';

export function SafetyPage() {
  const { safety } = websiteContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-black" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {safety.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {safety.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              {safety.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {safety.sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Resources & Downloads</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {safety.downloads.map((download, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="font-semibold mb-2">{download.name}</p>
                  <p className="text-sm text-gray-500 mb-4">{download.type}</p>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl">Compliance Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Our systems are designed to streamline compliance workflows, including UL 9540 ecosystems.
                We provide the documentation and support you need for permits and inspections.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pre-configured safety protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Inspection-ready documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>AHJ notification templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Ongoing compliance updates</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn about compliance
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Safety first, always
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get the training and support your team needs
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule training
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Download SOPs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}