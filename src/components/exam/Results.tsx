import React from 'react';
import { questions } from '@/data/questions';
import { CheckCircle, XCircle, Trophy, BarChart3, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { jsPDF } from 'jspdf';

interface ResultsProps {
  answers: Record<number, number>;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ answers, onRestart }) => {
  const MARKS_PER_CORRECT = 1;
  const MARKS_PER_WRONG = -0.25;
  const MARKS_PER_UNATTEMPTED = -0.95;

  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    questions.forEach((q, index) => {
      if (answers[index] === undefined) {
        unattempted++;
      } else if (answers[index] + 1 === q.correctOption) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const totalMarks = (correct * MARKS_PER_CORRECT) + (incorrect * MARKS_PER_WRONG) + (unattempted * MARKS_PER_UNATTEMPTED);
    const maxMarks = questions.length * MARKS_PER_CORRECT;

    return { correct, incorrect, unattempted, totalMarks, maxMarks };
  };

  const { correct, incorrect, unattempted, totalMarks, maxMarks } = calculateScore();
  const percentage = Math.round((Math.max(0, totalMarks) / maxMarks) * 100);

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    let y = 20;

    // Title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Exam Results / परीक्षा परिणाम', pageWidth / 2, y, { align: 'center' });
    y += 15;

    // Score Summary
    doc.setFontSize(14);
    doc.text(`Score: ${totalMarks.toFixed(2)} / ${maxMarks} (${percentage}%)`, margin, y);
    y += 8;
    doc.setFontSize(11);
    doc.text(`Correct: ${correct} (+${correct * MARKS_PER_CORRECT}) | Wrong: ${incorrect} (${(incorrect * MARKS_PER_WRONG).toFixed(2)}) | Unattempted: ${unattempted} (${(unattempted * MARKS_PER_UNATTEMPTED).toFixed(2)})`, margin, y);
    y += 6;
    doc.setFontSize(9);
    doc.text(`Marking: Correct +1, Wrong -0.25, Unattempted -0.95`, margin, y);
    y += 12;

    // Questions
    doc.setFontSize(10);
    questions.forEach((q, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer !== undefined && userAnswer + 1 === q.correctOption;
      const isUnattempted = userAnswer === undefined;

      // Check if we need a new page
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      // Question number and status
      doc.setFont('helvetica', 'bold');
      const status = isUnattempted ? '[Skipped]' : isCorrect ? '[Correct]' : '[Wrong]';
      doc.text(`Q${q.id}. ${status}`, margin, y);
      y += 5;

      // Question text (truncated if too long)
      doc.setFont('helvetica', 'normal');
      const questionText = q.questionEn.length > 80 ? q.questionEn.substring(0, 80) + '...' : q.questionEn;
      doc.text(questionText, margin, y);
      y += 5;

      // Options on same line
      const optionLabels = ['A', 'B', 'C', 'D'];
      let optionsText = '';
      q.options.en.forEach((opt, i) => {
        const shortOpt = opt.length > 12 ? opt.substring(0, 12) + '..' : opt;
        optionsText += `${optionLabels[i]}) ${shortOpt}  `;
      });
      doc.text(optionsText, margin, y);
      y += 5;

      // User answer and correct answer
      const userAnsText = isUnattempted ? 'Not answered' : optionLabels[userAnswer];
      const correctAnsText = optionLabels[q.correctOption - 1];
      doc.text(`Your Answer: ${userAnsText} | Correct: ${correctAnsText}`, margin, y);
      y += 10;
    });

    doc.save('exam-results.pdf');
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Score Card */}
        <Card className="p-6 md:p-8 text-center space-y-6 glass-panel animate-fade-in">
          <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold">Exam Completed! / परीक्षा पूर्ण!</h1>
            <p className="text-muted-foreground mt-2">Here's your performance summary</p>
          </div>

          <div className="text-5xl font-bold text-primary">
            {totalMarks.toFixed(2)} / {maxMarks}
          </div>
          <p className="text-lg text-muted-foreground">{percentage}%</p>
          <p className="text-xs text-muted-foreground mt-2">
            Marking: Correct +1 | Wrong -0.25 | Unattempted -0.95
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-success/10">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-success">{correct}</p>
              <p className="text-xs text-success">+{correct * MARKS_PER_CORRECT}</p>
              <p className="text-sm text-muted-foreground">Correct / सही</p>
            </div>
            <div className="p-4 rounded-xl bg-destructive/10">
              <XCircle className="w-8 h-8 text-destructive mx-auto mb-2" />
              <p className="text-2xl font-bold text-destructive">{incorrect}</p>
              <p className="text-xs text-destructive">{(incorrect * MARKS_PER_WRONG).toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">Wrong / गलत</p>
            </div>
            <div className="p-4 rounded-xl bg-warning/10">
              <BarChart3 className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold text-warning">{unattempted}</p>
              <p className="text-xs text-warning">{(unattempted * MARKS_PER_UNATTEMPTED).toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">Skipped / छोड़े</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={downloadPDF} variant="outline" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <Button onClick={onRestart} size="lg">
              Try Again / फिर से प्रयास करें
            </Button>
          </div>
        </Card>

        {/* Detailed Answers */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Answer Review / उत्तर समीक्षा</h2>
          
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer !== undefined && userAnswer + 1 === q.correctOption;
            const isUnattempted = userAnswer === undefined;

            return (
              <Card 
                key={q.id} 
                className={`p-4 border-l-4 ${
                  isUnattempted ? 'border-l-muted-foreground' :
                  isCorrect ? 'border-l-success' : 'border-l-destructive'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                    {q.id}
                  </span>
                  <div className="flex-1 space-y-3">
                    <p className="font-medium text-sm">{q.questionEn}</p>
                    <p className="text-sm text-muted-foreground">{q.questionHi}</p>
                    
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className={`px-2 py-1 rounded ${
                        isCorrect ? 'bg-success/10 text-success' : 
                        isUnattempted ? 'bg-muted text-muted-foreground' :
                        'bg-destructive/10 text-destructive'
                      }`}>
                        Your Answer: {isUnattempted ? 'Not answered' : String.fromCharCode(65 + userAnswer)}
                      </span>
                      {!isCorrect && (
                        <span className="px-2 py-1 rounded bg-success/10 text-success">
                          Correct: {String.fromCharCode(64 + q.correctOption)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
