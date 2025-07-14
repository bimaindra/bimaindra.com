'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { Button } from '@heroui/react';
import * as motion from 'motion/react-client';
import type { Portfolio } from '@/types/api';
import type { LoadMoreProjectsProps } from '@/types/components';
import { scrollToElement } from '@/hooks/useScrollToElement';
import { formatDate } from '@/utils/format-date';
import CardProject from '@/components/card-project';
import { loadMoreProjectsAction } from '@/app/actions';

export default function LoadMoreProjects({
  initialPortfolios,
  totalCount,
  itemsPerPage = 6,
  scrollOffset = 100,
}: LoadMoreProjectsProps) {
  const [portfolios, setPortfolios] = useState<Portfolio[]>(initialPortfolios);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  const [scrollToIndex, setScrollToIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const hasMore = portfolios.length < totalCount;

  useEffect(() => {
    if (scrollToIndex !== null && itemRefs.current[scrollToIndex]) {
      setTimeout(() => {
        const targetElement = itemRefs.current[scrollToIndex];
        if (targetElement) {
          scrollToElement(targetElement, scrollOffset);
        }
        setScrollToIndex(null);
      }, 100);
    }
  }, [scrollToIndex, portfolios.length, scrollOffset]);

  const handleLoadMore = () => {
    if (isLoading || !hasMore) return;

    const currentCount = portfolios.length;
    setIsLoading(true);

    startTransition(async () => {
      try {
        const result = await loadMoreProjectsAction(
          portfolios.length,
          itemsPerPage,
        );

        if (
          result.success &&
          result.portfolios &&
          result.portfolios.length > 0
        ) {
          setPortfolios((prev) => [...prev, ...result.portfolios]);

          setScrollToIndex(currentCount);
        }
      } catch (error) {
        console.error('Error loading more projects:', error);
      } finally {
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {portfolios.map((portfolio, index) => (
          <CardProject
            key={portfolio.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            title={portfolio.title}
            excerpt={portfolio.excerpt}
            date={formatDate(portfolio.date, true)}
            url={portfolio.url}
            stacks={portfolio.techStack}
            image={
              portfolio.image !== null
                ? portfolio.image.url
                : `https://placehold.co/600x340/webp/?text=${portfolio.title}&font=montserrat`
            }
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center md:mt-16">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="button"
              color="primary"
              variant="shadow"
              onPress={handleLoadMore}
              isLoading={isLoading || isPending}
              disabled={isLoading || isPending}
            >
              {isLoading || isPending ? 'Loading...' : 'See more projects'}
            </Button>
          </motion.div>
        </div>
      )}
    </>
  );
}
