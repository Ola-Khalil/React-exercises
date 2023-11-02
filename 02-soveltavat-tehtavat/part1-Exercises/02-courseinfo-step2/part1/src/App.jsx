const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.kurssi}</h1>
    </header>
  );
};
const Part = (props) => {
  console.log(props);
  return (
    <p>
      kursseilla {props.osa} on {props.tehtavat} harjoitusta.
    </p>
  );
};
const Content = (props) => {
  console.log(props);
  return (
    <section>
      <Part osa={props.osa1} tehtavat={props.tehtavat1} />
      <Part osa={props.osa2} tehtavat={props.tehtavat2} />
      <Part osa={props.osa3} tehtavat={props.tehtavat3} />
    </section>
  );
};
const Total = (props) => {
  console.log(props);
  return (
    <footer>
      <p>kursseilla on yhteeensä {props.maara} harjoitusta.</p>
    </footer>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <h1>{course}</h1>
      <p>
        kurssilla {part1} on {exercises1} harjoitusta.{" "}
      </p>
      <p>
        kurssilla {part2} on {exercises2} harjoitusta.{" "}
      </p>
      <p>
        kurssilla {part3} on {exercises3} harjoitusta.{" "}
      </p>
      <p>
        kursseilla on yhteeensä {exercises1 + exercises2 + exercises3}{" "}
        harjoitusta.
      </p>
      <hr />
      <code>Tehdään sama uudelleen jaettuna eri komponentteihin</code>
      <hr />
      <Header kurssi={course} />
      <Content
        osa1={part1}
        tehtavat1={exercises1}
        osa2={part2}
        tehtavat2={exercises2}
        osa3={part3}
        tehtavat3={exercises3}
      />
      <Total maara={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
