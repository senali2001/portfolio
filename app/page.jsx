import PortfolioInteractions from "./portfolio-interactions";
import { portfolioContent } from "./portfolio-content";

export default function HomePage() {
  return (
    <>
      <PortfolioInteractions />
      <main dangerouslySetInnerHTML={{ __html: portfolioContent }} />
    </>
  );
}
