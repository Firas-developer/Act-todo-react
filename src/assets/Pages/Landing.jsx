import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"
function Landing() {
    var data = useLocation()
  return (
    <div className="bg-black px-11 py-16">
      <div className="bg-white p-10">
        <Header name={data.state.user}></Header>
        <div className="md:flex justify-between gap-5 mt-10">
          <Card degree={"23°"} place={"Chennai"} bgcolor={"purple"}></Card>
          <Card degree={"20 December"} place={"14:02:50"} bgcolor={"darkblue"}></Card>
          <Card degree={"Built Using"} place={"React"} bgcolor={"orange"}></Card>
        </div>
        <TodoContainer></TodoContainer>
      </div>
    </div>
  );
}

export default Landing;
