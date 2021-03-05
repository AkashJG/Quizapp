import { useState } from "react";
const Question = () => {
  const question = [
    {
      Q: "Q:1 Current President Of America ?",
      Qid: "1",
      A: [
        { Ans: "Kamla Harris", iscorrect: "false" },
        { Ans: "Barak Obama", iscorrect: "false" },
        { Ans: "Joe Biden", iscorrect: "true" },
        { Ans: "Jeorge Bush", iscorrect: "false" },
      ],
    },
    {
      Q: "Q:2 Which one is  not belong to Facebook  ?",
      Qid: "2",
      A: [
        { Ans: "Twitter", iscorrect: "true" },
        { Ans: "Whattsapp", iscorrect: "false" },
        { Ans: "Instagram", iscorrect: "false" },
        { Ans: "fb", iscorrect: "false" },
      ],
    },
    {
      Q: " Q:3 Which is OTT Platform  ?",
      Qid: "3",
      A: [
        { Ans: "Ztv", iscorrect: "false" },
        { Ans: "Starplus", iscorrect: "false" },
        { Ans: "National", iscorrect: "false" },
        { Ans: "Netflix", iscorrect: "true" },
      ],
    },
    {
      Q: "Q:4 Which Indian Athelete have 100M follower's on Instagram ?",
      Qid: "4",
      A: [
        { Ans: "Sachin Tendulker", iscorrect: "false" },
        { Ans: "Herbhazan Singh", iscorrect: "false" },
        { Ans: "Virat Kholi", iscorrect: "true" },
        { Ans: "MS Dhoni", iscorrect: "false" },
      ],
    },
  ];

  const [currentQ, setcurrentQ] = useState(0);
  const [cu, skip] = useState([]);
  const [show, dta] = useState(false);

  const sbmithdlr = () => {
    dta(true);
  };
  const hndlclickskip = () => {
    const Next = currentQ + 1;
    skip([
      ...cu,
      {
        skipid: question[currentQ].Qid,
        isSkiped: "True",
      },
    ]);

    if (Next < question.length) {
      setcurrentQ(Next);
    } else alert("Thank You !!");
  };

  const hndleclick = (iscorrect) => {
    if (iscorrect === "true") {
      skip([
        ...cu,
        {
          RightQid: question[currentQ].Qid,
          right: +1,
        },
      ]);
    } else {
      skip([
        ...cu,
        {
          Qid: question[currentQ].Qid,
          Questiontext: question[currentQ].Q,
          isWrong: -1,
        },
      ]);
    }
    const Next = currentQ + 1;

    if (Next < question.length) setcurrentQ(Next);
    else alert("Thank You !!");
  };

  if (show) {
    return (
      <div className="container">
        <div className="table  table-striped">
          <h3>Results</h3>
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Right Answer</th>
                <th>Skiped</th>
                <th>Wrong</th>
              </tr>
            </thead>
            <tbody>
              {cu.map((cut, index) => (
                <tr key={index}>
                  <td>{question[index].Q}</td>
                  <td>{cut.right}</td>
                  <td>{cut.isSkiped}</td>
                  <td>{cut.isWrong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="container">
        <div className="card  mb-3">
          <div className="card-header">
            <h3>{question[currentQ].Q}</h3>
          </div>
          <div className="card-body" id="ans">
            {question[currentQ].A.map((answer, index) => (
              <span
                onClick={() => hndleclick(answer.iscorrect)}
                type="button"
                key={index}
                className="btn btn-outline-success  form-control mt-3"
              >
                <strong>{answer.Ans}</strong>
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={hndlclickskip}
        className="btn btn-outline-primary mx-5"
        type="button"
      >
        Skip
      </button>
      <button
        onClick={sbmithdlr}
        className="btn btn-outline-success mx-5"
        type="button"
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
