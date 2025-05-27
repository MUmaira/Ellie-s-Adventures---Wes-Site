"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Menu,
  X,
  ChevronDown,
  Download,
  Mail,
  Linkedin,
  CheckCircle,
  Target,
  Lightbulb,
  Cog,
  Users,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function ElliesAdventuresResearch() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "project-scope", "milestones", "downloads", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "React Native", icon: "⚛️" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Firebase", icon: "🔥" },
    { name: "Keras", icon: "🤖" },
    { name: "MediaPipe", icon: "📹" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Docker", icon: "🐳" },
    { name: "Google Colab", icon: "📊" },
    { name: "GCP", icon: "☁️" },
    { name: "Digital Ocean", icon: "🌊" },
  ]

  const milestones = [
    { date: "February 2024", title: "Project Proposal", status: "completed" },
    { date: "March 2024", title: "Literature Review", status: "completed" },
    { date: "April 2024", title: "System Design", status: "completed" },
    { date: "May 2024", title: "Progress Presentation 1", status: "completed" },
    { date: "June 2024", title: "Development Phase 1", status: "completed" },
    { date: "July 2024", title: "Progress Presentation 2", status: "completed" },
    { date: "August 2024", title: "Development Phase 2", status: "completed" },
    { date: "September 2024", title: "Testing & Evaluation", status: "completed" },
    { date: "October 2024", title: "Final Presentation", status: "completed" },
    { date: "November 2024", title: "Final Report Submission", status: "completed" },
  ]

  const documents = [
    { category: "TAF", items: ["Project Proposal"] },
    {
      category: "Individual Proposals",
      items: ["M.M.Umaira - doc", "Mallawaaraachchi.T.D.R - doc", "Helapalla K.O.P.S - doc", "Jathurshan.M - doc"],
    },
    {
      category: "Presentations",
      items: ["Proposal Presentation", "Progress Presentation 1", "Progress Presentation 2", "Final Presentation"],
    },
    {
      category: "Final Reports",
      items: ["M.M.Umaira - doc", "Mallawaaraachchi.T.D.R - doc", "Helapalla K.O.P.S - doc", "Jathurshan.M - doc"],
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Kalpani Manathunga",
      role: "Supervisor",
      title: "Head of Computer Systems and Software Engineering",
      organization: "SLIIT",
      type: "supervisor",
    },
    {
      name: "Professor Samantha Thelijjagoda",
      role: "Co-supervisor",
      title: "Pro-vice chancellor Research and International",
      organization: "SLIIT",
      type: "supervisor",
    },
    {
      name: "Mr. Samitha Vidhanaarachchi",
      role: "External supervisor",
      title: "PHD researcher",
      organization: "Murdoch University",
      type: "supervisor",
    },
    {
      name: "Umaira M.M",
      role: "Undergraduate",
      title: "Software Engineering",
      organization: "SLIIT",
      type: "student",
    },
    {
      name: "Mallawaaraachchi.T.D.R",
      role: "Undergraduate",
      title: "Software Engineering",
      organization: "SLIIT",
      type: "student",
    },
    {
      name: "Helapalla K.O.P.S",
      role: "Undergraduate",
      title: "Software Engineering",
      organization: "SLIIT",
      type: "student",
    },
    {
      name: "Jathurshan.M",
      role: "Undergraduate",
      title: "Software Engineering",
      organization: "SLIIT",
      type: "student",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Ellie's Adventures</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "project-scope", label: "Project Scope" },
                { id: "milestones", label: "Milestones" },
                { id: "downloads", label: "Downloads" },
                { id: "about", label: "About Us" },
                { id: "contact", label: "Contact Us" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.id ? "text-purple-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              {[
                { id: "home", label: "Home" },
                { id: "project-scope", label: "Project Scope" },
                { id: "milestones", label: "Milestones" },
                { id: "downloads", label: "Downloads" },
                { id: "about", label: "About Us" },
                { id: "contact", label: "Contact Us" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium text-gray-600 hover:text-purple-600"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Ellie's Adventures
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                A Gamified Mobile Application for Children with Autism
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                Bridging the gap between home and therapy centers through AI-powered interactive activities that enhance
                speech, language, motor skills, and emotional development.
              </p>
            </div>

            <div className="relative mb-12">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Ellie's Adventures App Interface"
                  width={600}
                  height={300}
                  className="mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("project-scope")}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              Learn More
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Project Scope Section */}
      <section id="project-scope" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Project Scope</h2>

          {/* Introduction */}
          <Card className="mb-12 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Lightbulb className="mr-3 w-6 h-6 text-purple-500" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ellie's Adventures is a gamified mobile application aimed to address several areas of Autism. The
                application mainly addresses speech and language development, cognitive and verbal skill development,
                fine and gross motor skill development and emotion recognition and identification.
              </p>
            </CardContent>
          </Card>

          {/* Research Problem */}
          <Card className="mb-12 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-3 w-6 h-6 text-red-500" />
                Research Problem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                The main identified problem was the children not being able to travel to therapy centers daily and most
                parents not being aware of activities which are to be performed while being at home.
              </p>
            </CardContent>
          </Card>

          {/* Main Objective */}
          <Card className="mb-12 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <CheckCircle className="mr-3 w-6 h-6 text-green-500" />
                Main Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our main objective is to bridge the gap between home and therapy centers to make sure every child is
                getting the necessary learning activities while being at home. And enhancing the bond between the child
                and the parent by letting the child and the parent to perform activities together.
              </p>
              <ul className="space-y-3">
                {[
                  "Develop a set of activities to engage the child physically to improve fine and gross motor skills",
                  "Developing a flashcard based speech and pronunciation improvement activities",
                  "Engage the child in recognition and expression of different emotions",
                  "Developing a set of activities to enhance the verbal and cognitive skills of the child",
                ].map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Research Gaps */}
          <Card className="mb-12 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Target className="mr-3 w-6 h-6 text-orange-500" />
                Research Gaps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This research identified several critical gaps which have not been addressed by many existing
                applications.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Combined solution addressing different aspects",
                  "Use of AI as part of activities",
                  "Lip pattern analysis for pronunciation",
                  "Activities for colour pattern analysis",
                  "Emotion expression exercises",
                  "Lack of cognitive development exercises",
                ].map((gap, index) => (
                  <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{gap}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card className="mb-12 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Cog className="mr-3 w-6 h-6 text-blue-500" />
                Methodology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our research presents an AI-powered system designed to enhance speech, language, and motor skill
                development in children, particularly those with developmental delays. The system includes a mobile
                application and backend server integrated with deep learning models to provide real-time assessments and
                feedback.
              </p>

              <div className="grid md:grid-cols-1 gap-8">
                {/* Speech & Language Development */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-blue-800">1. Speech & Language Development</h4>
                  <p className="text-gray-700 mb-4">
                    The mobile app displays interactive flashcards prompting children to pronounce words. Both audio and
                    video are captured and processed using:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Whisper (by OpenAI) for speech transcription</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Wav2Vec2 for phoneme-level alignment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>LipCoordNet-based model for lip pattern analysis using 3D CNN and BiGRU</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    These outputs are compared using Levenshtein distance, and feedback is provided based on a 70%
                    accuracy threshold. Realistic images for flashcards are dynamically generated using the Flux model.
                  </p>
                </div>

                {/* Gross Motor Skill Evaluation */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-green-800">2. Gross Motor Skill Evaluation</h4>
                  <p className="text-gray-700 mb-4">
                    Children perform simple movements (e.g., hands-up, T-pose) recorded via the app. A MediaPipe-based
                    LSTM model analyzes key body landmarks to assess posture and movement quality using:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Angle heuristics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Threshold-based scoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Deviation from ideal joint angles</span>
                    </li>
                  </ul>
                </div>

                {/* Fine Motor Skill Evaluation */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-purple-800">3. Fine Motor Skill Evaluation</h4>
                  <p className="text-gray-700 mb-4">
                    Children replicate color patterns using AMI Montessori tablets and upload a photo. The system uses a
                    YOLO-based object detection model to assess:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Correct color matching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Horizontal spatial alignment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Pattern accuracy scoring</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
  <h4 className="text-xl font-semibold mb-4 text-purple-800">4. Cognitive and Verbal Skills Development</h4>
  <p className="text-gray-700 mb-4">
    Designed to enhance cognitive and verbal abilities in children with Autism Spectrum Disorder through interactive tasks and deep learning models:
  </p>
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <span>Letter formation practice using a convolutional neural network (CNN) to evaluate stroke shape and sequence</span>
    </li>
    <li className="flex items-start">
      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
      <span>Shape-based object construction game leveraging an image similarity deep learning model to assess accuracy of assembly</span>
    </li>
  </ul>
</div>


                
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                <p className="text-lg text-gray-700 font-medium text-center">
                  By combining deep learning with interactive gameplay, our system aims to create a fun, engaging, and
                  personalized therapy tool that supports children's developmental progress through real-time feedback
                  and guided practice.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technologies Used */}
          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Cog className="mr-3 w-6 h-6 text-indigo-500" />
                Technologies Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Milestones</h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-purple-300"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="ml-12 md:ml-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{milestone.title}</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{milestone.date}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Downloads</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Please find all documents related to this project below.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {documents.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Download className="mr-3 w-5 h-5 text-purple-500" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-gray-700">{item}</span>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Us</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Meet our team!</p>

          {/* Supervisors */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">Supervisors</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) => member.type === "supervisor")
                .map((member, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-16 h-16 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h4>
                      <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-gray-600 mb-1">{member.title}</p>
                      <p className="text-sm text-gray-500">{member.organization}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Students */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">Research Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers
                .filter((member) => member.type === "student")
                .map((member, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h4>
                      <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-gray-600 mb-1">{member.title}</p>
                      <p className="text-sm text-gray-500 mb-3">{member.organization}</p>
                      <div className="flex justify-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Have questions about our research or interested in collaboration? We'd love to hear from you. Send us a
                message and we'll respond as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">research@elliesadventures.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">+94 11 754 4801</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">SLIIT, Malabe, Sri Lanka</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Research Inquiry" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your inquiry..." rows={5} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <span className="text-xl font-bold">Ellie's Adventures</span>
              </div>
              <p className="text-gray-400">
                Empowering children with autism through innovative AI-powered therapy solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "Project Scope", "Milestones", "Downloads", "About Us", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>SLIIT, Malabe, Sri Lanka</p>
                <p>research@elliesadventures.com</p>
                <p>+94 11 754 4801</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ellie's Adventures Research Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
