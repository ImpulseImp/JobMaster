import TopicContainer from '@/components/topics-content/TopicContainer';
import {
  carouselElectricData,
  electricContentData,
  electricTopics,
} from '@/utils/topics';

async function ElectricityPage() {
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
