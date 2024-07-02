import { useState } from 'react';
import './Progress.css';

export default function Question_Demo() {
    const question = "Write a C++ program that reads a list of integers from the user, stores them in a vector, and then sorts the vector in ascending order. After sorting, the program should print the sorted vector. Use the Standard Template Library (STL) for sorting.";

    const answer = `
#include <iostream>
#include <vector>
#include <algorithm>

class IntegerSorter {
public:
    void readNumbers();
    void sortNumbers();
    void printNumbers() const;

private:
    std::vector<int> numbers;
};

void IntegerSorter::readNumbers() {
    int num;
    std::cout << "Enter integers (type 'done' to finish):" << std::endl;
    while (std::cin >> num) {
        numbers.push_back(num);
    }
    std::cin.clear();
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\\n');
}

void IntegerSorter::sortNumbers() {
    std::sort(numbers.begin(), numbers.end());
}

void IntegerSorter::printNumbers() const {
    std::cout << "Sorted numbers:" << std::endl;
    for (int n : numbers) {
        std::cout << n << " ";
    }
    std::cout << std::endl;
}

int main() {
    IntegerSorter sorter;
    sorter.readNumbers();
    sorter.sortNumbers();
    sorter.printNumbers();
    return 0;
}
    `;

    const [isQuestionExpanded, setQuestionExpanded] = useState(false);
    const [isAnswerExpanded, setAnswerExpanded] = useState(false);

    return (
        <>
            <section className="second_section">
                <div className="left_section_02">
                    <div>Question:</div>
                    <div className={isQuestionExpanded ? "full-text" : "clamped-text"}>{question}</div>
                    <button className="continue_preparation" onClick={() => setQuestionExpanded(!isQuestionExpanded)}>
                        {isQuestionExpanded ? "Show Less" : "See More"}
                    </button>
                </div>
                <div className="right_section_02">
                    <div>Answer:</div>
                    <div className={isAnswerExpanded ? "full-text" : "clamped-text"}>
                        <pre>{answer}</pre>
                    </div>
                    <button className="continue_preparation" onClick={() => setAnswerExpanded(!isAnswerExpanded)}>
                        {isAnswerExpanded ? "Show Less" : "See More"}
                    </button>
                </div>
            </section>
        </>
    );
}
