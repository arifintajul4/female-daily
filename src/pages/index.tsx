import { MainLayout } from '@components/layout';
import { Bilboard, LatestArticle, LatestReview, TopBrands, TrendingWeeks } from '@components/section';
import EditorChoice from '@components/section/editor-choice';
import LatestVideo from '@components/section/latest-video';
import PopularGroups from '@components/section/popular-groups';
import { ReactElement } from 'react';

const HomePage = () => {
  return (
    <div className='mt-32'>
      <Bilboard />
      <EditorChoice />
      <div style={{ width: 970, height: 250 }} className="border text-center text-2xl border-gray-super-light px-10 font-bold text-gray-dark flex justify-center items-center bg-gray-light m-auto mt-2">
        Horizontal 970x250 <br />
        (Internal campaign only)
      </div>
      <LatestArticle />
      <LatestReview />
      <PopularGroups />
      <LatestVideo />
      <TrendingWeeks />
      <TopBrands />
      <div className='my-10'>
        <h1 className='font-bold text-2xl mb-2'>Female Daily - Find Everything you want to know about beauty on Female Daily</h1>
        <h2 className='font-semibold text-xl leading-tight'>Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! <br />
          We are here to be your friendly solution to all things beauty, inside and out!
        </h2>
      </div>
    </div>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage
