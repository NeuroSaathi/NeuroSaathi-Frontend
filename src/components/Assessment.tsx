import React, { useState } from 'react';
import { ClipboardList, CheckCircle, AlertTriangle, Info, BarChart3 } from 'lucide-react';

const Assessment: React.FC = () => {
  const [activeAssessment, setActiveAssessment] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const assessments = [
    {
      id: 'phq9',
      name: 'PHQ-9 Depression Screening',
      description: 'A 9-question tool that screens for depression symptoms',
      duration: '3-5 minutes',
      questions: [
        'Little interest or pleasure in doing things',
        'Feeling down, depressed, or hopeless',
        'Trouble falling or staying asleep, or sleeping too much',
        'Feeling tired or having little energy',
        'Poor appetite or overeating',
        'Feeling bad about yourself or that you are a failure',
        'Trouble concentrating on things',
        'Moving or speaking slowly, or being fidgety/restless',
        'Thoughts that you would be better off dead'
      ],
      options: [
        { value: 0, label: 'Not at all' },
        { value: 1, label: 'Several days' },
        { value: 2, label: 'More than half the days' },
        { value: 3, label: 'Nearly every day' }
      ]
    },
    {
      id: 'gad7',
      name: 'GAD-7 Anxiety Assessment',
      description: 'A 7-question screening tool for generalized anxiety disorder',
      duration: '2-4 minutes',
      questions: [
        'Feeling nervous, anxious, or on edge',
        'Not being able to stop or control worrying',
        'Worrying too much about different things',
        'Trouble relaxing',
        'Being so restless that it\'s hard to sit still',
        'Becoming easily annoyed or irritable',
        'Feeling afraid as if something awful might happen'
      ],
      options: [
        { value: 0, label: 'Not at all sure' },
        { value: 1, label: 'Several days' },
        { value: 2, label: 'Over half the days' },
        { value: 3, label: 'Nearly every day' }
      ]
    },
    {
      id: 'stress',
      name: 'Perceived Stress Scale',
      description: 'Measures how different situations affect your feelings and stress levels',
      duration: '5-7 minutes',
      questions: [
        'How often have you been upset by unexpected events?',
        'How often have you felt unable to control important things?',
        'How often have you felt nervous and stressed?',
        'How often have you felt confident about handling problems?',
        'How often have you felt things were going your way?',
        'How often have you found that you could not cope?',
        'How often have you been able to control irritations?',
        'How often have you felt on top of things?',
        'How often have you been angered by things outside your control?',
        'How often have you felt difficulties were piling up?'
      ],
      options: [
        { value: 0, label: 'Never' },
        { value: 1, label: 'Almost never' },
        { value: 2, label: 'Sometimes' },
        { value: 3, label: 'Fairly often' },
        { value: 4, label: 'Very often' }
      ]
    }
  ];

  const currentAssessment = assessments.find(a => a.id === activeAssessment);

  const handleAnswerSelect = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentAssessment && currentQuestion < currentAssessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + (answer || 0), 0);
  };

  const getScoreInterpretation = (score: number, assessmentId: string) => {
    switch (assessmentId) {
      case 'phq9':
        if (score <= 4) return { level: 'Minimal', color: 'text-green-600 bg-green-50', message: 'Your responses suggest minimal depression symptoms.' };
        if (score <= 9) return { level: 'Mild', color: 'text-yellow-600 bg-yellow-50', message: 'Your responses suggest mild depression symptoms.' };
        if (score <= 14) return { level: 'Moderate', color: 'text-orange-600 bg-orange-50', message: 'Your responses suggest moderate depression symptoms.' };
        if (score <= 19) return { level: 'Moderately Severe', color: 'text-red-600 bg-red-50', message: 'Your responses suggest moderately severe depression symptoms.' };
        return { level: 'Severe', color: 'text-red-600 bg-red-50', message: 'Your responses suggest severe depression symptoms.' };
      
      case 'gad7':
        if (score <= 4) return { level: 'Minimal', color: 'text-green-600 bg-green-50', message: 'Your responses suggest minimal anxiety symptoms.' };
        if (score <= 9) return { level: 'Mild', color: 'text-yellow-600 bg-yellow-50', message: 'Your responses suggest mild anxiety symptoms.' };
        if (score <= 14) return { level: 'Moderate', color: 'text-orange-600 bg-orange-50', message: 'Your responses suggest moderate anxiety symptoms.' };
        return { level: 'Severe', color: 'text-red-600 bg-red-50', message: 'Your responses suggest severe anxiety symptoms.' };
      
      default:
        if (score <= 13) return { level: 'Low', color: 'text-green-600 bg-green-50', message: 'Your stress level appears to be low.' };
        if (score <= 26) return { level: 'Moderate', color: 'text-yellow-600 bg-yellow-50', message: 'Your stress level appears to be moderate.' };
        return { level: 'High', color: 'text-red-600 bg-red-50', message: 'Your stress level appears to be high.' };
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setActiveAssessment('');
  };

  if (showResults && currentAssessment) {
    const score = calculateScore();
    const interpretation = getScoreInterpretation(score, activeAssessment);
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assessment Results</h2>
            <p className="text-gray-600">{currentAssessment.name}</p>
          </div>

          <div className="mb-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold ${interpretation.color} mb-4`}>
              <span className="mr-2">Score: {score}</span>
              <span>({interpretation.level})</span>
            </div>
            <p className="text-gray-700 max-w-md mx-auto">{interpretation.message}</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <h3 className="font-semibold text-blue-900 mb-2">Important Note</h3>
                <p className="text-blue-800 text-sm">
                  This assessment is a screening tool and not a diagnostic test. The results should not replace 
                  professional evaluation. If you're concerned about your mental health, please consider speaking 
                  with a counselor or mental health professional.
                </p>
              </div>
            </div>
          </div>

          {(interpretation.level !== 'Minimal' && interpretation.level !== 'Low') && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-yellow-900 mb-3">Recommended Next Steps</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-yellow-800 text-sm">Consider booking a counseling session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-yellow-800 text-sm">Explore our mental health resources</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-yellow-800 text-sm">Connect with peer support community</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveAssessment('booking')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Counseling Session
            </button>
            <button
              onClick={resetAssessment}
              className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Take Another Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (activeAssessment && currentAssessment) {
    const progress = ((currentQuestion + 1) / currentAssessment.questions.length) * 100;
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Progress Header */}
          <div className="bg-blue-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{currentAssessment.name}</h2>
              <span className="text-blue-100">
                {currentQuestion + 1} of {currentAssessment.questions.length}
              </span>
            </div>
            <div className="w-full bg-blue-500 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Over the last 2 weeks, how often have you been bothered by the following:
            </h3>
            
            <p className="text-xl text-gray-800 mb-8">
              {currentAssessment.questions[currentQuestion]}
            </p>

            <div className="space-y-3 mb-8">
              {currentAssessment.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswerSelect(option.value)}
                  className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                    answers[currentQuestion] === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      answers[currentQuestion] === option.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion] === option.value && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <button
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {currentQuestion === currentAssessment.questions.length - 1 ? 'View Results' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Mental Health Assessments</h2>
        <p className="text-gray-600">Take validated screening tools to better understand your mental wellness</p>
      </div>

      {/* Important Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-3">
          <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Before You Begin</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• These assessments are screening tools, not diagnostic tests</li>
              <li>• Your responses are completely confidential and anonymous</li>
              <li>• Results will help guide you to appropriate resources and support</li>
              <li>• If you're in crisis, please seek immediate professional help</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Assessment Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{assessment.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{assessment.description}</p>
              <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                <span>{assessment.duration}</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Questions:</span>
                <span className="font-medium text-gray-900">{assessment.questions.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium text-gray-900">Self-Assessment</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Privacy:</span>
                <span className="font-medium text-green-600">Anonymous</span>
              </div>
            </div>

            <button
              onClick={() => setActiveAssessment(assessment.id)}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Start Assessment
            </button>
          </div>
        ))}
      </div>

      {/* Crisis Support */}
      <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900 mb-2">Need Immediate Help?</h3>
            <p className="text-red-800 mb-4">
              If you're having thoughts of self-harm or suicide, or if you're in a mental health crisis, 
              please reach out for help immediately:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Crisis Helpline: 1800-123-456
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Emergency Counseling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;