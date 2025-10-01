

export const useFetchTasks = () => {

    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['tasks'],
      queryFn: () => customFetch.get('/'),
    }); 

    return {isLoading, isError, data};
    
}
lllllllllllllllllllllllllllllllllllllLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL