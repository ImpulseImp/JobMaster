import TopicContainer from '@/components/topics-content/TopicContainer';
import {
  carouselElectricData,
  electricContentData,
  electricTopics,
} from '@/utils/topics';

async function delay() {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
}
async function ElectricityPage() {
  await delay();
  return (
    <div>
      <TopicContainer
        navTopics={electricTopics}
        carouselData={carouselElectricData}
        contentTopicsData={electricContentData}
      />
    </div>
  );
}
export default ElectricityPage;
