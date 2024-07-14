"use client";
import { questions } from "@/questions";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function Test() {
  // Initialize state for answers
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // Handle change for each question's answer
  const handleChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted answers:", answers);
  };

  return (
    <form onSubmit={onSubmit}>
      {questions.map((item, questionIndex) => {
        const { id, question, answers: options } = item;
        return (
          <div key={id} className="mb-10 py-4 shadow">
            <h1 className="text-xl font-semibold">{id}. {question}</h1>
            <RadioGroup
              value={answers[questionIndex]}
              onValueChange={(value) => handleChange(questionIndex, value)}
            >
              {options.map((option, optionIndex) => (
                <div className="flex items-center space-x-2" key={optionIndex}>
                  <RadioGroupItem
                    value={optionIndex.toString()} // Store option index as string
                    id={`option-${id}-${optionIndex}`}
                  />
                  <Label htmlFor={`option-${id}-${optionIndex}`} className="text-xl">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      })}
      <Button type="submit" className="w-full text-xl">Trimite</Button>
    </form>
  );
}

export default Test;
