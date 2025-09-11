import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswer } from "../../services/answerService";
import { getListQuestion } from "../../services/questionsService";
import "./Result.css";

function Result() {
    const params = useParams();
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const dataAnswers = await getAnswer(params.id);
            const dataQuestions = await getListQuestion(dataAnswers.topicId);
            console.log(">>> dataAnswers:", dataAnswers);

            let resultFinal = [];
            for (let i = 0; i < dataQuestions.length; i++) {
                const found = dataAnswers.answers.find(
                    ans => Number(ans.questionID) === Number(dataQuestions[i].id)
                );
                resultFinal.push({
                    ...dataQuestions[i],
                    userAnswer: found ? found.answer : null
                });

            }
            setDataResult(resultFinal);
        };
        fetchApi();
    }, [params.id]);

    return (
        <>
            <h1>Kết quả: </h1>
            <div className="result__list">
                {dataResult.map((item, index) => (
                    <div className="form-quiz__item" key={item.id}>
                        <p>
                            Câu {index + 1}: {item.question}
                        </p>

                        {item.correctAnswer === item.userAnswer ? (
                            <span className="result__tag result__tag--true">Đúng ✅</span>
                        ) : (
                            <span className="result__tag result__tag--false">Sai ❌</span>
                        )}

                        {item.answers.map((itemAns, indexAns) => {
                            let className = "";

                            if (item.correctAnswer === indexAns) {
                                className = "result__item--result"; // đáp án đúng
                            }

                            if (
                                item.userAnswer === indexAns &&
                                item.userAnswer !== item.correctAnswer
                            ) {
                                className = "result__item--selected"; // user chọn sai
                            }

                            if (item.userAnswer === indexAns) {
                                className += " result__item--user"; // highlight user chọn
                            }

                            return (
                                <div className="result__answer" key={indexAns}>
                                    <input
                                        type="radio"
                                        checked={item.userAnswer === indexAns}
                                        readOnly
                                    />
                                    <label className={className}>{itemAns}</label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Result;
