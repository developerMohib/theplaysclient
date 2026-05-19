import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './axiosInstance';
import { AxiosError } from 'axios';
import { IGame } from '../utilitis/all.types';

interface GamesResponse {
    success: boolean;
    count: number;
    data: IGame[];
}
const fetchGames = async (): Promise<GamesResponse> => {
    const response = await axiosInstance.get<GamesResponse>(
        "/game/popular"
    );

    return response.data;
};
const useGames = () => {
    const query = useQuery<
        GamesResponse,
        AxiosError
    >({
        queryKey: ["games"],

        queryFn: fetchGames,

        staleTime: 1000 * 60 * 5, // 5 min

        gcTime: 1000 * 60 * 10, // 10 min

        retry: 2,

        refetchOnWindowFocus: false,
    });

    return {
        ...query,

        games: query.data?.data ?? [],

        totalGames: query.data?.count ?? 0,
    };
};

export default useGames;


const getOneGame = async (id: string): Promise<IGame> => {
    const res = await axiosInstance.get(`/game/my/${id}`
    )

    return res.data.data
}

export const useOneGame = (id: string) => {
    return useQuery({
        queryKey: ['game', id],

        queryFn: () => getOneGame(id),

        enabled: !!id,

        staleTime: 1000 * 60 * 5,
    })
}