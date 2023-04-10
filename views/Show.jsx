//? Template for Show 

const React = require("react");
function Index(props) {
  const { projectsData } = props;
  console.log(projectsData);

  return (
    <div>
      <h1>Individual Project Page</h1>
      <ul>
        {projectsData.map((ele, i) => {
          return (
            <div>
              <h3>Project Name: {ele.projectName}</h3>
              <a href={ele.image}>Image</a>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
