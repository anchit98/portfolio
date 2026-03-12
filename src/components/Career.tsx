import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Analyst</h4>
                <h5>Servetel Communications</h5>
              </div>
              <h3>20-22</h3>
            </div>
            <p>
              Achieved profitability through automation, data accuracy, 
              and campaign optimization — delivering 230% growth 
              forecasts, 10% lead gains, and 30% campaign improvement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst</h4>
                <h5>Annalect India</h5>
              </div>
              <h3>22-24</h3>
            </div>
            <p>
              Delivered $6.6M in automation savings, 176K hours 
              recovered, 75% data accuracy gains, and 70% defect 
              reduction through QA process innovation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Business Analyst</h4>
                <h5>WPP Media India</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Drove $5.8M savings and 176K hours recovered through 
              automation, Jira migration, PowerBI accuracy gains, 
              and mentoring high-performing teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
