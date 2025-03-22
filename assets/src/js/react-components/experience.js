const Experience = ({ specialTag, experiences }) => {

  /**
   * Make the array to easy to use
   */
  const flattenArray = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return {};

    if (Array.isArray(arr[0])) {
      return Object.assign({}, ...arr);
    } else if (typeof arr[0] === 'object') {
      return Object.assign({}, ...arr);
    }

    return arr;
  };

  // Check if experiences exist and are not empty
  const hasExperiences =
    experiences &&
    Array.isArray(experiences) &&
    experiences.length > 0;


  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  if (!hasExperiences) {
    return null;
  }

  return (
    <section className="experience min-h-max p-6 my-2 flex flex-col">
      <div className="experience-title my-3 flex flex-col items-center">
        <div className="badge badge-neutral py-3 px-4">Experience</div>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className="" tabIndex="0">
        {experiences.map((singleExperience, index) => {
          const flattenedExperience = flattenArray(singleExperience);

          // Skip if empty after flattening
          if (!flattenedExperience || Object.keys(flattenedExperience).length === 0) {
            return null;
          }

          const startDate = flattenedExperience.start_date
            ? formatDate(flattenedExperience.start_date)
            : '';

          const workingNow = flattenedExperience.working || 'off';
          const endDate = flattenedExperience.end_date
            ? formatDate(flattenedExperience.end_date)
            : '';

          const endDateStatus = workingNow.toLowerCase() === 'on'
            ? 'Present'
            : endDate;

          // Process the responsibility field with special tags
          const responsibility = flattenedExperience.responsibility
            ? specialTag(flattenedExperience.responsibility)
            : '';

          return (
            <div key={index} className="experience-content charming_portfolio_shadow_thin gap-y-3">
              <div className="experience-name flex justify-center items-center">
                <h2 className="text-3xl">{flattenedExperience.institution}</h2>
              </div>
              <div className="experience-info experience-name flex flex-col justify-center gap-y-1">
                <h3 className="text-xl text-left">{flattenedExperience['post-title']}</h3>

                {responsibility && (
                  <p dangerouslySetInnerHTML={{ __html: responsibility }} />
                )}

                {startDate && (
                  <h4 className="experience-time">
                    {`${startDate} - ${endDateStatus}`}
                  </h4>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
