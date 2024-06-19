import Card from "./Card";
import "../styles/layout/Feed.css";
import PropTypes from "prop-types";

function Latest({ data = [] }) {
  return (
    <div className="feed">
      {data.length > 0
        ? data
            .filter((d) => !d.isPopular)
            .slice(0, 2)
            .map((d) => (
              <Card
                key={d.id}
                feed={d.feed}
                subFeed={d.subFeed}
                date={d.publicationTime}
                authorName={d.author.name}
                authorCompany={d.author.companyName}
                authorImg={d.author.imageUrl}
                title={d.title}
                content={d.content}
              />
            ))
        : "No data available."}
    </div>
  );
}
Latest.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Latest;
