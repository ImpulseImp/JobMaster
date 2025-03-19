import TopicContainer from '@/components/topics-content/TopicContainer';
import {
  carouselHydraulicsData,
  hydraulicsContentData,
  hydraulicsTopics,
} from '@/utils/topics';

function HydraulicsPage() {
  return (
    <div>
      <TopicContainer
        navTopics={hydraulicsTopics}
        carouselData={carouselHydraulicsData}
        contentTopicsData={hydraulicsContentData}
      />
    </div>
  );
}
export default HydraulicsPage;
