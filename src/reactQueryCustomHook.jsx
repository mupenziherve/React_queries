

export const useFetchTasks = () => {

    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['tasks'],
      queryFn: () => customFetch.get('/'),
    }) 
    
}