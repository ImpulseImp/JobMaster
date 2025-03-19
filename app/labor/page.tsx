import TopicContainer from '@/components/topics-content/TopicContainer';
import {
  carouselLaborData,
  laborContentData,
  laborTopics,
} from '@/utils/topics';

function LaborPage() {
  return (
    <div>
      <TopicContainer
        navTopics={laborTopics}
        carouselData={carouselLaborData}
        contentTopicsData={laborContentData}
      />
    </div>
  );
}
export default LaborPage;
