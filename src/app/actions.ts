'use server';

import { getClient } from '@/config/apollo/client';
import { GET_PORTFOLIOS_PAGINATED } from '@/config/graphql/query';
import type { GetPortfoliosPaginatedResponse } from '@/types/api';

export async function loadMoreProjectsAction(skip: number, first: number = 6) {
  try {
    const client = getClient();
    const { data } = await client.query<GetPortfoliosPaginatedResponse>({
      query: GET_PORTFOLIOS_PAGINATED,
      variables: {
        skip,
        first,
      },
      fetchPolicy: 'no-cache',
    });

    return {
      success: true,
      portfolios: data.portfolios,
      totalCount: data.portfoliosConnection.aggregate.count,
    };
  } catch (error) {
    console.error('Error loading more projects:', error);
    return {
      success: false,
      portfolios: [],
      totalCount: 0,
      error: 'Failed to load more projects',
    };
  }
}
