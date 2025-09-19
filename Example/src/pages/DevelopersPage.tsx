import { websiteContent } from '../../../content/sections/website-content';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Code, Terminal, Webhook, Database } from 'lucide-react';

export function DevelopersPage() {
  const { developers } = websiteContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Code className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              {developers.title}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {developers.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              {developers.description}
            </p>
            <Button size="lg" variant="secondary">
              {developers.cta.text}
            </Button>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{developers.sections.authentication.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{developers.sections.authentication.content}</p>
              <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
                <div className="text-green-400"># Example request</div>
                <div>curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="ml-4">https://api.fieldpack.io/v1/assets</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Endpoints Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {developers.sections.endpoints.title}
          </h2>
          <div className="space-y-4">
            {developers.sections.endpoints.items.map((endpoint, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded text-sm font-semibold
                        ${endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3">{endpoint.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Webhooks */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Webhook className="h-6 w-6" />
                  <CardTitle>{developers.sections.webhooks.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Subscribe to real-time events and build reactive integrations
                </p>
                <ul className="space-y-2">
                  {developers.sections.webhooks.items.map((event, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">•</span>
                      <code className="text-sm">{event}</code>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Data Export */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6" />
                  <CardTitle>{developers.sections.dataExport.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {developers.sections.dataExport.content}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">Bulk CSV exports</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">Custom date ranges</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">Metric filtering</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Start</h2>
          <Card>
            <CardHeader>
              <CardTitle>Example: Get Asset Telemetry</CardTitle>
              <CardDescription>Fetch the latest telemetry data for a specific asset</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-2">
                <div className="text-green-400"># Get telemetry for asset</div>
                <div>curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="ml-4">"https://api.fieldpack.io/v1/assets/ABC123/telemetry?from=2024-01-01&to=2024-01-31"</div>
                <div className="mt-4 text-green-400"># Response</div>
                <div>{`{`}</div>
                <div className="ml-4">"asset_id": "ABC123",</div>
                <div className="ml-4">"data": [</div>
                <div className="ml-8">{`{`}</div>
                <div className="ml-12">"timestamp": "2024-01-15T10:30:00Z",</div>
                <div className="ml-12">"soc": 85,</div>
                <div className="ml-12">"voltage": 120.5,</div>
                <div className="ml-12">"current": 15.2,</div>
                <div className="ml-12">"temperature": 22.3</div>
                <div className="ml-8">{`}`}</div>
                <div className="ml-4">]</div>
                <div>{`}`}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to integrate?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get your API keys and start building today
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get API access
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              View full docs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}