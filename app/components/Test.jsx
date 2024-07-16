
"use client";
import { questions } from "../../questions";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem} from "../../components/ui/radio-group";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createAnswers} from "../actions";
import toast from "react-hot-toast";
import Link from "next/link";


function Test() {
  // Initialize state for answers
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // Handle change for each question's answer
  const handleChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // Use mutation for form submission
  const {mutate, isPending} = useMutation({
    mutationFn: (answers) => createAnswers(answers),
    onSuccess: () => {
      toast.success("Am primit raspunsul!");
    },
    onError: (error) => {
      toast.error("A apărut o eroare la trimiterea răspunsului.");
      console.error("Error submitting answers:", error);
    },
  });

  // Handle form submission
  

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted answers:", answers);
    // Transform answers to match expected format
    //const transformedAnswers = answers.map((answer) => answer.toString());
    mutate(answers);
  };


  if(isPending) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      <button>
        <Link href="/profile" className="w-20 flex items-center">
          <h2>Inapoi la Info</h2>
        </Link>
      </button>
      <form onSubmit={onSubmit}>
        {questions.map((item, questionIndex) => {
          const { id, question, answers: options } = item;
          return (
            <div key={id} className="mb-10 py-4 shadow">
              <h1 className="text-xl font-semibold">
                {id}. {question}
              </h1>
              <RadioGroup
                value={answers[questionIndex]}
                onValueChange={(value) => handleChange(questionIndex, value)}
              >
                {options.map((option, optionIndex) => (
                  <div
                    className="flex items-center space-x-2"
                    key={optionIndex}
                  >
                    <RadioGroupItem
                      value={optionIndex.toString()} // Store option index as string
                      id={`option-${id}-${optionIndex}`}
                    />
                    <Label
                      htmlFor={`option-${id}-${optionIndex}`}
                      className="text-xl"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          );
        })}
        <Button type="submit" className="w-full text-xl" disabled={isPending}>
          {isPending ? "Se trimite..." : "Trimite"}
        </Button>
      </form>
    </>
  );
}

export default Test;
