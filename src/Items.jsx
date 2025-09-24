import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';
const Items = ({ items }) => {
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['tasks'], queryFn:() => customFetch.get('/Something'),
  }); 
  if (isLoading) {
     return <p style={{margin:'1rem'}}>Loading please wait...</p>
     }
      // if (isError) {
      //   return <p style={{ margin: '1rem' }}>Error encounter...</p>
      // }
      console.log(error);

      if (error) {
        return <p style={{ margin: '1rem' }}>{error.message}</p>
      }



  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
