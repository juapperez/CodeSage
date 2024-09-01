'use client'

import { Github, Code, Zap, CheckCircle, MoreHorizontal, Cloud, Database, FileCode, GitBranch } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function CodeSageLandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              CodeSage
            </span>
          </h1>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-gray-800 hover:text-white">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
            CodeSage
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">AI-Powered Code Review Assistant</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6 mb-12 text-sm">
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span>Multi-Language Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>Real-time Analysis</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span>Best Practices</span>
          </div>
          <div className="flex items-center space-x-2">
            <MoreHorizontal className="h-5 w-5" />
            <span>Customizable Rules</span>
          </div>
          <div className="flex items-center space-x-2">
            <Cloud className="h-5 w-5" />
            <span>Cloud Integration</span>
          </div>
          <div className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>Performance Insights</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileCode className="h-5 w-5" />
            <span>Inline Suggestions</span>
          </div>
          <div className="flex items-center space-x-2">
            <GitBranch className="h-5 w-5" />
            <span>Version Control</span>
          </div>
        </div>

        <p className="max-w-2xl mb-8 text-gray-300 text-sm leading-relaxed">
          CodeSage is an advanced AI-powered code review assistant that helps developers write better, cleaner, and more efficient code. By leveraging machine learning and static analysis techniques, CodeSage provides intelligent suggestions and identifies potential issues before they make it into production.
        </p>

        <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg mb-12 max-w-2xl">
          <p className="flex items-start text-sm">
            <span className="text-green-400 mr-2">✓</span>
            <span>
              With CodeSage, your team will receive <strong className="text-green-400 font-normal">continuous</strong> and <strong className="text-green-400 font-normal">automated</strong> code reviews. 
              Your codebase will always be <strong className="text-green-400 font-normal">optimized</strong> and <strong className="text-green-400 font-normal">maintainable</strong>.
            </span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex justify-center lg:px-8">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  )
}