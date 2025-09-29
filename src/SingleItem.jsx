import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from 'react-toastify'

const SingleItem = ({ item }) => {
 const queryClient = useQueryClient()
 const {mutate:editTask} = useMutation ({
  mutationFn:({taskId, isDone}) => {
    return customFetch.patch(`/${taskId}`, {isDone})
  },
  onSuccess: () =>{
     queryClient.invalidateQueries({queryKey: ['tasks']})
  },
 
 });
 const { mutate: deleteTask, isPending } = useMutation({
   mutationFn: (taskId) => {
     return customFetch.delete(`/${taskId}`)
   },
   onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ['tasks'] })
     toast.success('Task Removed')
  
   },
 });
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({taskId: item.id, isDone: !item.isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        disabled= {isPending}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, provident reiciendis in animi, nobis, quo placeat consequatur libero nulla earum soluta molestias! Consectetur quo quos impedit error cum voluptatibus amet?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex magni error hic pariatur rem aliquam vitae. Placeat, repudiandae fugit possimus aliquam magni facilis nemo quo ad error dolores quis?
