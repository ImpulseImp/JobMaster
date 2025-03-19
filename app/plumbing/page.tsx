import TopicContainer from '@/components/topics-content/TopicContainer';
import {
  carouselPlumbingData,
  plumbingContentData,
  plumbingTopics,
} from '@/utils/topics';

function PlumbingPage() {
  return (
    <div>
      <TopicContainer
        navTopics={plumbingTopics}
        carouselData={carouselPlumbingData}
        contentTopicsData={plumbingContentData}
      />
    </div>
  );
}
export default PlumbingPage;
