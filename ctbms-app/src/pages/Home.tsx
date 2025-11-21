import CountsComponent from "../components/home/CountsComponent";
import GetInTouchComponent from "../components/home/GetInTouchComponent";
import SliderComponent from "../components/home/SliderComponent";
import UpcomingEventsComponent from "../components/home/UpcomingEventsComponent";
import VisionAndMissionComponent from "../components/home/VisionAndMissionComponent";

const Home: React.FC = () => {
  return (
    <>
      <SliderComponent />
      <VisionAndMissionComponent />
      <CountsComponent />
      <UpcomingEventsComponent />      
      <GetInTouchComponent />
    </>
  );
};
export default Home;