import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, MapPin, Shield, Users } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-white">Contact Us</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            For partnership inquiries, technology demonstrations, or security-cleared personnel opportunities. 
            All communications are encrypted and logged.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl text-white mb-2">Secure Contact Form</h3>
                  <p className="text-sm text-gray-400">All submissions are encrypted and reviewed within 24 hours</p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-gray-300">First Name *</label>
                      <Input 
                        placeholder="John" 
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-gray-300">Last Name *</label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-300">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="john@defense-contractor.gov" 
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-300">Organization/Agency</label>
                    <Input 
                      placeholder="DoD, Prime Contractor, etc." 
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-300">Security Clearance Level</label>
                    <Input 
                      placeholder="Secret, Top Secret, TS/SCI, etc." 
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-300">Message *</label>
                    <Textarea 
                      placeholder="Describe your operational requirements or partnership interest..."
                      rows={4}
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-500 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Submit Secure Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-950/50 border border-blue-800/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white">Secure Email</h3>
                  <p className="text-gray-400">partnerships@nexus-systems.com</p>
                  <p className="text-sm text-gray-500">PGP Key available upon request</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-950/50 border border-blue-800/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white">Headquarters</h3>
                  <p className="text-gray-400">
                    Palo Alto, CA 94301<br />
                    SCIF-enabled facility
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-950/50 border border-blue-800/30 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white">DC Operations</h3>
                  <p className="text-gray-400">
                    Arlington, VA 22201<br />
                    Pentagon liaison office
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <h3 className="text-white">Security Requirements</h3>
              </div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Active TS/SCI clearance preferred</li>
                <li>• Government or prime contractor personnel only</li>
                <li>• NDAs required for technical discussions</li>
                <li>• ITAR/EAR compliance mandatory</li>
              </ul>
            </div>

            <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="w-5 h-5 text-blue-400" />
                <h3 className="text-white">Partnership Opportunities</h3>
              </div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Prime contractor teaming agreements</li>
                <li>• Technology integration partnerships</li>
                <li>• SBIR/STTR collaboration</li>
                <li>• Strategic investor relations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}