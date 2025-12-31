'use client';

import { Clock, FileSpreadsheet, XCircle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    { 
      icon: Clock, 
      text: "Chasing check-ins & updates wastes time",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    { 
      icon: FileSpreadsheet, 
      text: "Spreadsheets create errors and disputes",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    { 
      icon: XCircle, 
      text: "Employees don't want another tool",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The problems with traditional workforce management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manual processes create inefficiencies and frustration for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#22479b]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${problem.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className={`h-8 w-8 ${problem.color}`} />
              </div>
              <p className="text-lg font-semibold text-gray-800 leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-[#22479b] to-[#3a5fb8] rounded-3xl p-12 text-center text-white shadow-2xl shadow-[#22479b]/30">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
            <p className="text-3xl sm:text-4xl font-bold leading-tight max-w-4xl mx-auto">
              StaffiX solves this by working in the tools people already use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
