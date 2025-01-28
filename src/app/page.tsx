import { Button } from "@/components/ui";
import { Rocket, Shield, Zap, Users, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen  text-white">
      <main>
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-urple-400 text-transparent bg-clip-text">
            Launch Your Solana NFTs with Confidence
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            The most powerful and secure NFT launchpad for creators and
            collectors on Solana. Built for the future of digital assets.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href={"/token-create"}>
              <Button>
                Start Creating <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-900/20 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-2">$250M+</h3>
              <p className="text-gray-400">Total Trading Volume</p>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-gray-400">Projects Launched</p>
            </div>
            <div className="bg-blue-900/20 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-2">100K+</h3>
              <p className="text-gray-400">Active Users</p>
            </div>
          </div>
        </section>

        <section id="features" className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose MintCraft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Audited</h3>
              <p className="text-gray-400">
                Built with industry-leading security practices and fully audited
                smart contracts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-400">
                Leverage Solanas speed with instant mints and minimal gas fees
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community First</h3>
              <p className="text-gray-400">
                Built for creators and collectors with comprehensive tools and
                support
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Launch Your NFT Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the next generation of creators on Solana. Start building
              your NFT project today.
            </p>
            <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 text-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Rocket className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">MintCraft</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
