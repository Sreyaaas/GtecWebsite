import { useEffect } from 'react';

const SUFFIX = 'GTEC Elevators';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : `${SUFFIX} | Elevator & Escalator Contractor in Saudi Arabia`;
  }, [title]);
}
