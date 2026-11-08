import { useState } from "react";
import { type Recommendation } from "../data/recommendations";
import { RESUME } from "../data/resume";
import { Arrow } from "./shared";

const recommendationsUrl = `${RESUME.contacts.linkedin.replace(/\/$/, "")}/details/recommendations/`;

export function RecommendationCard({ recommendation, theme = "neutral" }: { recommendation: Recommendation; theme?: string }) {
  const [failedPhoto, setFailedPhoto] = useState("");

  return (
    <article className={`recommendation-card recommendation-card-${theme}`} aria-label={`Recommendation from ${recommendation.name}`}>
      <header className="recommendation-author">
        <span className="recommendation-avatar">
          {recommendation.photo && failedPhoto !== recommendation.photo ? (
            <img src={recommendation.photo} alt={`Portrait of ${recommendation.name}`} width="48" height="48" loading="lazy" onError={() => setFailedPhoto(recommendation.photo ?? "")} />
          ) : <span aria-hidden="true">{recommendation.name.split(" ").map((namePart) => namePart.charAt(0)).join("")}</span>}
        </span>
        <div className="recommendation-person"><h4>{recommendation.name}</h4><p>{recommendation.headline}</p></div>
        <span className="recommendation-linkedin" aria-hidden="true">in</span>
      </header>
      <blockquote className="recommendation-quote" cite={recommendationsUrl}>
        {recommendation.excerpt ? (
          <details className="recommendation-content">
            <summary>
              <span className="recommendation-preview">{recommendation.excerpt}</span>
              <span className="recommendation-toggle"><span className="recommendation-show-full">Read full recommendation</span><span className="recommendation-show-less">Show less</span><Arrow diagonal={false} /></span>
            </summary>
            <div className="recommendation-body">{recommendation.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </details>
        ) : recommendation.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </blockquote>
      <footer className="recommendation-footer">
        <time dateTime={recommendation.date}>{recommendation.displayDate}</time>
        <a href={recommendationsUrl} target="_blank" rel="noreferrer" aria-label={`Read ${recommendation.name}’s recommendation on LinkedIn`}>View on LinkedIn<Arrow /></a>
      </footer>
    </article>
  );
}
