import { MainLayout } from '@components/layout';
import {
  Bilboard,
  LatestArticle,
  LatestReview,
  TopBrands,
  TrendingWeeks,
  EditorChoice,
  LatestVideo,
  PopularGroups,
  MacthesProduct
} from '@components/section';
import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataHome } from 'redux/action';

const HomePage = () => {
  const dispacth = useDispatch()
  const { dataHome, isLoading, isError } = useSelector((state: any) => state.homeReducer)
  { isError && alert('Internal Server Error') }

  useEffect(() => {
    dispacth(setDataHome())
  }, [])

  return (
    <div className='mt-32' style={{ minHeight: '30vh' }}>
      {
        isLoading ? (
          <div className="flex justify-center items-center pt-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red"></div>
          </div>
        ) : (
          <>
            <Bilboard />
            <EditorChoice data={dataHome?.["editor's choice"]} />
            <MacthesProduct />
            <div
              style={{ width: 970, height: 250 }}
              className="border container text-center text-2xl border-gray-super-light px-10 font-bold text-gray-dark flex justify-center items-center bg-gray-light m-auto mt-2">
              Horizontal 970x250 <br />
              (Internal campaign only)
            </div>
            <LatestArticle data={dataHome?.["latest articles"]} />
            <LatestReview data={dataHome?.["latest review"]} />
            <PopularGroups />
            <LatestVideo />
            <TrendingWeeks />
            <TopBrands />
            <div className='my-10 container'>
              <h1 className='font-bold text-2xl mb-2'>Female Daily - Find Everything you want to know about beauty on Female Daily</h1>
              <h2 className='font-semibold text-xl leading-tight'>Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! <br />
                We are here to be your friendly solution to all things beauty, inside and out!
              </h2>
            </div>
          </>
        )
      }
    </div >
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage
