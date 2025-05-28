"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ElliesAdventuresResearch() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "project-scope",
        "milestones",
        "downloads",
        "about",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technologies = [
    { name: "Python", logo: "/assets/python.png" },
    { name: "React Native", logo: "/assets/reactNative.png" },
    { name: "TensorFlow", logo: "/assets/tensorflow.png" },
    { name: "PyTorch", logo: "/assets/pytorch.png" },
    { name: "Firebase", logo: "/assets/firebase.png" },
    { name: "Keras", logo: "/assets/keras.png" },
    { name: "MediaPipe", logo: "/assets/mediaPipe.png" },
    { name: "FastAPI", logo: "/assets/fastApi.png" },
    { name: "Docker", logo: "/assets/docker.png" },
    { name: "Google Colab", logo: "/assets/colab.png" },
    { name: "GCP", logo: "/assets/gcp.png" },
  ];

  const milestones = [
    { date: "August 2024", title: "Project Proposal", status: "completed" },
    {
      date: "December 2024",
      title: "Progress Presentation 1",
      status: "completed",
    },
    {
      date: "March 2025",
      title: "Progress Presentation 2",
      status: "completed",
    },
    { date: "April 2025", title: "Research Paper", status: "completed" },
    {
      date: "April 2025",
      title: "Final Report Submission",
      status: "completed",
    },
    { date: "May 2025", title: "Final Presentation", status: "completed" },
  ];

  const documents = [
    {
      category: "TAF",
      items: [
        {
          name: "Topic Assessment Form",
          file: "/documents/taf.pdf",
        },
      ],
    },
    {
      category: "Individual Proposals",
      items: [
        {
          name: "M.M.Umaira",
          file: "/documents/umaira-proposal.pdf",
        },
        {
          name: "Mallawaaraachchi.T.D.R",
          file: "/documents/thejani-proposal.pdf",
        },
        {
          name: "Helapalla K.O.P.S",
          file: "/documents/pawan-proposal.pdf",
        },
        {
          name: "Jathurshan.M",
          file: "/documents/shan-proposal.pdf",
        },
      ],
    },
    {
      category: "Presentations",
      items: [
        {
          name: "Proposal Presentation",
          file: "/documents/proposal-presentation.pdf",
        },
        {
          name: "Progress Presentation 1",
          file: "/documents/progress-presentation-1.pdf",
        },
        {
          name: "Progress Presentation 2",
          file: "/documents/progress-presentation-2.pdf",
        },
      ],
    },
    // {
    //   category: "Final Reports",
    //   items: [
    //     {
    //       name: "M.M.Umaira - doc",
    //       file: "/documents/reports/umaira-final-report.pdf",
    //     },
    //     {
    //       name: "Mallawaaraachchi.T.D.R - doc",
    //       file: "/documents/reports/mallawaaraachchi-final-report.pdf",
    //     },
    //     {
    //       name: "Helapalla K.O.P.S - doc",
    //       file: "/documents/reports/helapalla-final-report.pdf",
    //     },
    //     {
    //       name: "Jathurshan.M - doc",
    //       file: "/documents/reports/jathurshan-final-report.pdf",
    //     },
    //   ],
    // },
  ];
  const teamMembers = [
    {
      name: "Dr. Kalpani Manathunga",
      role: "Supervisor",
      title: "Department Head - Computer Science and Software Engineering",
      organization: "SLIIT",
      type: "supervisor",
      photo: "/team/kalpani.jpg",
      linkedin: "https://www.linkedin.com/in/kalpani-manathunga-0046ba91/",
      email: "kalpani.m@sliit.lk",
    },
    {
      name: "Professor Samantha Thelijjagoda",
      role: "Co-supervisor",
      title: "Pro-Vice-Chancellor Research and International",
      organization: "SLIIT",
      type: "supervisor",
      photo: "/team/smantha.jpg",
      linkedin: "https://www.linkedin.com/in/samantha-thelijjagoda-84342037/",
      email: "samantha.t@sliit.lk",
    },
    {
      name: "Mr. Samitha Vidhanaarachchi",
      role: "External supervisor",
      title: "PHD researcher",
      organization: "Murdoch University",
      type: "supervisor",
      photo: "/team/samitha.jpg",
      linkedin: "https://www.linkedin.com/in/samitha-vidhana-arachchi/",
      email: "samithapva@gmail.com",
    },
    {
      name: "Umaira M.M",
      role: "Undergraduate",
      title: "Software Engineering",
      organization: "SLIIT",
      type: "student",
      photo: "/team/umaira.png",
      linkedin: "https://www.linkedin.com/in/umairam/",
      email: "mumaira0625@gmail.com",
    },
    {
      name: "Mallawaaraachchi.T.D.R",
      role: "Undergraduate",
      title: "Software Engineering",
      organization: "SLIIT",
      type: "student",
      photo: "/team/thejani.jpg",
      linkedin: "https://www.linkedin.com/in/thejani-mallawaarachchi/",
      email: "thejani.mallawaarachchi@gmail.com",
    },
    {
      name: "Helapalla K.O.P.S",
      role: "Undergraduate",
      title: "Software Engineering",
      organization: "SLIIT",
      type: "student",
      photo: "/team/pawan.jpg",
      linkedin: "https://www.linkedin.com/in/pawan-senpura/",
      email: "pawan.senpura@gmail.com",
    },
    {
      name: "Jathurshan.M",
      role: "Undergraduate",
      title: "Software Engineering",
      organization: "SLIIT",
      type: "student",
      photo: "/team/shan.jpg",
      linkedin: "https://www.linkedin.com/in/shanjathurshan/",
      email: "jathurshanm3@gmail.com",
    },
  ];

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <span className="text-xl font-bold text-gray-800">
                Ellie's Adventures
              </span>
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
                    activeSection === item.id
                      ? "text-purple-600"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
      <section
        id="home"
        className="relative pt-20 pb-16 px-4 min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/heroBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                Ellie's Adventures
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                A Gamified Mobile Application for Children with Autism
              </p>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-12 drop-shadow-md">
                Bridging the gap between home and therapy centers through
                AI-powered interactive activities that enhance speech, language,
                motor skills, and emotional development.
              </p>
            </div>

            <Button
              onClick={() => scrollToSection("project-scope")}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Project Scope
          </h2>

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
                Ellie's Adventures is a gamified mobile application aimed to
                address several areas of Autism. The application mainly
                addresses speech and language development, cognitive and verbal
                skill development, fine and gross motor skill development and
                emotion recognition and identification.
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
                The main identified problem was the children not being able to
                travel to therapy centers daily and most parents not being aware
                of activities which are to be performed while being at home.
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
                Our main objective is to bridge the gap between home and therapy
                centers to make sure every child is getting the necessary
                learning activities while being at home. And enhancing the bond
                between the child and the parent by letting the child and the
                parent to perform activities together.
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
                This research identified several critical gaps which have not
                been addressed by many existing applications.
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
                  <div
                    key={index}
                    className="flex items-center p-3 bg-orange-50 rounded-lg"
                  >
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
                Our research presents an AI-powered system designed to enhance
                speech, language, and motor skill development in children,
                particularly those with developmental delays. The system
                includes a mobile application and backend server integrated with
                deep learning models to provide real-time assessments and
                feedback.
              </p>

              <div className="grid md:grid-cols-1 gap-8">
                {/* Speech & Language Development */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-blue-800">
                    1. Speech & Language Development
                  </h4>
                  <p className="text-gray-700 mb-4">
                    The mobile app displays interactive flashcards prompting
                    children to pronounce words. Both audio and video are
                    captured and processed using:
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
                      <span>
                        LipCoordNet-based model for lip pattern analysis using
                        3D CNN and BiGRU
                      </span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    These outputs are compared using Levenshtein distance, and
                    feedback is provided based on a 70% accuracy threshold.
                    Realistic images for flashcards are dynamically generated
                    using the Flux model.
                  </p>
                </div>

                {/* Gross Motor Skill Evaluation */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-green-800">
                    2. Gross Motor Skill Evaluation
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Children perform simple movements (e.g., hands-up, T-pose)
                    recorded via the app. A MediaPipe-based LSTM model analyzes
                    key body landmarks to assess posture and movement quality
                    using:
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
                  <h4 className="text-xl font-semibold mb-4 text-purple-800">
                    3. Fine Motor Skill Evaluation
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Children replicate color patterns using AMI Montessori
                    tablets and upload a photo. The system uses a YOLO-based
                    object detection model to assess:
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

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-orange-800">
                    4. Cognitive and Verbal Skills Development
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Designed to enhance cognitive and verbal abilities in
                    children with Autism Spectrum Disorder through interactive
                    tasks and deep learning models:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Letter formation practice using a convolutional neural
                        network (CNN) to evaluate stroke shape and sequence
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Shape-based object construction game leveraging an image
                        similarity deep learning model to assess accuracy of
                        assembly
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-pink-800">
                    5. Emotion Skills Development
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Aimed at helping children with Autism Spectrum Disorder
                    express and recognize emotions across varied social
                    contexts. The system integrates deep learning and behavioral
                    tracking to support emotional development:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Facial emotion recognition using a ResNet50-based model
                        trained on DISFA+ and FER datasets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Real-time attention tracking to ensure engagement during
                        emotion recognition and expression tasks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Progress monitoring with personalized feedback and
                        rewards to reinforce emotional learning outcomes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                <p className="text-lg text-gray-700 font-medium text-center">
                  By combining deep learning with interactive gameplay, our
                  system aims to create a fun, engaging, and personalized
                  therapy tool that supports children's developmental progress
                  through real-time feedback and guided practice.
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
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors hover:shadow-md"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={`${tech.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">
                      {tech.name}
                    </span>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Milestones
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-purple-300"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card className="ml-12 md:ml-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {milestone.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Downloads
          </h2>
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
                        <span className="text-gray-700">{item.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownload(item.file, item.name)}
                          className="hover:bg-purple-100"
                        >
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            About Us
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Meet our team!
          </p>

          {/* Supervisors */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">
              Supervisors
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers
                .filter((member) => member.type === "supervisor")
                .map((member, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto mb-4 relative">
                        <Image
                          src={
                            member.photo ||
                            "/placeholder.svg?height=128&width=128"
                          }
                          alt={`${member.name} photo`}
                          width={128}
                          height={128}
                          className="rounded-full object-cover w-full h-full border-4 border-purple-200"
                          onError={(e) => {
                            console.log(
                              `Failed to load photo: ${member.photo}`
                            );
                            e.currentTarget.src =
                              "/placeholder.svg?height=128&width=128";
                          }}
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {member.name}
                      </h4>
                      <p className="text-purple-600 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        {member.title}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {member.organization}
                      </p>
                      <div className="flex justify-center space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`mailto:${member.email}`}>
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Students */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">
              Research Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers
                .filter((member) => member.type === "student")
                .map((member, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <Image
                          src={
                            member.photo ||
                            "/placeholder.svg?height=96&width=96"
                          }
                          alt={`${member.name} photo`}
                          width={96}
                          height={96}
                          className="rounded-full object-cover w-full h-full border-4 border-blue-200"
                          onError={(e) => {
                            console.log(
                              `Failed to load photo: ${member.photo}`
                            );
                            e.currentTarget.src =
                              "/placeholder.svg?height=96&width=96";
                          }}
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {member.name}
                      </h4>
                      <p className="text-blue-600 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        {member.title}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {member.organization}
                      </p>
                      <div className="flex justify-center space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`mailto:${member.email}`}>
                            <Mail className="w-4 h-4" />
                          </a>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Have questions about our research or interested in
                collaboration? We'd love to hear from you. Send us a message and
                we'll respond as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">
                    research@elliesadventures.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">+94 11 754 4801</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">
                    SLIIT, Malabe, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
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
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Research Inquiry" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                    />
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
                Empowering children with autism through innovative AI-powered
                therapy solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  "Home",
                  "Project Scope",
                  "Milestones",
                  "Downloads",
                  "About Us",
                  "Contact",
                ].map((link) => (
                  <button
                    key={link}
                    onClick={() =>
                      scrollToSection(link.toLowerCase().replace(" ", "-"))
                    }
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
            <p>
              &copy; {new Date().getFullYear()} Ellie's Adventures Research
              Team. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
